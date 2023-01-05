import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Switch, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const EditCurrency = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      if (filterData[0].isCrypto) {
        setIsCrypto(true);
      }
      form.setFieldsValue({ ...filterData[0] });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateCurrency({ ...values, id }));
    onClose();
  };

  const handleCrypto = () => {
    setIsCrypto(!isCrypto);
  }

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
        title="Edit a New Currency"
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
            <Col span={24}>
              <Form.Item name="isCrypto" label="IsCrypto">
                <Switch checked={isCrypto} onChange={handleCrypto} />
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

export default EditCurrency;
