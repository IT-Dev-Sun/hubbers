import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreatePartner from './create';
import EditPartner from './edit';

const AllParters = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState(null);
  const { partnerList } = useSelector((state) => state.partner);
  useEffect(() => {
    dispatch(Actions.getAllPartner());
  }, [dispatch]);

  useEffect(() => {
    setTableList(partnerList);
  }, [partnerList]);

  const handleDelete = (id) => {
    dispatch(Actions.deletePartner(id));
  };
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Image',
      dataIndex: 'featuredImageUrl',
      /* eslint-disable */
      render: (_, record) => (
        <Avatar size={42} src={record.featuredImageUrl} />
      ),
      /* eslint-enable */
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Type',
      dataIndex: 'partnertype',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.partnertype?.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'partnertype'),
    },
    {
      title: 'Language',
      dataIndex: 'language',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'language'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'address'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditPartner id={elm.id} data={tableList} />
          <Popconfirm
            title="Do you remove this Partner?"
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
        <CreatePartner />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default AllParters;
