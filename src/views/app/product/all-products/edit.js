import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, Drawer, Form, Button, Input, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import UploadImage from '../../../../components/UploadImage';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import CountrySelect from '../../../../components/util-components/selector/CountrySelect';
import LanguageSelect from '../../../../components/util-components/selector/LanguageSelect';

import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;
const { Option } = Select;

const EditProduct = ({
  id,
  productCategory,
  techCategory,
  innovationCategory,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);
  const { single } = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(Actions.getSingleProduct(id));
  }, [dispatch, id, visible]);

  useEffect(() => {
    setData(single);
  }, [single]);

  useEffect(() => {
    form.setFieldsValue({
      ...data,
      productCategory: data?.projectProductCategory?.map(
        (item) => item.productCategoryId
      ),
      innovationCategory: data?.projectInnovationCategory?.map(
        (item) => item.innovationCategoryId
      ),
      techCategory: data?.projectTechCategory?.map(
        (item) => item.techCategoryId
      ),
    });
  }, [data, form]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(
      Actions.updateProduct({
        ...values,
        slug: `${slugify(values.name)}-${getRandomInt(100000, 999999)}`,
        id,
      })
    );
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
        title="Edit a Product"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="px-4 mt-5"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter Name' }]}
          >
            <Input placeholder="Please enter Name" />
          </Form.Item>
          <Form.Item
            name="userId"
            label="Creator"
            rules={[{ required: true, message: 'Please select a creator' }]}
          >
            <UserSelect />
          </Form.Item>
          <Form.Item name="country" label="Country">
            <CountrySelect />
          </Form.Item>
          <Form.Item name="language" label="Language">
            <LanguageSelect />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <Input type="number" placeholder="Please enter price" />
          </Form.Item>
          <Form.Item
            name="market"
            label="Market"
            rules={[{ required: true, message: 'Please enter market' }]}
          >
            <TextArea rows={3} placeholder="Please enter market" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <TextArea rows={3} placeholder="Please enter description" />
          </Form.Item>
          <Form.Item name="productCategory" label="Product Category">
            <Select mode="multiple">
              {productCategory?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="innovationCategory" label="Innovation Category">
            <Select mode="multiple">
              {innovationCategory?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="techCategory" label="Tech Category">
            <Select mode="multiple">
              {techCategory?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
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

export default EditProduct;
