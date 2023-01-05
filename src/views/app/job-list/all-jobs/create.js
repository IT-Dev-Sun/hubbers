import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, Form, Button, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import * as Actions from '../../../../redux/actions';
import CountrySelect from '../../../../components/util-components/selector/CountrySelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';
import CKEditor5 from '../../../../components/util-components/CkEditor';

const { Option } = Select;

const JobCreate = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [skillList, setSkillList] = useState(null);
  const { skills } = useSelector((state) => state.expertiseCategory);

  useEffect(() => {
    dispatch(Actions.getAllSkill());
  }, [dispatch]);

  useEffect(() => {
    setSkillList(skills);
  }, [skills]);
  const showDrawer = () => {
    form.resetFields();
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = (values) => {
    dispatch(Actions.createJob(values));
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Job
      </Button>
      <Drawer
        title="Create a New Job"
        width={520}
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
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter Title' }]}
          >
            <Input
              placeholder="Job Title"
              onChange={(e) =>
                form.setFieldsValue({
                  slug: `${slugify(e.target.value)}-${getRandomInt(
                    100000,
                    999999
                  )}`,
                })
              }
            />
          </Form.Item>
          <Form.Item
            name="slug"
            label="Slug"
            rules={[{ required: true, message: 'Slug required' }]}
          >
            <Input placeholder="Please enter Slug" disabled />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter Description' }]}
          >
            <CKEditor5 />
          </Form.Item>
          <Form.Item
            name="responsibilities"
            label="Responsibilities"
            rules={[
              { required: true, message: 'Please enter Responsibilities' },
            ]}
          >
            <CKEditor5 />
          </Form.Item>
          <Form.Item
            name="requirements"
            label="Requirements"
            rules={[{ required: true, message: 'Please enter Requirements' }]}
          >
            <CKEditor5 />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: 'Country required' }]}
          >
            <CountrySelect />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: 'City required' }]}
          >
            <Input placeholder="Please enter City" />
          </Form.Item>
          <Form.Item
            name="remote"
            label="Remote"
            rules={[{ required: true, message: 'Remote required' }]}
          >
            <Input placeholder="Please enter Remote" />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: 'Start Date required' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: 'End Date required' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="employmentType"
            label="Employment Type"
            rules={[{ required: true, message: 'Type required' }]}
          >
            <Select placeholder="Please choose the type">
              <Option value="full time">Full Time</Option>
              <Option value="part time">Part Time</Option>
              <Option value="contract">Contract</Option>
              <Option value="volunteer">Volunteer</Option>
              <Option value="internship">Internship</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="compensation"
            label="Compensation"
            rules={[{ required: true, message: 'Compensation required' }]}
          >
            <CKEditor5 />
          </Form.Item>
          <Form.Item
            name="publishedFrom"
            label="Published From"
            rules={[{ required: true, message: 'Published From required' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="publishedTo"
            label="Published To"
            rules={[{ required: true, message: 'Published To required' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[{ required: true, message: 'Company required' }]}
          >
            <Input placeholder="please enter Company Name" />
          </Form.Item>
          <Form.Item
            name="neededSkill"
            label="Needed Skills"
            rules={[{ required: true, message: 'Please select needed skills' }]}
          >
            <Select mode="multiple" placeholder="Please select skills">
              {skillList?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="skill"
            label="Skills you will learn"
            rules={[{ required: true, message: 'Please select skills' }]}
          >
            <Select mode="multiple" placeholder="Please select skills">
              {skillList?.map((item) => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="postedBy"
            label="Posted By"
            rules={[{ required: true, message: 'Poster required' }]}
          >
            <UserSelect />
          </Form.Item>
          <div className="w-100 text-right">
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

export default JobCreate;
