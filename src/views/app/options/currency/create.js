import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const CreateCurrency = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
    form.resetFields();
    form.setFieldsValue({ isCrypto: false });
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createCurrency(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Currency
      </Button>
      <Drawer
        title="Create a New Currency"
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
          className="p-4 mt-4"
        >
          <Row>
            <Col span={24} className="text-right">
              <label className="pt-1 pr-3">IsCrypto</label>
              <Form.Item name="isCrypto" className="d-inline-block mb-0">
                <Switch />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Currency Name"
                rules={[
                  { required: true, message: 'Please enter Currency Name' },
                ]}
              >
                <Input placeholder="Please enter Currency Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="namePlural"
                label="Currency Name Plural"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Currency Name Plural',
                  },
                ]}
              >
                <Input placeholder="Please enter Currency Name Plural" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="symbol"
                label="Currency Symbol"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Currency Symbol',
                  },
                ]}
              >
                <Input placeholder="Please enter Currency Symbol" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="symbolNative"
                label="Currency Symbol Native"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Symbol Native',
                  },
                ]}
              >
                <Input placeholder="Please enter Symbol Native" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="code"
                label="Currency Code"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Currency Code',
                  },
                ]}
              >
                <Input placeholder="Please enter Currency Code" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="decimalDigits"
                label="Decimal Digits"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Decimal Digits',
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Please enter Decimal Digits"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="rounding"
                label="Rounding"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Currency Rounding',
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Please enter Currency Rounding"
                />
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

export default CreateCurrency;
