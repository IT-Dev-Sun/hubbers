import React, { useEffect, useState } from 'react';
import { Drawer, Button, Form, Input, Divider, Switch } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'antd/lib/form/Form';
import * as Actions from '../../../../../redux/actions';
import PageLoading from '../../../../../components/util-components/PageLoading';
import CKEditor5 from '../../../../../components/util-components/CkEditor';
import UploadImage from '../../../../../components/UploadImage';

const EditUnit = ({ id, t, courseId, ...props }) => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState(null);
  const { unitDetail } = useSelector((state) => state.courseMain);
  const toggleDrawer = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    if (visible && t && id) {
      dispatch(Actions.getUnitDetail({ t, id }));
    }
  }, [t, id, visible, dispatch]);

  useEffect(() => {
    if (unitDetail) {
      setDetail(unitDetail);
      if (form) {
        form.setFieldsValue({
          ...unitDetail,
          ...unitDetail.setting,
          description: unitDetail.description ?? '',
        });
      }
    }
  }, [unitDetail, form]);

  const onFinish = (v) => {
    dispatch(Actions.updateUnit({ id, t, courseId, data: v }));
    toggleDrawer();
  };

  return (
    <>
      <Button
        type="text"
        onClick={(e) => {
          e.stopPropagation();
          toggleDrawer();
        }}
        icon={<EditOutlined />}
        size="small"
        {...props}
      />
      <Drawer
        title="Detail"
        width={542}
        onClose={toggleDrawer}
        visible={visible}
        bodyStyle={{ paddingBottom: 10, paddingTop: 70 }}
        onClick={(e) => e.stopPropagation()}
      >
        {!detail ? (
          <PageLoading />
        ) : (
          <>
            <Form form={form} name="unit-form" onFinish={onFinish}>
              <b>Name</b>
              <Form.Item name="name">
                <Input />
              </Form.Item>
              <b>Content</b>
              <Form.Item name="description">
                <CKEditor5 />
              </Form.Item>
              <Divider plain>Setting</Divider>
              <b>Visibility</b>
              <Form.Item name="visibility" valuePropName="checked">
                <Switch checkedChildren="Visible" unCheckedChildren="Hidden" />
              </Form.Item>
              <b>Thumbnail Image</b>
              <Form.Item name="featuredImage">
                <UploadImage />
              </Form.Item>
              <b>Preview</b>
              <Form.Item name="allowPreview" valuePropName="checked">
                <Switch checkedChildren="On" unCheckedChildren="Off" />
              </Form.Item>
              <div className="text-right">
                <Button htmlType="submit" type="primary">
                  Update
                </Button>
              </div>
            </Form>
          </>
        )}
      </Drawer>
    </>
  );
};

export default EditUnit;
