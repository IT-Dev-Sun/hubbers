import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Switch, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;
const { Option } = Select;

const CreateBasicTypeCategory = ({ categoryList }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
    form.resetFields();
  };

  const onSubmit = (values) => {
    dispatch(Actions.createBasicTypeCategory(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New BasicTypeCategory
      </Button>
      <Drawer
        title="Create a New BasicTypeCategory"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
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
                  {categoryList?.map((item) => {
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

export default CreateBasicTypeCategory;
