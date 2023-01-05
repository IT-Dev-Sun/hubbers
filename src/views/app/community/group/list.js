import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Image, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import GroupCreate from './create';
import EditGroup from './edit';

const GroupList = () => {
  const dispatch = useDispatch();
  const [groupList, setGroupList] = useState(null);
  const { list } = useSelector((state) => state.group);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllGroups());
  }, [dispatch]);

  useEffect(() => {
    setGroupList(list);
  }, [list]);

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
        <Image width={100} src={record.featuredImageUrl} />
      ),
      /* eslint-enable */
    },
    {
      title: 'Title',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Community Name',
      dataIndex: 'community',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.community?.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'community'),
    },
    {
      title: 'Privacy Option',
      dataIndex: 'privacyOption',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.privacyOption.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'privacyOption'),
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
      title: 'Global',
      dataIndex: 'isGlobal',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.isGlobal ? 'Global' : 'Not Global'}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.creator.email}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.createdAt.split("T")[0]}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditGroup id={elm.id} data={groupList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this group?"
              onConfirm={() => dispatch(Actions.deleteGroup(elm.id))}
              okText="Yes"
              cancelText="No"
            >
              <Button danger icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
          </Tooltip>
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
        <GroupCreate />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={groupList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default GroupList;
