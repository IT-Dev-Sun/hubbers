import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AvatarUpload from '../../../../components/util-components/Upload/AvatarUpload';
import * as Actions from '../../../../redux/actions';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import CountrySelect from '../../../../components/util-components/selector/CountrySelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';

const CreateCommunity = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [uploadedImg, setImage] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(Actions.getAllUsers());
  }, [dispatch]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChangeAvatar = (imageUrl) => {
    setImage(imageUrl);
  };

  const onSubmit = (values) => {
    /* eslint-disable */
    values.featuredImage = uploadedImg;
    /* eslint-enable */
    dispatch(Actions.createCommunity(values));
    form.resetFields();
    setImage(null);
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Community
      </Button>
      <Drawer
        title="Create a New Community"
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
                name="name"
                label="Community Name"
                rules={[
                  { required: true, message: 'Please enter Community Name' },
                ]}
                className="mr-2"
              >
                <Input
                  placeholder="Please enter Community Name"
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
                label="Slug"
                rules={[{ required: true, message: 'Please enter Slug' }]}
                className="ml-2"
              >
                <Input placeholder="Please enter Slug" disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="countryId"
                label="Country"
                rules={[{ required: true, message: 'Please select Country' }]}
                className="mr-2"
              >
                <CountrySelect />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="state" label="State" className="ml-2">
                <Input placeholder="Please enter State" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: 'Please enter City' }]}
                className="mr-2"
              >
                <Input placeholder="Please enter City" />
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
                <UserSelect />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Card title="Featured Image">
              <AvatarUpload statusChange={onChangeAvatar} />
            </Card>
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

export default CreateCommunity;
