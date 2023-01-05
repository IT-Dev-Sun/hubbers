import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import GroupSelect from '../../../../components/util-components/selector/GroupSelect';
import CommunityMemberRoleSelect from '../../../../components/util-components/selector/CommunityMemberRoleSelect';

const Create = ({ role }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createMember(values));
    form.resetFields();
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Community Member
      </Button>
      <Drawer
        title="Create a New Community Member"
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
                <UserSelect />
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
  );
};

export default Create;
