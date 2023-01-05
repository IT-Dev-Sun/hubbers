import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button, Input, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import UploadImage from '../../../../components/UploadImage';
import PartnerSelect from '../../../../components/util-components/selector/PartnerSelect';

const { TextArea } = Input;

const Create = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({
      logo: '',
      name: '',
      slug: '',
      shortDescription: '',
      description: '',
      published: true,
      partnerId: '',
      isCoBuilding: false,
      isBetaTesting: false,
    });
  }, [form]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createModuleType(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New
      </Button>
      <Drawer
        title="Create a New"
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
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter Name' }]}
          >
            <Input
              placeholder="Please enter Name"
              onChange={(e) =>
                form.setFieldsValue({
                  slug: e.target.value
                    ? `${slugify(e.target.value)}-${getRandomInt(
                        100000,
                        999999
                      )}`
                    : '',
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="slug"
            label="Slug"
            rules={[{ required: true, message: 'Please enter slug' }]}
          >
            <Input disabled placeholder="Please enter slug" />
          </Form.Item>
          <Form.Item
            name="shortDescription"
            label="Short Description"
            rules={[
              { required: true, message: 'Please enter short Description' },
            ]}
          >
            <TextArea rows={3} placeholder="Please enter short Description" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter Description' }]}
          >
            <TextArea rows={3} placeholder="Please enter Description" />
          </Form.Item>
          <Form.Item
            name="logo"
            rules={[{ required: true, message: 'Please upload logo' }]}
          >
            <UploadImage />
          </Form.Item>
          <Form.Item
            name="partnerId"
            rules={[{ required: true, message: 'Please select partner' }]}
          >
            <PartnerSelect placeholder="Please select partner" />
          </Form.Item>
          <Form.Item
            name="published"
            valuePropName="checked"
            rules={[{ required: true, message: 'Please select!' }]}
            label="Published"
            colon={false}
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="isCoBuilding"
            valuePropName="checked"
            rules={[{ required: true, message: 'Please select!' }]}
            label="CoBuilding"
            colon={false}
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="isBetaTesting"
            valuePropName="checked"
            rules={[{ required: true, message: 'Please select!' }]}
            label="BetaTesting"
            colon={false}
          >
            <Switch />
          </Form.Item>
          <div className="text-right">
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

export default Create;
