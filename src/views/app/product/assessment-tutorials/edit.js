import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import {
  Drawer,
  Form,
  Button,
  Col,
  Input,
  Select,
  Tooltip,
  Switch,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import UploadImage from '../../../../components/UploadImage';

const { Option } = Select;

const EditQuestion = ({ id, data: list, assessmentQuestions }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const showDrawer = () => {
    if (list) {
      const data = list.filter((i) => i.id === id)[0];
      setIsVideo(data.isVideo);
      form.setFieldsValue({
        ...data,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    form.resetFields();
    setIsVideo(false);
    setVisible(false);
  };
  const onSubmit = (values) => {
    dispatch(Actions.updateTutorial({ ...values, id }));
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
          className="p-4 pt-4 mt-5"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Title',
                  },
                ]}
              >
                <Input placeholder="Please enter Title" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="questionId"
                label="Assessment Question"
                rules={[
                  {
                    required: true,
                    message: 'Please choose Assessment Question',
                  },
                ]}
              >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Assessment Question"
                  disabled
                >
                  {assessmentQuestions?.map((item) => {
                    return (
                      <Option
                        key={item.id}
                        value={item.id}
                        disabled={item.tutorial !== null}
                      >
                        {item.question}
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
                name="text"
                label="Content"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Assessment Question',
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Please enter Tutorial content"
                  style={{ height: '150px' }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="linkUrl"
                label="Link URL"
                rules={[
                  {
                    required: true,
                    message: 'Please enter link URL',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="isVideo"
                label="Image / Video"
                valuePropName="checked"
              >
                <Switch onChange={setIsVideo} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                name="assetUrl"
                label="Image / Video URL"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Image / Video URL',
                  },
                ]}
              >
                {isVideo === true ? (
                  <Input placeholder="https://www.youtube.com/watch?v=ZLF...." />
                ) : (
                  <UploadImage />
                )}
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

export default EditQuestion;
