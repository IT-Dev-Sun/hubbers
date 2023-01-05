import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CreateSetting from './create';
import EditSetting from './edit';

const SettingList = () => {
  const dispatch = useDispatch();
  const [settingList, setSettingList] = useState(null);
  const { list } = useSelector((state) => state.setting);

  const [pagination, setPagenation] = useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllSetting());
  }, [dispatch]);

  useEffect(() => {
    setSettingList(list);
  }, [list]);

  const deleteSetting = (id) => {
    dispatch(Actions.deleteSetting(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: ' Name',
      dataIndex: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditSetting id={elm.id} data={settingList} />
          <Popconfirm
            title="Are you sure delete this Item?"
            onConfirm={() => deleteSetting(elm.id)}
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
        <CreateSetting />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={settingList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default SettingList;
