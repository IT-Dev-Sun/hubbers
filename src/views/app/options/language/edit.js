import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const EditLanguage = ({ id, data }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        code: filterData[0].code,
        name: filterData[0].name,
        nativeName: filterData[0].nativeName,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateLanguage({ ...values, id }));
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
        title="Edit a EditLanguage"
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
              <Form.Item
                name="code"
                label="Language Code"
                rules={[
                  { required: true, message: 'Please enter Language Code' },
                ]}
              >
                <Input placeholder="Please enter Language Code" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Language Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Language Name',
                  },
                ]}
              >
                <Input placeholder="Please enter Language Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="nativeName"
                label="Native Name"
                rules={[
                  { required: true, message: 'Please choose a Native Name' },
                ]}
              >
                <Input placeholder="Please choose the Native Name" />
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

export default EditLanguage;
