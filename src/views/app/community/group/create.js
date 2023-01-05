import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Switch, Space, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import * as Actions from '../../../../redux/actions';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import UploadImage from '../../../../components/UploadImage';

const { TextArea } = Input;
const { Option } = Select;

const GroupCreate = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [published, setPublished] = useState(true);
  const [isGlobal, setIsGlobal] = useState(false);
  const [privacyOption, setPrivacyOption] = useState(null);
  const { groupPrivacyOptionList } = useSelector(
    (state) => state.groupPrivacyOption
  );

  useEffect(() => {
    dispatch(Actions.getAllPublicGroupPrivacyOption());
  }, [dispatch]);

  useEffect(() => {
    setPrivacyOption(groupPrivacyOptionList);
  }, [groupPrivacyOptionList]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createGroup({ ...values, published, isGlobal }));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Group
      </Button>
      <Drawer
        title="Create a New Group"
        width={542}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="p-4 pt-5"
        >
          <Row>
            <Col span={24} className="text-right">
              <Space>
                <Form.Item label="Published" name="published" className="mb-0">
                  <Switch checked={published} onChange={setPublished} />
                </Form.Item>
                <Form.Item label="Global" name="isGlobal" className="mb-0">
                  <Switch checked={isGlobal} onChange={setIsGlobal} />
                </Form.Item>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Group Title"
                rules={[
                  { required: true, message: 'Please enter Group Title' },
                ]}
                className="mr-2"
              >
                <Input
                  placeholder="Please enter Group Title"
                  onChange={(e) =>
                    form.setFieldsValue({
                      slug: `${slugify(e.target.value)}-${getRandomInt(
                        100000,
                        999999
                      )}`,
                    })
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="slug"
                label="Group Slug"
                rules={[{ required: true, message: 'Please enter Group Slug' }]}
                className="ml-2"
              >
                <Input disabled placeholder="Please enter Group Slug" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="communityId"
                label="Community Name"
                rules={
                  !isGlobal
                    ? [{ required: true, message: 'Please choose a community' }]
                    : []
                }
                className="mr-2"
              >
                <CommunitySelect disabled={isGlobal} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="privacyOptionId"
                label="Privacy Option"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Option',
                  },
                ]}
                className="ml-2"
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the Option"
                >
                  {privacyOption &&
                    privacyOption.map((item) => {
                      return (
                        <Option key={item.id} value={item.id}>
                          {item.name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="createdBy"
                label="Created By"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the User',
                  },
                ]}
              >
                <UserSelect />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="tagLine" label="Tag Line">
                <TextArea rows={3} placeholder="Please enter Tag Line" />
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Form.Item
              name="featuredImageUrl"
              label="Image"
              className="mb-0"
              // rules={[{ required: true, message: 'Please upload the image' }]}
            >
              <UploadImage />
            </Form.Item>
            <div className="pb-2">
              <Button onClick={onClose} style={{ marginRight: 12 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default GroupCreate;
