/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import UploadImage from '../../../../components/UploadImage';

const { Option } = Select;
const { TextArea } = Input;

const EditCountry = ({ id, data, includeImage, category, parentList }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setIsImage(includeImage);
  }, [includeImage]);
  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        name: filterData[0].name,
        categoryId: filterData[0].categoryId,
        featuredImg: filterData[0].featuredImg,
        description: filterData[0].description,
        parentId: filterData[0].parentId,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (value) => {
    setIsImage(category.filter((item) => item.id === value)[0].includeImage);
  };
  // console.log(parentList)
  const onSubmit = (values) => {
    if (values.parentId === undefined) values.parentId = null;
    dispatch(Actions.updateBasicType({ ...values, id }));
    // dispatch(Actions.getAllAssessmentQuestions());

    onClose();
  };

  return (
    <>
      <Tooltip title="View/Edit">
        <Button
          type="primary"
          size="small"
          icon={<EditOutlined />}
          onClick={showDrawer}
        />
      </Tooltip>
      <Drawer
        title="Edit a Basic Type"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onSubmit}
          className="p-4 mt-4"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: 'Please enter Basic Type Name' },
                ]}
              >
                <Input placeholder="Please enter Country Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="categoryId"
                label="Type Category"
                rules={[
                  { required: true, message: 'Please choose a Type Category' },
                ]}
              >
                <Select
                  placeholder="Please choose the Type Category"
                  onChange={onChange}
                >
                  {category.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.displayName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {parentList.length !== 0 && (
            <Row>
              <Col span={24}>
                <Form.Item name="parentId" label="Parent Type">
                  <Select
                    style={{ width: '100%' }}
                    placeholder="Parent Type"
                    allowClear
                  >
                    {parentList?.map((item) => {
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
          )}
          {isImage === true && (
            <>
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter description',
                      },
                    ]}
                  >
                    <TextArea type="text" placeholder="description" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="featuredImg"
                    rules={[
                      {
                        required: true,
                        message: 'Please upload image',
                      },
                    ]}
                  >
                    <UploadImage />
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}
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

export default EditCountry;
