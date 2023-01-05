import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const CreateLanguage = () => {
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
    dispatch(Actions.createLanguage(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Language
      </Button>
      <Drawer
        title="Create a New Language"
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
          className="p-4 mt-4"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="code"
                label="Language Code"
                rules={[
                  { required: true, message: 'Please enter Language Code' },
                ]}
              >
                <Input placeholder="Please enter Language Code" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Language Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Language Name',
                  },
                ]}
              >
                <Input placeholder="Please enter Language Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="nativeName"
                label="Native Name"
                rules={[
                  { required: true, message: 'Please enter a Native Name' },
                ]}
              >
                <Input placeholder="Please enter the Native Name" />
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

export default CreateLanguage;
