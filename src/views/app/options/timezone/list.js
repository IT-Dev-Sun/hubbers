import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateTimezone from './create';
import EditTimezone from './edit';

const TimezoneList = () => {
  const dispatch = useDispatch();
  const [timezoneList, SetTimezoneList] = useState(null);
  const { list } = useSelector((state) => state.timezone);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(Actions.getAllTimezone());
  }, [dispatch]);

  useEffect(() => {
    SetTimezoneList(list);
  }, [list]);

  const deleteTimezone = (id) => {
    dispatch(Actions.deleteTimezone(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'UTC',
      dataIndex: 'utc',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'utc'),
    },
    {
      title: 'Abbr',
      dataIndex: 'abbr',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'abbr'),
    },
    {
      title: 'Offset',
      dataIndex: 'offset',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'offset'),
    },
    {
      title: 'Value',
      dataIndex: 'value',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'value'),
    },
    {
      title: 'Text',
      dataIndex: 'text',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'text'),
    },
    {
      title: 'Is DST',
      dataIndex: 'isdst',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.isdst ? 'True' : 'False'}</span>
      ),
      /* eslint-disable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'isdst'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditTimezone id={elm.id} data={timezoneList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteTimezone(elm.id)}
              onCancel={() => console.log('Canceled to delete')}
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
        <CreateTimezone />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={timezoneList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default TimezoneList;
