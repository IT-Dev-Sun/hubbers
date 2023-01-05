import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import {
  Drawer,
  Form,
  Button,
  Col,
  Input,
  Tooltip,
  // Select,
  Switch,
  Space,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ColorPicker from '../../../../components/util-components/ColorPicker';
import UploadImage from '../../../../components/UploadImage';
import * as Actions from '../../../../redux/actions';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import ContributorRoleSelect from '../../../../components/util-components/selector/ContributorRoleSelect';
import TopicTypeSelect from '../../../../components/util-components/selector/TopicTypeSelect';
// import CommunityMemberSelect from '../../../../components/util-components/selector/CommunityMemberSelect';

// const { Option } = Select;
const { TextArea } = Input;

const EditTopic = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [isGlobal, setIsGlobal] = useState(false);

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        ...filterData[0],
        // name: filterData[0].name,
        // topicType: filterData[0].topicType,
        // communityId: filterData[0].communityId,
        // contributorRole: filterData[0].contributorRole,
        // createdBy: filterData[0].createdBy,
        // description: filterData[0].description,
        // color: filterData[0].color,
        // backgroundImageUrl: filterData[0].backgroundImageUrl,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    /* eslint-disable */
    values.id = id;
    /* eslint-enable */
    dispatch(Actions.updateTopic(values));
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
          title="View/Edit Topic"
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
                  rules={[
                    { required: true, message: 'Please enter Topic Name' },
                  ]}
                >
                  <Input placeholder="Please enter Topic Name" />
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
                      ? [
                          {
                            required: true,
                            message: 'Please choose a Community',
                          },
                        ]
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
                      message: 'Please choose the Member',
                    },
                  ]}
                  className="ml-2"
                >
                  {/* <CommunityMemberSelect /> */}
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
    </>
  );
};

export default EditTopic;
