import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;

const CreateSetting = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createSetting(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Setting
      </Button>
      <Drawer
        title="Create a New Setting"
        width={400}
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
          <Form.Item
            name="name"
            label="Setting Name"
            rules={[{ required: true, message: 'Please enter setting name' }]}
          >
            <Input placeholder="Please enter setting name" />
          </Form.Item>
          <Form.Item
            name="value"
            label="Setting Value"
            rules={[
              {
                required: true,
                message: 'Please enter value',
              },
            ]}
          >
            <Input placeholder="Please enter value" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Setting Description"
            rules={[
              {
                required: true,
                message: 'Please enter description',
              },
            ]}
          >
            <TextArea rows={3} placeholder="Please enter description" />
          </Form.Item>
          <div className="text-right">
            <Button className="mr-2" onClick={onClose}>
              Cancel
            </Button>
            <Button className="ml-2" type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateSetting;
