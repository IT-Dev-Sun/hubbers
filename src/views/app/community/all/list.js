import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Popconfirm, Button, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateCommunity from './create';
import EditCommunity from './edit';

const Community = () => {
  const dispatch = useDispatch();
  const [communityList, SetCommunityList] = useState(null);
  const { community } = useSelector((state) => state.communityAll);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllCommunity());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteCommunity(id));
  };

  useEffect(() => {
    SetCommunityList(community);
  }, [community]);
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Feature Image',
      dataIndex: 'featuredImage',
      /* eslint-disable */
      render: (_, record) => (
        record.featuredImage && <Image width={100} src={record.featuredImage} />
      ),
      /* eslint-enable */
    },
    {
      title: ' Name',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.country?.name}</span>
      ),
      sorter: (a, b) => {
        return a.country?.name.toLowerCase() > b.country?.name.toLowerCase()
          ? -1
          : b.country?.name.toLowerCase() > a.country?.name.toLowerCase()
          ? 1
          : 0;
      },
      /* eslint-enable */
    },
    {
      title: 'State',
      dataIndex: 'state',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.state}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'City',
      dataIndex: 'city',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.city}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'city'),
    },
    {
      title: 'Published',
      dataIndex: 'published',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.published ? 'Published' : 'Not Published'}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Created By',
      dataIndex: 'created',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.creator.email}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditCommunity id={elm.id} data={communityList} />
          <Popconfirm
            title="Are you sure delete this Community?"
            onConfirm={() => handleDelete(elm.id)}
            onCancel={() => console.log('Canceled to delete')}
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
  const handleTableChange = (params) => {
    setPagenation(params.pagination);
  };
  return (
    <Card>
      <div className="text-right mb-3">
        <CreateCommunity />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={communityList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default Community;
