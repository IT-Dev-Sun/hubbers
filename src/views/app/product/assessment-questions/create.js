import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Select, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { Option } = Select;

const CreateQuestion = ({
  assessmentCategories,
  assessmentTags,
  currentCategoryId,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
    form.setFieldsValue({
      categoryId: currentCategoryId,
    });
  };
  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };
  const onSubmit = (values) => {
    dispatch(Actions.createQuestion(values));
    console.log(values);
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Question
      </Button>
      <Drawer
        title="Create a New Assessment Question"
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
          className="p-4 pt-4 mt-5"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="categoryId"
                label="Assessment Category"
                rules={[
                  {
                    required: true,
                    message: 'Please choose Assessment Category',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%', textTransform: 'capitalize' }}
                  placeholder="Assessment Category"
                >
                  {assessmentCategories?.map((item) => {
                    return (
                      <Option
                        key={item.id}
                        value={item.id}
                        style={{ textTransform: 'capitalize' }}
                      >
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="criteria"
                label="Validation Criteria"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Validation Criteria',
                  },
                ]}
              >
                <Input placeholder="Please enter Validation Criteria" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="question"
                label="Assessment Question"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Assessment Question',
                  },
                ]}
              >
                <Input placeholder="Please enter Assessment Question" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="tags"
                label="Assessment Tag"
                rules={[
                  {
                    required: true,
                    message: 'Please choose Assessment Tag',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Assessment Tag"
                  mode="multiple"
                >
                  {assessmentTags?.map((item) => {
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
          <Row>
            <Col span={24}>
              <Form.Item
                name="weight"
                label="Weight"
                rules={[{ required: true, message: 'Please enter Weight' }]}
              >
                <InputNumber
                  placeholder="Please enter value between 0 and 1"
                  min={0}
                  max={1}
                  step={0.01}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="type"
                label="Question Type"
                rules={[
                  { required: true, message: 'Please select a Question type!' },
                ]}
              >
                <Select style={{ width: '100%' }} placeholder="Question type!">
                  <Option value="YES_NO">Yes/No</Option>
                  <Option value="SELECT">Select</Option>
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

export default CreateQuestion;
