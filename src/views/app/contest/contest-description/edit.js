import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button, Input, Select, Tooltip } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CKEditor5 from '../../../../components/util-components/CkEditor';

const { Option } = Select;

const EditDescription = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editValue, setEditValue] = useState();
  const categories = ['description', 'official', 'market'];

  useEffect(() => {
    const v = data.filter((d) => d.id === id)[0];
    setEditValue({ ...v });
  }, [data, id, form]);
  const showDrawer = () => {
    form.setFieldsValue({ ...editValue });
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateDescription({ ...values, id }));
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
        title="Edit a Description"
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
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter title' }]}
          >
            <Input placeholder="Please enter title" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please enter description',
              },
            ]}
          >
            <CKEditor5 />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: 'Please enter category',
              },
            ]}
          >
            <Select>
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div className="pb-2">
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

export default EditDescription;
