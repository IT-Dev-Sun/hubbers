import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Form, Button, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UploadImage from '../../../components/UploadImage';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const AdminCreate = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const [roleList, setRoleList] = useState(null);
  const { list } = useSelector((state) => state.adminRole);

  useEffect(() => {
    dispatch(Actions.getAllAdminRole());
  }, [dispatch]);

  useEffect(() => {
    setRoleList(list);
  }, [list]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createAdmin(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Admin
      </Button>
      <Drawer
        title="Create a New Admin"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="px-4 py-5"
        >
          <Form.Item
            name="firstname"
            label="First Name"
            rules={[{ required: true, message: 'Please enter First Name' }]}
          >
            <Input placeholder="Please enter First Name" />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Last Name"
            rules={[{ required: true, message: 'Please enter Last Name' }]}
          >
            <Input placeholder="Please enter Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, email: true, message: 'Please enter Email' },
            ]}
          >
            <Input placeholder="Please enter Last Name" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter Password' }]}
          >
            <Input placeholder="Please enter Password" type="password" />
          </Form.Item>
          <Form.Item
            name="roleId"
            label="Admin Role"
            rules={[
              {
                required: true,
                message: 'Please choose the Role',
              },
            ]}
          >
            <Select
              style={{ width: '100%' }}
              placeholder="Please choose the Role"
            >
              {roleList &&
                roleList.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Form.Item name="avatar" label="Avatar" className="mb-0">
              <UploadImage />
            </Form.Item>
            <div className="pb-2">
              <Button onClick={onClose} style={{ marginRight: 12 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default AdminCreate;
