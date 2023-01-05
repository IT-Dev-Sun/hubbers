import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer,
  Form,
  Button,
  Input,
  Select,
  Switch,
  Tooltip,
  Row,
  Col,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { FormGroup, Label, Input as RInput } from 'reactstrap';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import UploadImage from '../../../../components/UploadImage';
import CountrySelect from '../../../../components/util-components/selector/CountrySelect';

import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;
const { Option } = Select;

const EditExpertise = ({ id, expertiseList }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [data, setData] = useState(null);
  const [isDraft, setIsDraft] = useState();
  const [isRemotely, setIsRemotely] = useState();
  const [visible, setVisible] = useState(false);
  const [isWorkplace, setIsWorkplace] = useState(true);
  const [experterList, setExperterList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [workplaceList, setWorkplaceList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const { users } = useSelector((state) => state.users);
  const workplace = useSelector((state) => state.moduleType);
  const expertiseCategory = useSelector((state) => state.expertiseCategory);
  const { allQuestionsList } = useSelector(
    (state) => state.assessmentQuestions
  );

  useEffect(() => {
    dispatch(Actions.getAllUsers());
    dispatch(Actions.getAllModuleType());
    dispatch(Actions.getAllQuestions());
    dispatch(Actions.getAllExpertiseCategory());
  }, [dispatch]);

  useEffect(() => {
    if (expertiseList && expertiseList.length) {
      // eslint-disable-next-line no-undef
      const list = expertiseList.filter((e) => e.id === id)[0];
      if (list) {
        setIsDraft(list.isDraft);
        setIsRemotely(list.isRemotely);
        // eslint-disable-next-line no-unused-expressions
        list.workspaceId === null
          ? setIsWorkplace(true)
          : setIsWorkplace(false);
        setData(list);
      }
    }
  }, [expertiseList, id]);

  useEffect(() => {
    if (users) {
      const list = users.map((u) => {
        if (u.roles.length) return u.roles[0].name === 'Expert';
        return false;
      });
      setExperterList(list);
    }
    if (workplace) {
      setWorkplaceList(workplace.list);
    }
    if (allQuestionsList) {
      setQuestionList(allQuestionsList);
    }
    if (
      expertiseCategory &&
      expertiseCategory.list &&
      expertiseCategory.list.length
    ) {
      const categories = expertiseCategory.list.filter(
        (c) => c.categoryType === 'expertiseCategory'
      );
      const tags = expertiseCategory.list.filter(
        (c) => c.categoryType === 'skill'
      );
      if (categories) setCategoryList(categories);
      if (tags) setTagList(tags);
    }
  }, [users, workplace, allQuestionsList, expertiseCategory]);

  const showDrawer = () => {
    let category = [];
    category = data.categories.map((c) => {
      return c.id;
    });
    let tag = [];
    tag = data.tags.map((t) => {
      return t.id;
    });
    form.setFieldsValue({
      ...data,
      categoryIds: category,
      tagIds: tag,
    });
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(
      Actions.updateExpertise({ data: { ...values, isRemotely, isDraft }, id })
    );
    onClose();
  };

  return (
    <>
      <Tooltip title="View / Edit">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={showDrawer}
          size="small"
        />
      </Tooltip>
      <Drawer
        title="Update a New Expertise"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="px-4 mt-5"
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter Name' }]}
          >
            <Input
              placeholder="Please enter Name"
              onChange={(e) =>
                form.setFieldsValue({
                  slug: `${slugify(e.target.value)}-${getRandomInt(
                    100000,
                    999999
                  )}`,
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="slug"
            label="Slug"
            rules={[{ required: true, message: 'Please enter slug' }]}
          >
            <Input placeholder="Please enter Name" disabled />
          </Form.Item>
          <Form.Item
            name="expertId"
            label="Experter"
            rules={[{ required: true, message: 'Please select a experter' }]}
          >
            <Select
              showSearch
              placeholder="Please choose the experter"
              filterOption={(input, option) =>
                option.children
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {experterList &&
                experterList.map((item, idx) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <Option value={item.id} key={idx}>
                      {item.firstname ? item.firstname : ''}&nbsp;
                      {item.lastname ? item.lastname : ''}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <p className="mb-1">Workplace/Question</p>
          <Switch
            defaultChecked={isWorkplace}
            onChange={() => {
              // eslint-disable-next-line no-unused-expressions
              isWorkplace
                ? form.setFieldsValue({ questionId: null })
                : form.setFieldsValue({ workspaceId: null });
              setIsWorkplace(!isWorkplace);
            }}
            className="mb-3"
          />
          {!isWorkplace ? (
            <Form.Item
              name="workspaceId"
              label="Workplace"
              rules={[{ required: true, message: 'Please select a workplace' }]}
            >
              <Select
                showSearch
                placeholder="Please choose the workplace"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {workplaceList &&
                  workplaceList.map((item) => {
                    return (
                      <Option value={item.id} key={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
          ) : (
            <Form.Item
              name="questionId"
              label="Question"
              rules={[{ required: true, message: 'Please select a question' }]}
            >
              <Select
                showSearch
                placeholder="Please choose the question"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {questionList &&
                  questionList.map((item) => {
                    return (
                      <Option value={item.id} key={item.id}>
                        {item.criteria}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
          )}
          <Form.Item
            name="workPlace"
            label="WorkPlace"
            rules={[{ required: true, message: 'Please enter workplace' }]}
          >
            <Input type="text" placeholder="Please enter workplace" />
          </Form.Item>
          <Form.Item name="countryId" label="Country">
            <CountrySelect />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: 'Please enter workplace' }]}
          >
            <Input type="text" placeholder="Please enter workplace" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <TextArea rows={3} placeholder="Please enter description" />
          </Form.Item>
          <Row align="middel">
            <Col md={12}>
              <Form.Item
                name="featuredImageUrl"
                label="Image"
                className="mb-0"
                // rules={[{ required: true, message: 'Please upload the image' }]}
              >
                <UploadImage />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item
                name="isDraft"
                label=""
                className="mb-0"
                rules={[{ required: false }]}
              >
                <FormGroup check>
                  <Label check>
                    <RInput
                      type="checkbox"
                      defaultChecked={isDraft}
                      onChange={(e) => setIsDraft(e.target.checked)}
                    />
                    As Draft
                  </Label>
                </FormGroup>
              </Form.Item>
              <Form.Item
                name="isRemotely"
                label=""
                className="mb-0"
                rules={[{ required: false }]}
              >
                <FormGroup check>
                  <Label check>
                    <RInput
                      type="checkbox"
                      defaultChecked={isRemotely}
                      onChange={(e) => setIsRemotely(e.target.checked)}
                    />
                    Remotely
                  </Label>
                </FormGroup>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="categoryIds"
            label="Categories"
            rules={[{ required: true, message: 'Please select a experter' }]}
          >
            <Select
              showSearch
              mode="multiple"
              placeholder="Please choose the category"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {categoryList &&
                categoryList.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item
            name="tagIds"
            label="Tags"
            rules={[{ required: true, message: 'Please select a tag' }]}
          >
            <Select
              showSearch
              mode="multiple"
              placeholder="Please choose the tag"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {tagList &&
                tagList.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <div className="text-right">
            <Button onClick={onClose} style={{ marginRight: 12 }}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default EditExpertise;
