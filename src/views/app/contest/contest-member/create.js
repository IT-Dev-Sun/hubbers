import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Form, Button, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { Option } = Select;

const CreateContestMember = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);
  const [contest, setContest] = useState(null);
  const role = ['contestant', 'judge'];
  const { users } = useSelector((state) => state.users);
  const { contestList } = useSelector((state) => state.contestList);
  useEffect(() => {
    dispatch(Actions.getAllUsers());
    dispatch(Actions.getAllContestList());
  }, [dispatch]);

  useEffect(() => {
    setUser(users);
    setContest(contestList);
  }, [users, contestList]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createContestMember(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Contest Member
      </Button>
      <Drawer
        title="Create a New Description"
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
            label="Choose the member you want to add:"
            rules={[{ required: true, message: 'Please enter member' }]}
          >
            <Select>
              {user &&
                user.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.firstname} {item.lastname}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="contestId"
            label="Choose the product completition you want to add a member in:"
            rules={[
              {
                required: true,
                message: 'Please enter contest',
              },
            ]}
          >
            <Select>
              {contest &&
                contest.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="role"
            label="Choose between a judge and contestant:"
            rules={[
              {
                required: true,
                message: 'Please enter role',
              },
            ]}
          >
            <Select>
              {role.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div className="pb-2">
            <Button onClick={onClose} style={{ marginRight: 12 }}>
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

export default CreateContestMember;
