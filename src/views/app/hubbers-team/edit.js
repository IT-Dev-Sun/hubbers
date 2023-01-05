import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Drawer,
  Row,
  Col,
  Button,
  DatePicker,
  Input,
  Select,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserSelect from '../../../components/util-components/selector/UserSelect';
import * as Actions from '../../../redux/actions';

const { TextArea } = Input;
const { Option } = Select;

const MemberEdit = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        userId: filterData[0].userId,
        title: filterData[0].title,
        description: filterData[0].description,
        joinedDate: filterData[0].joinedDate
          ? moment(filterData[0].joinedDate)
          : '',
        terminatedDate: filterData[0].terminatedDate
          ? moment(filterData[0].terminatedDate)
          : '',
        published: filterData[0].published,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    let v = { ...values };
    if (values.terminatedDate) {
      v = { ...v, id, isTerminated: true };
    } else {
      v = { ...v, id, terminatedDate: null, isTerminated: false };
    }
    dispatch(Actions.updateHubbersTeam(v));
    onClose();
  };

  return (
    <>
      <Button
        type="primary"
        size="small"
        onClick={showDrawer}
        icon={<EditOutlined />}
      />
      <Drawer
        title="Edit a New Member"
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
          <Row>
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
                className="mr-2"
              >
                <UserSelect />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="published"
                label="Published"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Published',
                  },
                ]}
                className="ml-2"
              >
                <Select placeholder="Please choose the Published">
                  <Option value>Published</Option>
                  <Option value={false}>Not Published</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
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

export default MemberEdit;
