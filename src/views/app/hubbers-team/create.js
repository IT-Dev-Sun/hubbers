import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Drawer, Row, Col, Button, DatePicker, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserSelect from '../../../components/util-components/selector/UserSelect';
import * as Actions from '../../../redux/actions';

const { TextArea } = Input;

const MemberCreate = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    form.resetFields();
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    let v = { ...values };
    if (values.terminatedDate) {
      v = { ...v, isTerminated: true };
    } else {
      v = { ...v, isTerminated: false };
    }
    dispatch(Actions.createHubbersTeam(v));
    onClose();
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
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: 'Please enter the Title',
              },
            ]}
          >
            <Input placeholder="Please enter the Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea rows={3} placeholder="Please enter the Description" />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item
                name="joinedDate"
                label="Join Date"
                className="mr-2"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Join Date',
                  },
                ]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="terminatedDate"
                label="Terminate Date"
                className="ml-2"
                dependencies={['joinedDate']}
                rules={[
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || value > getFieldValue('joinedDate')) {
                        return Promise.resolve();
                      }
                      /* eslint-disable */
                      return Promise.reject('Date Error');
                      /* eslint-enable */
                    },
                  }),
                ]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
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

export default MemberCreate;
