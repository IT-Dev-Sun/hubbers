import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Row, Drawer, Form, Button, Col, Select, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CKEditor5 from '../../../../components/util-components/CkEditor';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import CommunityTopicSelect from '../../../../components/util-components/selector/CommunityTopicSelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
// import CommunityMemberSelect from '../../../../components/util-components/selector/CommunityMemberSelect';

const { Option } = Select;

const Create = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  // const [content, setContent] = useState(null);
  const [form] = Form.useForm();
  const [editValue, setEditValue] = useState(null);
  const [cate, setCate] = useState(null);

  useEffect(() => {
    const v = data.filter((d) => d.id === id)[0];
    setEditValue({ ...v });
  }, [data, id, form]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    form.resetFields();
  };

  const onSubmit = (values) => {
    dispatch(Actions.updatePost({ ...values, id }));
    onClose();
  };

  return (
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
        title="Update a New Community Post / Article"
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
          initialValues={{ ...editValue }}
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
                  placeholder="Topic"
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
                  disabled
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
                  placeholder="Creator"
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
