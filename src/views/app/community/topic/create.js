import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import {
  Drawer,
  Form,
  Button,
  Col,
  Input,
  //  Select,
  Switch,
  Space,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ColorPicker from '../../../../components/util-components/ColorPicker';
import UploadImage from '../../../../components/UploadImage';
import * as Actions from '../../../../redux/actions';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import TopicTypeSelect from '../../../../components/util-components/selector/TopicTypeSelect';
import ContributorRoleSelect from '../../../../components/util-components/selector/ContributorRoleSelect';
import { getRandomInt } from '../../../../helpers/Utils';
// import CommunityMemberSelect from '../../../../components/util-components/selector/CommunityMemberSelect';

// const { Option } = Select;
const { TextArea } = Input;

const CreateTopic = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isGlobal, setIsGlobal] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createTopic(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Topic
      </Button>
      <Drawer
        title="Create a New Topic"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onSubmit}
          className="p-4"
        >
          <Row>
            <Col span={24} className="text-right">
              <Space>
                <Form.Item
                  name="published"
                  label="Published"
                  valuePropName="checked"
                  className="mb-0"
                >
                  <Switch defaultChecked />
                </Form.Item>
                <Form.Item
                  name="isGlobal"
                  label="Global"
                  valuePropName="checked"
                  className="mb-0"
                >
                  <Switch
                    onChange={(v) => {
                      setIsGlobal(v);
                      form.setFieldsValue({ communityId: null });
                    }}
                  />
                </Form.Item>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Topic Name"
                rules={[{ required: true, message: 'Please enter Topic Name' }]}
              >
                <Input
                  placeholder="Please enter Topic Name"
                  onChange={(e) =>
                    form.setFieldsValue({
                      slug: e.target.value
                        ? `${e.target.value}-${getRandomInt(100000, 999999)}`
                        : '',
                    })
                  }
                />
              </Form.Item>
              <Form.Item
                hidden
                name="slug"
                rules={[{ required: true, message: 'Please enter slug' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="topicTypeId"
                label="Topic Type"
                rules={[{ required: true, message: 'Please choose a Type' }]}
                className="mr-2"
              >
                {/* <Select placeholder="Please choose the Type">
                  <Option value="default">Default</Option>
                  <Option value="featured">Featured</Option>
                  <Option value="welcome">Welcome</Option>
                </Select> */}
                <TopicTypeSelect />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="communityId"
                label="Community Name"
                rules={
                  !isGlobal
                    ? [{ required: true, message: 'Please choose a Community' }]
                    : []
                }
                className="ml-2"
              >
                <CommunitySelect />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="contributorRoleId"
                label="Contributor Role"
                rules={[{ required: true, message: 'Please choose a Role' }]}
                className="mr-2"
              >
                {/* <Select placeholder="Please choose the Role">
                  <Option value="all_members">All Members</Option>
                  <Option value="host_moderators">Host Moderator</Option>
                </Select> */}
                <ContributorRoleSelect />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="createdBy"
                label="Created By"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the User',
                  },
                ]}
                className="ml-2"
              >
                {/* <CommunityMemberSelect
                  communityId={form.getFieldValue('communityId')}
                /> */}
                <UserSelect />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <TextArea rows={3} placeholder="Please enter Description" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="backgroundImageUrl"
                label="Background Image"
                className="mr-2 mb-0"
              >
                <UploadImage />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="color" label="Color" className="ml-2 mb-0">
                <ColorPicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text-right">
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateTopic;
