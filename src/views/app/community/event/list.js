import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Image, Avatar } from 'antd';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateEvent from './create';
import EditEvent from './edit';

const EventList = () => {
  const dispatch = useDispatch();
  const [events, SetEvents] = useState(null);
  const { list } = useSelector((state) => state.event);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    SetEvents(list);
  }, [list]);
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Header Image',
      dataIndex: 'headerImageUrl',
      /* eslint-disable */
      render: (_, record) => (
        record.headerImageUrl && <Image width={100} src={record.headerImageUrl} />
      ),
      /* eslint-enable */
    },
    {
      title: 'Title',
      dataIndex: 'title',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.title}</span>
        ),
        /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'title'),
    },
    {
      title: 'Gobal/Local',
      dataIndex: 'isGlobal',
      /* eslint-disable */
        render: (_, record) => (
          <span>{record.isGlobal ? 'Global' : 'Local'}</span>
        ),
        /* eslint-enable */
    },
    {
      title: 'Community',
      dataIndex: 'community',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.community?.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'community'),
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.topic?.name}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Timezone',
      dataIndex: 'timezone',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.timezoneDetail?.abbr}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'timezone'),
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <Avatar size={42} src={record.creator.avatar} />
          <span style={{ whiteSpace: 'nowrap' }}>{record.creator?.firstname} {record.creator?.lastname}</span>
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.startDate?.split('T')[0]}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.endDate?.split('T')[0]}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.createdAt?.split('T')[0]}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Type',
      dataIndex: 'eventType',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.eventType}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Is Draft',
      dataIndex: 'draft',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.draft && 'Draft'}</span>
      ),
      /* eslint-enable */
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
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditEvent id={elm.id} data={list} />
          {/* <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => console.log('delete')}
              onCancel={() => console.log('Canceled to delete')}
              okText="Yes"
              cancelText="No"
            >
              <Button danger icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
          </Tooltip> */}
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
        <CreateEvent />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={events}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default EventList;
