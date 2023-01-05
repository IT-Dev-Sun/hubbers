import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Drawer,
  Form,
  Button,
  Tooltip,
  Col,
  Input,
  Card,
  Row,
  Switch,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import AvatarUpload from '../../../../components/util-components/Upload/AvatarUpload';
import * as Actions from '../../../../redux/actions';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import CountrySelect from '../../../../components/util-components/selector/CountrySelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';

const EditCommunity = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [uploadedImg, setImage] = useState('');
  const [editData, setEditData] = useState({
    name: '',
    slug: '',
    country: '',
    state: '',
    city: '',
    createdBy: '',
  });
  useEffect(() => {
    dispatch(Actions.getAllUsers());
  }, [dispatch]);

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      setImage(filterData[0].featuredImage);
      form.setFieldsValue({
        ...filterData[0],
      });
      setEditData({
        ...filterData[0],
      });
    }
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
    values.id = id;
    values.featuredImage = uploadedImg;
    /* eslint-enable */
    dispatch(Actions.updateCommunity(values));
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
          title="View/Edit Community"
          width={500}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 10 }}
        >
          <Form
            layout="vertical"
            form={form}
            hideRequiredMark
            onFinish={onSubmit}
            className="p-4 mt-4"
            initialValues={{
              name: editData.name,
              slug: editData.slug,
              country: editData.country,
              state: editData.state,
              city: editData.city,
              createdBy: editData.createdBy,
            }}
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
                  {/* <Select placeholder="Country">
                    {countryList &&
                      countryList.map((item) => {
                        return (
                          <Option value={item.id} key={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                  </Select> */}
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
                <AvatarUpload
                  image={uploadedImg}
                  statusChange={onChangeAvatar}
                />
              </Card>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  name="published"
                  valuePropName="checked"
                  label="Published"
                >
                  <Switch />
                </Form.Item>
              </Col>
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
    </>
  );
};

export default EditCommunity;
