import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';

const EditProjectTags = ({ id, data, type }) => {

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    const filterData = data.filter((item) => item.id === id);
    if (filterData.length > 0) {
      form.setFieldsValue({
        name: filterData[0].name,
      });
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.updateProductTagById({ ...values, id }));
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
        title="Edit ExpertiseCategory"
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
          className="px-4 py-5"
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Tag Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Tag Name',
                  },
                ]}
              >
                <Input placeholder="Please enter Tag Name"/>
              </Form.Item>
            </Col>
          </Row>
         
          <Row>
            <Col
              span={24}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div className="pb-2">
                <Button onClick={onClose} style={{ marginRight: 12 }}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default EditProjectTags;
