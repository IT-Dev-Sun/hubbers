import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'reactstrap';
import { Drawer, Form, Button, Col, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { slugify } from '../../../../helpers/Utils';
import UploadImage from '../../../../components/UploadImage';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import * as Actions from '../../../../redux/actions';

const { TextArea } = Input;

const CreateExpertiseCategory = ({
  type,
  parentId,
  size,
  buttonContent,
  tooltip,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    form.resetFields();
  };

  const onSubmit = (values) => {
    dispatch(
      Actions.createExpertiseCategory({
        ...values,
        parentId,
        categoryType: type,
      })
    );
    onClose();
  };

  return (
    <>
      <Tooltip title={tooltip}>
        <Button type="primary" onClick={showDrawer} size={size}>
          <PlusOutlined />
          {buttonContent}
        </Button>
      </Tooltip>
      <Drawer
        title="Create a New ExpertiseCategory"
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
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Name',
                  },
                ]}
              >
                <Input
                  placeholder="Please enter Name"
                  onChange={(e) =>
                    form.setFieldsValue({
                      slug: slugify(`${e.target.value}-${type}`),
                    })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="slug"
                label="Slug"
                rules={[{ required: true, message: 'Please enter Slug' }]}
              >
                <Input placeholder="Please enter Slug" disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="createdBy"
                label="Created By"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the User',
                  },
                ]}
              >
                <UserSelect />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Description">
                <TextArea rows={3} placeholder="Please enter Description" />
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
              <Form.Item name="icon" label="Icon" className="mb-0">
                <UploadImage />
              </Form.Item>
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

export default CreateExpertiseCategory;
