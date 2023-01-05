import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Drawer, Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import ContestConfirm from './component/ContestConfirm';
import ContestDescription from './component/ContestDescription';

const CreateContestList = ({
  contestType,
  industryItems,
  innovationItems,
  techItems,
}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    setVisible(true);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenClose = () => {
    setChildrenDrawer(false);
  };
  const onClose = () => {
    form.resetFields();
    setVisible(false);
  };
  const onSubmit = (values) => {
    dispatch(Actions.createContestList(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Contest
      </Button>
      <Drawer
        title="Create a New Contest"
        width={1024}
        onClose={onClose}
        visible={visible}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSubmit}
          className="px-4 py-5"
        >
          <ContestConfirm
            form={form}
            contestType={contestType}
            industryItems={industryItems}
            innovationItems={innovationItems}
            techItems={techItems}
          />
          <ContestDescription
            childrenVisible={childrenDrawer}
            onChildrenShow={showChildrenDrawer}
            onChildrenClose={onChildrenClose}
            form={form}
          />
          <div className="pb-2">
            <Button onClick={onClose} style={{ marginRight: 12 }}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateContestList;
