import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../../redux/actions';
import courseStructureType from '../../../../../constants/courseStructureType';

const { Option } = Select;

const Create = ({ ...props }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  React.useEffect(() => {
    form.setFieldsValue({ category: props.currentCategory });
  }, [form, props]);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createCourseStructure({ ...values }));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Course Structure
      </Button>
      <Drawer
        title="Create a New Course Structure"
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
                  onChange={props.setCurrentCategory}
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
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Create;
