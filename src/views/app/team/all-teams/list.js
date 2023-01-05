import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateTeam from './create';
import EditTeam from './edit';

const TeamList = () => {
  const dispatch = useDispatch();
  const [teamList, setTeamList] = useState(null);
  const { list } = useSelector((state) => state.team);
  useEffect(() => {
    dispatch(Actions.getAllTeam());
  }, [dispatch]);

  useEffect(() => {
    setTeamList(list);
  }, [list]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteTeam(id));
  };
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'description',
      dataIndex: 'description',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditTeam id={elm.id} data={teamList} />
          <Popconfirm
            title="Do you remove this Team?"
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
        <CreateTeam />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={teamList} />
      </div>
    </Card>
  );
};
export default TeamList;
