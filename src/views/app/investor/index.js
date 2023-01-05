import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import AvatarUpload from '../../../components/util-components/Upload/AvatarUpload';
import * as Actions from '../../../redux/actions';

const { Option } = Select;

const Investors = ({ match }) => {
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
    console.log('submit values =>', { ...values, avatar: uploadedImg });
    // dispatch(Actions.createUser(values));
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="investors.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Colxx xxs="12" className="mb-4">
        <div>
          <Button type="primary" onClick={showDrawer}>
            <PlusOutlined /> Create New Investor
          </Button>

          <Drawer
            title="Create a New Investor"
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
                    name="status"
                    label="Status"
                    rules={[
                      { required: true, message: 'Please choose the status' },
                    ]}
                    className="mr-2"
                  >
                    <Select placeholder="Please choose the status">
                      <Option value="PENDING">PENDING</Option>
                      <Option value="ACTIVATED">ACTIVATED</Option>
                      <Option value="DECLINED">DECLINED</Option>
                    </Select>
                  </Form.Item>
                </Col>
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
                    className="ml-2"
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
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="role"
                    label="Role"
                    rules={[
                      { required: true, message: 'Please choose the Role' },
                    ]}
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
                          <Option
                            value={item.id}
                            label={item.name}
                            key={item.id}
                          >
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
          <div className="all-users" style={{ marginTop: 10 }}>
            {/* <AllUsers /> */}
          </div>
        </div>
      </Colxx>
    </>
  );
};

export default Investors;
