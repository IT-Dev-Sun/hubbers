import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Drawer, Form, Button, Input, Select, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UploadImage from '../../../components/UploadImage';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const AdminCreate = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [passwordUp, setPasswordUp] = useState(false);
  const [roleList, setRoleList] = useState(null);
  const { list } = useSelector((state) => state.adminRole);

  useEffect(() => {
    dispatch(Actions.getAllAdminRole());
  }, [dispatch]);

  useEffect(() => {
    setRoleList(list);
  }, [list]);

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        firstname: filterData[0].firstname,
        lastname: filterData[0].lastname,
        email: filterData[0].email,
        roleId: filterData[0].roleId,
        published: filterData[0].published,
        avatar: filterData[0].avatar,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    /* eslint-disable */
    delete values.confirmPassword;
    if (!values.password) {
      delete values.password;
    }
    /* eslint-enable */
    dispatch(Actions.updateAdmin({ ...values, id }));
    onClose();
  };

  const handlePassword = (e) => {
    if (e.target.value) {
      setPasswordUp(true);
    } else {
      setPasswordUp(false);
    }
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
        title="Create a New Admin"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
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
            <Input placeholder="Please enter Email" />
          </Form.Item>
          <Row>
            <Col style={{ width: '50%', paddingRight: '8px' }}>
              <Form.Item name="password" label="Password">
                <Input
                  placeholder="Please enter Password"
                  type="password"
                  onChange={handlePassword}
                />
              </Form.Item>
            </Col>
            <Col style={{ width: '50%', paddingLeft: '8px' }}>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                  {
                    required: passwordUp && true,
                    message: 'Please confirm',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      /* eslint-disable */
                      return Promise.reject('Confirm Error');
                      /* eslint-enable */
                    },
                  }),
                ]}
              >
                <Input
                  placeholder="Please enter Confirm Password"
                  type="password"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col style={{ width: '50%', paddingRight: '8px' }}>
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
                <Select placeholder="Please choose the Role">
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
            </Col>
            <Col style={{ width: '50%', paddingLeft: '8px' }}>
              <Form.Item
                name="published"
                label="Published"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Published',
                  },
                ]}
              >
                <Select placeholder="Please choose the Published">
                  <Option value>Published</Option>
                  <Option value={false}>Not Published</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
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
