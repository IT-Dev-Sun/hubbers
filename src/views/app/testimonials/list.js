import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Avatar, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../helpers/utils/index';
import * as Actions from '../../../redux/actions';
import CreateTestimonial from './create';
import EditTestimonial from './edit';

const TestimonialsList = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState([]);
  const { list } = useSelector((state) => state.testimonials);

  useEffect(() => {
    dispatch(Actions.getAllTestimonials());
  }, [dispatch]);

  useEffect(() => {
    setTableList(list);
  }, [list]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteTestimonial(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      /* eslint-disable */
      render: (_, record) => (
        <Avatar size={30} src={record.imageUrl} />
      ),
      /* eslint-enable */
    },
    {
      title: ' Name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditTestimonial id={elm.id} data={tableList} />
          <Popconfirm
            title="Do you remove this testimonial?"
            onConfirm={() => handleDelete(elm.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
      /* eslint-enable */
    },
  ];
  return (
    <Card>
      <div className="w-100 text-right mb-3">
        <CreateTestimonial />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default TestimonialsList;
