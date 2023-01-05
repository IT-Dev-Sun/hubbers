/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Image, Avatar, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateExpertise from './create';
import EditExpertise from './edit';

const ProductList = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState([]);
  const { expertiseList } = useSelector((state) => state.allExpertises);

  useEffect(() => {
    dispatch(Actions.getAllExpertises());
  }, [dispatch]);

  useEffect(() => {
    if (expertiseList && expertiseList.length) {
      setTableList(expertiseList);
    }
  }, [expertiseList]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteExpertise(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'title'),
    },
    {
      title: 'Image',
      dataIndex: 'featuredImageUrl',
      render: (_, record) => (
        <Image width={100} src={record.featuredImageUrl} />
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (_, record) => <span>{record.description}</span>,
    },
    {
      title: 'Created By',
      dataIndex: 'expertId',
      render: (_, record) => (
        <Space>
          <Avatar size={42} src={record.expert?.avatar} />
          <span style={{ whiteSpace: 'nowrap' }}>
            {record.expert?.firstname} {record.expert?.lastname}
          </span>
        </Space>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, elm) => (
        <Space>
          <EditExpertise id={elm.id} expertiseList={expertiseList} />
          <Popconfirm
            title="Do you remove this expertise?"
            onConfirm={() => handleDelete(elm.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <Card>
      <div className="w-100 text-right mb-3">
        <CreateExpertise />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default ProductList;
