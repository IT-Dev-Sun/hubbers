/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import {
  Drawer,
  Form,
  Button,
  Col,
  Input,
  Tooltip,
  Select,
  Switch,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;
const { Option } = Select;

const EditBasicTypeCategory = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        name: filterData[0].name,
        displayName: filterData[0].displayName,
        description: filterData[0].description,
        parentCategoryId: filterData[0].parentCategoryId,
        includeImage: filterData[0].includeImage,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    if (values.parentCategoryId === undefined) values.parentCategoryId = null;
    dispatch(Actions.updateBasicTypeCategory({ ...values, id }));
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
        title="Edit a New BasicTypeCategory"
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
          className="p-4 pt-5 mt-5"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="BasicTypeCategory Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter BasicTypeCategory Name',
                  },
                ]}
              >
                <Input placeholder="Please enter BasicTypeCategory Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="displayName"
                label="BasicTypeCategory Display Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter BasicTypeCategory Display Name',
                  },
                ]}
              >
                <Input placeholder="Please enter BasicTypeCategory Display Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="BasicTypeCategory Description"
              >
                <TextArea
                  rows={3}
                  placeholder="Please enter BasicTypeCategory Description"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="parentCategoryId"
                label="Parent Assessment Category"
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Parent Assessment Category"
                  allowClear
                >
                  {data?.map((item) => {
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
          <Row>
            <Col span={24}>
              <Form.Item
                name="includeImage"
                label="Include Image"
                valuePropName="checked"
              >
                <Switch />
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

export default EditBasicTypeCategory;
