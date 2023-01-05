import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;

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
    dispatch(Actions.createLanguageLevel(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Language Level
      </Button>
      <Drawer
        title="Create a New Language Level"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          layout="vertical"
          form={form}
          hideRequiredMark
          onFinish={onSubmit}
          className="px-4 py-5 mt-5"
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Language Level Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Language Level Name',
                  },
                ]}
              >
                <Input placeholder="Please enter Language Level Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <TextArea rows={3} placeholder="Please enter the Description" />
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
