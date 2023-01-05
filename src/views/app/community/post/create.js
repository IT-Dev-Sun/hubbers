import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Drawer, Form, Button, Col, Select, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CKEditor5 from '../../../../components/util-components/CkEditor';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import CommunityTopicSelect from '../../../../components/util-components/selector/CommunityTopicSelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';

const { Option } = Select;

const Create = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [cate, setCate] = useState(null);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createPost({ ...values }));
    form.resetFields();
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Post / Article
      </Button>
      <Drawer
        title="Create a New Community Post / Article"
        width={1024}
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
            <Col span={11}>
              <Form.Item
                name="communityId"
                label="Community"
                rules={[{ required: true, message: 'Please select!' }]}
              >
                <CommunitySelect placeholder="Community" />
              </Form.Item>
            </Col>
            <Col span={2} />
            <Col span={11}>
              <Form.Item name="topicId" label="Topic">
                <CommunityTopicSelect
                  communityId={form.getFieldValue('communityId')}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item
                name="category"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Type',
                  },
                ]}
              >
                <Select
                  placeholder="Please choose the Type"
                  onChange={(e) => setCate(e)}
                >
                  <Option value="post">Post</Option>
                  <Option value="article">Article</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={2} />
            <Col span={11}>
              <Form.Item
                name="createdBy"
                label="Creator"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the creator',
                  },
                ]}
              >
                {/* <CommunityMemberSelect
                  communityId={form.getFieldValue('communityId')}
                /> */}
                <UserSelect />
              </Form.Item>
            </Col>
          </Row>
          {cate === 'article' && (
            <div>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter Title',
                  },
                ]}
              >
                <Input type="text" placeholder="Title" />
              </Form.Item>
            </div>
          )}
          <div>
            <Form.Item
              name="content"
              rules={[
                {
                  required: true,
                  message: 'Please Enter Content',
                },
              ]}
            >
              <CKEditor5 />
            </Form.Item>
          </div>
          <div
            style={{
              textAlign: 'right',
              marginTop: '1rem',
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
