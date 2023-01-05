import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button, Tooltip, Col, Select, Row, Switch } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import GroupSelect from '../../../../components/util-components/selector/GroupSelect';
import CommunityMemberRoleSelect from '../../../../components/util-components/selector/CommunityMemberRoleSelect';

const { Option } = Select;

const Edit = ({ id, data, role }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const editData = data.filter((d) => d.id === id)[0];
    setCurrentData({ ...editData });
  }, [data, id]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateMember({ ...values, id }));
    form.resetFields();
    onClose();
  };
  return (
    <>
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
          title="View/Edit Community"
          width={500}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 10 }}
        >
          <Form
            layout="vertical"
            hideRequiredMark
            form={form}
            initialValues={{ ...currentData }}
            onFinish={onSubmit}
            className="p-4 mt-4"
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  name="communityId"
                  label="Community"
                  rules={[{ required: true, message: 'Please select!' }]}
                  className="mr-2"
                >
                  {role === 1 ? <CommunitySelect /> : <GroupSelect />}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="userId"
                  label="User"
                  rules={[
                    {
                      required: true,
                      message: 'Please choose the User',
                    },
                  ]}
                  className="ml-2"
                >
                  <UserSelect disabled />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="roleId"
                  label="Role"
                  rules={[
                    {
                      required: true,
                      message: 'Please choose the role',
                    },
                  ]}
                  className="mr-2"
                >
                  <CommunityMemberRoleSelect />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="status" label="Status">
                  <Select>
                    <Option value="PENDING">PENDING</Option>
                    <Option value="ACTIVATED">ACTIVATED</Option>
                    <Option value="DECLINED">DECLINED</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="published"
                  valuePropName="checked"
                  label="Published"
                >
                  <Switch />
                </Form.Item>
              </Col>
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

export default Edit;
