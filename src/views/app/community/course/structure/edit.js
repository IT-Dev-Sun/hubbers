import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../../redux/actions';
import courseStructureType from '../../../../../constants/courseStructureType';

const { Option } = Select;

const GroupEdit = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        ...filterData[0],
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateCourseStructure({ ...values, id }));
    onClose();
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<EditOutlined />}
        size="small"
      />
      <Drawer
        title="Update a Group"
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
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter Name' }]}
                className="mr-2"
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="singularName"
                label="Singular Name"
                rules={[
                  { required: true, message: 'Please enter Singular Name' },
                ]}
                className="mr-2"
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="iaName"
                label="Indefinite Article Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Indefinite Article Name',
                  },
                ]}
                className="mr-2"
              >
                <Input placeholder="a Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="pluralName"
                label="Plural Name"
                rules={[
                  { required: true, message: 'Please enter Plural Name' },
                ]}
                className="mr-2"
              >
                <Input placeholder="Names" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="ppName"
                label="Possessive Plural Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Possessive Plural Name',
                  },
                ]}
                className="mr-2"
              >
                <Input placeholder="Your Names" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Structure Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Type',
                  },
                ]}
                className="ml-2"
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Please choose the Type"
                >
                  {courseStructureType &&
                    courseStructureType.map((item) => {
                      return (
                        <Option key={item.key} value={item.key}>
                          {item.name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text-right">
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default GroupEdit;
