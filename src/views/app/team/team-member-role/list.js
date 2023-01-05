import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateTeamMemberRole from './create';
import EditTeamMemberRole from './edit';

const TeamMemberRoleList = () => {
  const dispatch = useDispatch();
  const [teamMemberRoleList, setTeamMemberRoleList] = useState(null);
  const { list } = useSelector((state) => state.teamMemberRole);
  useEffect(() => {
    dispatch(Actions.getAllTeamMemberRole());
  }, [dispatch]);

  useEffect(() => {
    setTeamMemberRoleList(list);
  }, [list]);

  console.log(teamMemberRoleList);

  const handleDelete = (id) => {
    dispatch(Actions.deleteTeamMemberRole(id));
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
          <EditTeamMemberRole id={elm.id} data={teamMemberRoleList} />
          <Popconfirm
            title="Do you remove this TeamMemberRole?"
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
        <CreateTeamMemberRole />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={teamMemberRoleList}
        />
      </div>
    </Card>
  );
};
export default TeamMemberRoleList;
