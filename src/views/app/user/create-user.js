import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import AvatarUpload from '../../../components/util-components/Upload/AvatarUpload';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const CreateUserButton = () => {
  const [visible, setVisible] = useState(false);
  const [uploadedImg, setImage] = useState('');

  const { userRoleData } = useSelector((state) => state.userRole);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getAllUserRoles());
  }, [dispatch]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChangeAvatar = (imageUrl) => {
    setImage(imageUrl);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createUser({ ...values, avatar: uploadedImg }));
  };

  return (
    <>
      <>
        <Button type="primary" onClick={showDrawer}>
          <PlusOutlined /> Create New User
        </Button>
        <Drawer
          title="Create a New User"
          width={1000}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form
            layout="vertical"
            hideRequiredMark
            onFinish={onSubmit}
            className="p-4 mt-4"
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  name="firstname"
                  label="First Name"
                  rules={[
                    { required: true, message: 'Please enter First Name' },
                  ]}
                  className="mr-2"
                >
                  <Input placeholder="Please enter First Name" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="lastname"
                  label="Last Name"
                  rules={[
                    { required: true, message: 'Please enter Last Name' },
                  ]}
                  className="ml-2"
                >
                  <Input placeholder="Please enter Last Name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter email' }]}
                  className="mr-2"
                >
                  <Input placeholder="Please enter email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: 'Please enter user Password' },
                  ]}
                  className="ml-2"
                >
                  <Input
                    placeholder="Please enter user Password"
                    type="password"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="preferedRole"
                  label="preferedRole"
                  rules={[
                    {
                      required: true,
                      message: 'Please choose the preferedRole',
                    },
                  ]}
                  className="mr-2"
                >
                  <Select placeholder="Please choose the value">
                    {userRoleData &&
                      userRoleData.map((item) => {
                        return (
                          <Option value={item.id} key={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="role"
                  label="Role"
                  rules={[
                    { required: true, message: 'Please choose the Role' },
                  ]}
                  className="ml-2"
                >
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter Role"
                    defaultValue={[]}
                    onChange={() => {}}
                    optionLabelProp="label"
                  >
                    {userRoleData.map((item) => {
                      return (
                        <Option value={item.id} label={item.name} key={item.id}>
                          <span>{item.name}</span>
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Card title="Avatar">
                <AvatarUpload statusChange={onChangeAvatar} />
              </Card>
            </Row>

            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Drawer>
      </>
    </>
  );
};

export default CreateUserButton;
