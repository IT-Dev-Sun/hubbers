import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import {
  Drawer,
  Form,
  Button,
  Col,
  Input,
  InputNumber,
  Select,
  Tooltip,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const { Option } = Select;

const EditTimezone = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({ ...filterData[0] });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateTimezone({ ...values, id }));
    onClose();
  };

  return (
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
        title="Edit a timezone"
        width={500}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onSubmit}
          className="p-4 mt-4 pt-5"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="value"
                label="Timezone Value"
                rules={[{ required: true, message: 'Please enter value' }]}
              >
                <Input placeholder="Please enter value" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="abbr"
                label="Timezone Abbr"
                rules={[
                  {
                    required: true,
                    message: 'Please enter abbr',
                  },
                ]}
              >
                <Input placeholder="Please enter abbr" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="offset"
                label="Offset"
                rules={[{ required: true, message: 'Please enter offset' }]}
              >
                <InputNumber
                  placeholder="Please enter offset"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="isdst"
                label="DST"
                rules={[{ required: true, message: 'Please choose a isDST' }]}
              >
                <Select
                  placeholder="Please choose the isDST"
                  style={{ width: '100%' }}
                >
                  <Option value>True</Option>
                  <Option value={false}>False</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="text"
                label="Timezone Text"
                rules={[
                  {
                    required: true,
                    message: 'Please enter text',
                  },
                ]}
              >
                <Input placeholder="Please enter text" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="utc"
                label="Timezone UTC"
                rules={[
                  {
                    required: true,
                    message: 'Please enter UTC',
                  },
                ]}
              >
                <Input placeholder="Please enter UTC" />
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

export default EditTimezone;
