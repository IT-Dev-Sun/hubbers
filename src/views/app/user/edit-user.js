import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import {
  Input,
  Row,
  Col,
  Card,
  Form,
  Button,
  Select,
  DatePicker,
  Space,
} from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../../redux/actions';
import AvatarUpload from '../../../components/util-components/Upload/AvatarUpload';
import CountrySelect from '../../../components/util-components/selector/CountrySelect';

const { Option } = Select;
const EditUser = () => {
  const history = useHistory();
  const params = useParams();
  const [form] = Form.useForm();
  const [userDetail, setUserDetail] = useState(null);
  const { singleUser } = useSelector((state) => state.users);
  const { userRoleData } = useSelector((state) => state.userRole);
  const dispatch = useDispatch();

  const [passwordUp, setPasswordUp] = useState(false);
  const handlePassword = (e) => {
    if (e.target.value) {
      setPasswordUp(true);
    } else {
      setPasswordUp(false);
    }
  };

  useEffect(() => {
    dispatch(Actions.getSingleUser(params.id));
    dispatch(Actions.getAllUserRoles());
  }, [dispatch, params.id]);
  useEffect(() => {
    if (singleUser) {
      setUserDetail(singleUser);
      form.setFieldsValue({
        avatar: singleUser.avatar,
        firstname: singleUser.firstname,
        lastname: singleUser.lastname,
        email: singleUser.email,
        published: singleUser.published,
        preferedRoleId: singleUser.preferedRole?.id,
        roleIds: singleUser.roles.map((role) => role.id),
        phoneNumberCountryCode: singleUser.detail?.phoneNumberCountryCode,
        phoneNumber: singleUser.detail?.phoneNumber,
        phoneVerified: singleUser.detail?.phoneVerified,
        emailVerified: singleUser.detail?.emailVerified,
        gender: singleUser.detail?.gender,
        birthday:
          singleUser.detail?.birthday === null
            ? ''
            : moment(singleUser.detail?.birthday),
        bio: singleUser.detail?.bio,
        headLine: singleUser.detail?.headLine,
        industry: singleUser.detail?.industry,
        workingContactTime: singleUser.detail?.workingContactTime,
        contactTime: singleUser.detail?.contactTime,
        doingWork: singleUser.detail?.doingWork,
        address: singleUser.detail?.address,
        nationality: singleUser.detail?.nationality,
        joinedDate: moment(singleUser.detail?.joinedDate),
        location: {
          country: singleUser.detail?.location?.country,
          state: singleUser.detail?.location?.state,
          city: singleUser.detail?.location?.city,
        },
        education: singleUser.detail?.education,
      });
    }
  }, [form, singleUser]);
  const onUpdateItem = (values) => {
    dispatch(
      Actions.updateUser(params.id, { ...values, avatar: userDetail.avatar })
    );
    history.push('/app/users');
  };
  const onClose = () => {
    history.push('/app/users');
  };
  const onChangeAvatar = (imageUrl) => {
    setUserDetail({ ...userDetail, avatar: imageUrl });
  };
  return (
    <Row gutter={16} className="pb-5">
      <Col xs={24} sm={24} md={24}>
        {userDetail && (
          <Form
            form={form}
            layout="vertical"
            name="permission-form"
            onFinish={onUpdateItem}
          >
            <Card
              title={
                <>
                  <span>User Information</span>
                  <Space style={{ float: 'right' }}>
                    <Button onClick={onClose}>Back</Button>
                    <Button type="primary" htmlType="submit">
                      Update
                    </Button>
                  </Space>
                </>
              }
            >
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item name="avatar">
                    <AvatarUpload
                      statusChange={onChangeAvatar}
                      image={userDetail.avatar}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={2} />
                <Col xs={24} sm={12} md={16}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="firstname"
                        label="First Name"
                        rules={[
                          {
                            required: true,
                            message: 'Please Enter First Name',
                          },
                        ]}
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
                        rules={[
                          { required: true, message: 'Please enter email' },
                        ]}
                      >
                        <Input placeholder="Please enter email" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="published"
                        label="Published"
                        rules={[
                          {
                            required: true,
                            message: 'Please choose the status',
                          },
                        ]}
                      >
                        <Select placeholder="Please choose the status">
                          <Option value>Published</Option>
                          <Option value={false}>Not Published</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="preferedRoleId"
                        label="preferedRole"
                        rules={[
                          {
                            required: true,
                            message: 'Please choose the preferedRole',
                          },
                        ]}
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
                        name="roleIds"
                        label="Role"
                        rules={[
                          { required: true, message: 'Please choose the Role' },
                        ]}
                      >
                        <Select
                          mode="multiple"
                          style={{ width: '100%' }}
                          placeholder="Enter Role"
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
                              if (
                                !value ||
                                getFieldValue('password') === value
                              ) {
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
                </Col>
              </Row>
            </Card>
            <Card title="Detail Information" className="mt-2">
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item
                    name="phoneNumberCountryCode"
                    label="Phone number country code"
                  >
                    <Input placeholder="Please enter Phone number country code." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="phoneNumber" label="Phone number">
                    <Input placeholder="Please enter Phone number" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="phoneVerified" label="Phone verified">
                    <Select placeholder="Please choose verified status">
                      <Option value>Verified</Option>
                      <Option value={false}>Not verified</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="emailVerified" label="Email verified">
                    <Select placeholder="Please choose verified status">
                      <Option value>Verified</Option>
                      <Option value={false}>Not verified</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item name="gender" label="Gender">
                    <Select placeholder="Please choose gender">
                      <Option value="man">Man</Option>
                      <Option value="woman">Woman</Option>
                      <Option value="both">Both</Option>
                      <Option value="guess">Guess</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="birthday"
                    label="Birthday"
                    rules={[
                      { required: true, message: 'Please choose birthday' },
                    ]}
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="bio" label="Bio">
                    <Input placeholder="Please enter bio." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="headLine" label="headLine">
                    <Input placeholder="Please enter headLine." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="industry" label="industry">
                    <Input placeholder="Please enter industry." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="workingContactTime"
                    label="workingContactTime"
                  >
                    <Input placeholder="Please enter workingContactTime." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="contactTime" label="contactTime">
                    <Input placeholder="Please enter contactTime." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="doingWork" label="doingWork">
                    <Input
                      type="number"
                      placeholder="Please enter doingWork."
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="address" label="address">
                    <Input placeholder="Please enter address." />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="nationality"
                    label="nationality"
                    rules={[
                      { required: true, message: 'Please choose nationality' },
                    ]}
                  >
                    <CountrySelect idValue={false} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="joinedDate"
                    label="joinedDate"
                    rules={[
                      { required: true, message: 'Please choose joinedDate' },
                    ]}
                  >
                    <DatePicker
                      style={{ width: '100%' }}
                      placeholder="Please enter joinedDate."
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Location" className="mt-2">
              <Row>
                <Col className="px-2" sm={8} xs={24}>
                  <Form.Item
                    name={['location', 'country']}
                    label="Country"
                    rules={[
                      { required: true, message: 'Please choose country' },
                    ]}
                  >
                    <CountrySelect idValue={false} />
                  </Form.Item>
                </Col>
                <Col className="px-2" sm={8} xs={24}>
                  <Form.Item name={['location', 'state']} label="State">
                    <Input type="text" placeholder="Please enter state" />
                  </Form.Item>
                </Col>
                <Col className="px-2" sm={8} xs={24}>
                  <Form.Item
                    name={['location', 'city']}
                    label="City"
                    rules={[{ required: true, message: 'Please enter city' }]}
                  >
                    <Input type="text" placeholder="Please enter city" />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </div>
            </Card>
            <Card title="Education" className="mt-2">
              <Form.List name="education">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: 'flex', marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'country']}
                          fieldKey={[fieldKey, 'country']}
                          rules={[
                            { required: true, message: 'Missing Country' },
                          ]}
                        >
                          <Input placeholder="Country" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'university']}
                          fieldKey={[fieldKey, 'university']}
                          rules={[
                            { required: true, message: 'Missing University' },
                          ]}
                        >
                          <Input placeholder="College/university Name" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'title']}
                          fieldKey={[fieldKey, 'title']}
                          rules={[{ required: true, message: 'Missing title' }]}
                        >
                          <Input placeholder="title" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'degree']}
                          fieldKey={[fieldKey, 'degree']}
                          rules={[
                            { required: true, message: 'Missing degree' },
                          ]}
                        >
                          <Input placeholder="degree" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'year']}
                          fieldKey={[fieldKey, 'year']}
                          rules={[{ required: true, message: 'Missing year' }]}
                        >
                          <Input placeholder="year" type="number" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Card>
          </Form>
        )}
        {/* <Card title="Roles" className="mt-2">
          <Row>
            <Col className="px-2" sm={8} xs={24}>
              <Form.Item
                name={['roles', 'communityRole']}
                label="Country"
                rules={[{ required: true, message: 'Please choose country' }]}
              >
                <CountrySelect idValue={false} />
              </Form.Item>
            </Col>
            <Col className="px-2" sm={8} xs={24}>
              <Form.Item name={['roles', 'state']} label="State">
                <Input type="text" placeholder="Please enter state" />
              </Form.Item>
            </Col>
            <Col className="px-2" sm={8} xs={24}>
              <Form.Item
                name={['roles', 'city']}
                label="City"
                rules={[{ required: true, message: 'Please enter city' }]}
              >
                <Input type="text" placeholder="Please enter city" />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Card> */}
        {/* <Card
          title="Transactions"
          className="mt-2"
          extra={<Button type="primary">Add New</Button>}
        /> */}
      </Col>
    </Row>
  );
};

export default EditUser;
