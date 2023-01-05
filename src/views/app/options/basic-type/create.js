import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import UploadImage from '../../../../components/UploadImage';

const { Option } = Select;
const { TextArea } = Input;

const CreateBasicType = ({
  categoryList,
  includeImage,
  currentCategoryId,
  parentList,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [isImage, setIsImage] = useState(false);
  useEffect(() => {
    setIsImage(includeImage);
  }, [includeImage]);
  const showDrawer = () => {
    form.setFieldsValue({
      categoryId: currentCategoryId,
    });
    setVisible(true);
  };
  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };
  const onChange = (value) => {
    const selectItem = categoryList.filter((item) => item.id === value)[0];
    setIsImage(selectItem.includeImage);
    dispatch(Actions.getParentBasicType(selectItem.parentCategoryId));
  };
  const onSubmit = (values) => {
    dispatch(Actions.createBasicType(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New BasicType
      </Button>
      <Drawer
        title="Create a New Basic Type"
        width={400}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="p-4 pt-5 mt-5"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="BasicType Name"
                rules={[
                  { required: true, message: 'Please enter BasicType Name' },
                ]}
              >
                <Input placeholder="Please enter BasicType Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="categoryId"
                label="BasicType Category"
                rules={[
                  {
                    required: true,
                    message: 'Please choose BasicType Category',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Type Category"
                  onChange={onChange}
                >
                  {categoryList?.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.displayName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {parentList?.length !== 0 && (
            <Row>
              <Col span={24}>
                <Form.Item name="parentId" label="Parent Type">
                  <Select
                    style={{ width: '100%' }}
                    placeholder="Parent Type"
                    allowClear
                  >
                    {parentList?.map((item) => {
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
          )}
          {isImage === true && (
            <>
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter description',
                      },
                    ]}
                  >
                    <TextArea type="text" placeholder="description" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: 'Please upload image',
                      },
                    ]}
                  >
                    <UploadImage />
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}
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

export default CreateBasicType;
