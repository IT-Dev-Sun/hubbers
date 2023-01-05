import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Drawer, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import * as Actions from '../../../../redux/actions';

const { Option } = Select;

const TeamMemberCreate = ({ teamList }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [roleList, setRoleList] = useState([]);
  const { list } = useSelector((state) => state.teamMemberRole);
  const [searchTeamList, setSearchTeamList] = useState([]);
  useEffect(() => {
    dispatch(Actions.getAllTeamMemberRole());
  }, [dispatch]);
  useEffect(() => {
    setSearchTeamList([...teamList]);
  }, [teamList]);
  useEffect(() => {
    setRoleList(list);
  }, [list]);

  const showDrawer = () => {
    form.resetFields();
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createTeamMember(values));
    onClose();
  };

  const onSearchTeam = (v) => {
    const u = [...teamList];
    if (v) {
      setSearchTeamList([
        ...u.filter(
          (c) => c?.name?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setSearchTeamList(u);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Member
      </Button>
      <Drawer
        title="Create a New Member"
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
            name="userId"
            label="User"
            rules={[
              {
                required: true,
                message: 'Please choose the User',
              },
            ]}
          >
            <UserSelect />
          </Form.Item>
          <Form.Item
            name="teamId"
            label="Team"
            rules={[
              {
                required: true,
                message: 'Please choose the Title',
              },
            ]}
          >
            <Select
              filterOption={false}
              showSearch
              onSearch={onSearchTeam}
              placeholder="Please select the team."
            >
              {searchTeamList?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="roleId"
            label="Member Role"
            rules={[
              {
                required: true,
                message: 'Please choose the Role',
              },
            ]}
          >
            <Select placeholder="Please select the role">
              {roleList?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="joinedDate"
            label="Join Date"
            rules={[
              {
                required: true,
                message: 'Please choose the Join Date',
              },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <div
            style={{
              paddingTop: '24px',
              textAlign: 'right',
              width: '100%',
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

export default TeamMemberCreate;
