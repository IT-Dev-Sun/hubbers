import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateJob from './create';
import EditJob from './edit';

const JobList = () => {
  const dispatch = useDispatch();
  const [jobList, setJobList] = useState(null);
  const { list } = useSelector((state) => state.job);
  useEffect(() => {
    dispatch(Actions.getAllJob());
  }, [dispatch]);

  useEffect(() => {
    setJobList(list);
  }, [list]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteJob(id));
  };
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'title',
      dataIndex: 'title',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'title'),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.startDate?.split('T')[0]}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'startDate'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.endDate?.split('T')[0]}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'endDate'),
    },
    {
      title: 'Employment Type',
      dataIndex: 'employmentType',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'employmentType'),
    },
    {
      title: 'Posted By',
      dataIndex: 'postedby',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record?.poster?.email}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'postedBy'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditJob id={elm.id} data={jobList} />
          <Popconfirm
            title="Do you remove this job?"
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
        <CreateJob />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={jobList} />
      </div>
    </Card>
  );
};
export default JobList;
