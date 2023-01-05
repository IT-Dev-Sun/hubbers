import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer,
  Form,
  Row,
  Col,
  Space,
  Input,
  Select,
  Switch,
  Button,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getRandomInt, slugify } from '../../../../../helpers/Utils';
import CommunitySelect from '../../../../../components/util-components/selector/CommunitySelect';
import UserSelect from '../../../../../components/util-components/selector/UserSelect';
import * as Actions from '../../../../../redux/actions';

const { TextArea } = Input;
const { Option } = Select;

const CourseEdit = ({ id, data }) => {
  const dispatch = useDispatch();
  const { groupPrivacyOptionList } = useSelector(
    (state) => state.groupPrivacyOption
  );
  const { list } = useSelector((state) => state.courseStructure);
  const [privacyOption, setPrivacyOption] = useState([]);
  const [courseStructureList, setCourseStructureList] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isGlobal, setIsGlobal] = useState(false);
  const [published, setPublished] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(Actions.getAllPublicGroupPrivacyOption());
    dispatch(Actions.getAllCourseStructure());
  }, [dispatch]);

  useEffect(() => {
    setPrivacyOption(groupPrivacyOptionList);
  }, [groupPrivacyOptionList]);

  useEffect(() => {
    setCourseStructureList(list);
  }, [list]);

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        ...filterData[0],
        instructor: filterData[0].detail?.instructor.id,
        section: filterData[0].detail?.section.id,
        cType: filterData[0].detail?.cType.id,
        unit: filterData[0].detail?.unit.id,
      });
    }
    setPublished(filterData[0].published);
    setIsGlobal(filterData[0].isGlobal);
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(
      Actions.updateCourse({
        ...values,
        id,
        published,
        isGlobal,
        detail: {
          instructor: {
            id: values.instructor,
            name: courseStructureList?.filter(
              (item) => item.id === values.instructor
            )[0].name,
            singularName: courseStructureList?.filter(
              (item) => item.id === values.instructor
            )[0].singularName,
            iaName: courseStructureList?.filter(
              (item) => item.id === values.instructor
            )[0].iaName,
            pluralName: courseStructureList?.filter(
              (item) => item.id === values.instructor
            )[0].pluralName,
            ppName: courseStructureList?.filter(
              (item) => item.id === values.instructor
            )[0].ppName,
            category: courseStructureList?.filter(
              (item) => item.id === values.instructor
            )[0].category,
          },
          section: {
            id: values.section,
            name: courseStructureList?.filter(
              (item) => item.id === values.section
            )[0].name,
            singularName: courseStructureList?.filter(
              (item) => item.id === values.section
            )[0].singularName,
            iaName: courseStructureList?.filter(
              (item) => item.id === values.section
            )[0].iaName,
            pluralName: courseStructureList?.filter(
              (item) => item.id === values.section
            )[0].pluralName,
            ppName: courseStructureList?.filter(
              (item) => item.id === values.section
            )[0].ppName,
            category: courseStructureList?.filter(
              (item) => item.id === values.section
            )[0].category,
          },
          cType: {
            id: values.cType,
            name: courseStructureList?.filter(
              (item) => item.id === values.cType
            )[0].name,
            singularName: courseStructureList?.filter(
              (item) => item.id === values.cType
            )[0].singularName,
            iaName: courseStructureList?.filter(
              (item) => item.id === values.cType
            )[0].iaName,
            pluralName: courseStructureList?.filter(
              (item) => item.id === values.cType
            )[0].pluralName,
            ppName: courseStructureList?.filter(
              (item) => item.id === values.cType
            )[0].ppName,
            category: courseStructureList?.filter(
              (item) => item.id === values.cType
            )[0].category,
          },
          unit: {
            id: values.unit,
            name: courseStructureList?.filter(
              (item) => item.id === values.unit
            )[0].name,
            singularName: courseStructureList?.filter(
              (item) => item.id === values.unit
            )[0].singularName,
            iaName: courseStructureList?.filter(
              (item) => item.id === values.unit
            )[0].iaName,
            pluralName: courseStructureList?.filter(
              (item) => item.id === values.unit
            )[0].pluralName,
            ppName: courseStructureList?.filter(
              (item) => item.id === values.unit
            )[0].ppName,
            category: courseStructureList?.filter(
              (item) => item.id === values.unit
            )[0].category,
          },
        },
      })
    );
    onClose();
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<EditOutlined />}
        size="small"
      />
      <Drawer
        title="Update a course"
        width={542}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="p-4 pt-5"
        >
          <Row>
            <Col span={24} className="text-right">
              <Space>
                <Form.Item label="Published" name="published" className="mb-0">
                  <Switch checked={published} onChange={setPublished} />
                </Form.Item>
                <Form.Item label="Global" name="isGlobal" className="mb-0 ml-3">
                  <Switch checked={isGlobal} onChange={setIsGlobal} />
                </Form.Item>
              </Space>
            </Col>
            <Col span={24}>
              <Form.Item
                name="communityId"
                label="Community Name"
                rules={
                  !isGlobal
                    ? [{ required: true, message: 'Please choose a community' }]
                    : []
                }
              >
                <CommunitySelect disabled={isGlobal} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="createdBy"
                label="Created By"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the User',
                  },
                ]}
              >
                <UserSelect />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Course Title"
                rules={[{ required: true, message: 'Please enter title' }]}
              >
                <Input
                  placeholder="Please enter title"
                  onChange={(e) =>
                    form.setFieldsValue({
                      slug: e.target.value
                        ? `${slugify(e.target.value)}-${getRandomInt(
                            100000,
                            999999
                          )}`
                        : '',
                    })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                hidden
                name="slug"
                label="Course Slug"
                rules={[
                  { required: true, message: 'Please enter Course Slug' },
                ]}
                className="ml-2"
              >
                <Input disabled placeholder="Please enter Course Slug" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="tagLine" label="Tag Line">
                <TextArea rows={3} placeholder="Please enter Tag Line" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <TextArea rows={3} placeholder="Please enter Description" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="privacyOptionId"
                label="Privacy Option"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Option',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the Option"
                >
                  {privacyOption &&
                    privacyOption.map((item) => {
                      return (
                        <Option key={item.id} value={item.id}>
                          {item.name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="cType"
                label="Table of Contents"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the type"
                >
                  {courseStructureList &&
                    courseStructureList
                      .filter((c) => c.category === 'courseType')
                      .map((item) => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="unit"
                label="Lessons"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the lesson',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the type"
                >
                  {courseStructureList &&
                    courseStructureList
                      .filter((c) => c.category === 'unit')
                      .map((item) => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="section"
                label="Sections"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the section',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the type"
                >
                  {courseStructureList &&
                    courseStructureList
                      .filter((c) => c.category === 'section')
                      .map((item) => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="instructor"
                label="Instructors"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the instructor',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the type"
                >
                  {courseStructureList &&
                    courseStructureList
                      .filter((c) => c.category === 'instructor')
                      .map((item) => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text-right">
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default CourseEdit;
