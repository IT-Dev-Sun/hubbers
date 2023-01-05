import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button, Input, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UploadImage from '../../../components/UploadImage';
import * as Actions from '../../../redux/actions';

const { TextArea } = Input;

const EditTestimonial = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        ...filterData[0],
        productCategory: filterData[0].productCategory?.map(
          (item) => item.productCategoryId
        ),
        innovationCategory: filterData[0].innovationCategory?.map(
          (item) => item.innovationCategoryId
        ),
        techCategory: filterData[0].techCategory?.map(
          (item) => item.techCategoryId
        ),
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateTestimonial({ ...values, id }));
    onClose();
  };

  return (
    <>
      <Tooltip title="View / Edit">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={showDrawer}
          size="small"
        />
      </Tooltip>
      <Drawer
        title="Edit a New Testimonial"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="px-4 py-5 mt-5"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter Name' }]}
          >
            <Input placeholder="Please enter Name" />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: 'Please enter Role' }]}
          >
            <Input placeholder="Please enter Role" />
          </Form.Item>
          <Form.Item name="linkedinUrl" label="Linkedin Url">
            <Input placeholder="Please enter linkedin url" />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: 'Please enter Content' }]}
          >
            <TextArea rows={5} placeholder="Please enter Last Name" />
          </Form.Item>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Form.Item
              name="imageUrl"
              label="Image"
              className="mb-0"
              rules={[{ required: true, message: 'Please upload the image' }]}
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

export default EditTestimonial;
