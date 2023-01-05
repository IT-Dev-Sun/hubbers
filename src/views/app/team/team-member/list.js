import React, { useState, useEffect } from 'react';
import { Card, Space, Table, Button, Avatar, Select, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import TeamMemberCreate from './create';
import TeamMemberEdit from './edit';

const { Option } = Select;

const TeamMemberList = () => {
  const dispatch = useDispatch();
  const [currentTeam, setCurrentTeam] = useState();
  const [teamList, setTeamList] = useState([]);
  const [teamMemberList, setTeamMemberList] = useState([]);
  const { list } = useSelector((state) => state.team);
  const { memberList, error } = useSelector((state) => state.teamMember);
  const [searchTeamList, setSearchTeamList] = useState();

  const errorNotification = (err) => {
    if (!err.data.success) {
      notification.error({
        message: 'Error',
        description: err.data.message,
        placement: 'bottomRight',
      });
    }
  };

  useEffect(() => {
    dispatch(Actions.getAllTeam());
  }, [dispatch]);

  useEffect(() => {
    setTeamList(list);
    setSearchTeamList(list);
    setCurrentTeam(list[0]?.id);
    if (list[0]?.id) {
      dispatch(Actions.getAllTeamMember(list[0]?.id));
    }
  }, [dispatch, list]);

  useEffect(() => {
    setTeamMemberList(memberList);
    if (memberList[0]?.teamId) {
      setCurrentTeam(memberList[0]?.teamId);
    }
  }, [memberList]);

  useEffect(() => {
    if (error) {
      errorNotification(error);
    }
  }, [error]);

  const getMemberList = (teamId) => {
    setCurrentTeam(teamId);
    dispatch(Actions.getAllTeamMember(teamId));
  };

  const memberTerminated = (id, flag) => {
    dispatch(Actions.changeTeamMember(id, flag, currentTeam));
  };

  const handleOrder = (id, flag) => {
    dispatch(Actions.orderTeamMember(id, flag, currentTeam));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      /* eslint-disable */
      render: (_, record) => (
        <Avatar size={50} src={record.user?.avatar} />
      ),
      /* eslint-enable */
    },
    {
      title: 'Email',
      dataIndex: 'email',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.user?.email}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Team',
      dataIndex: 'team',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.team?.name}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Role',
      dataIndex: 'role',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.role?.name}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Joined Date',
      dataIndex: 'joinedDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.joinedDate?.split('T')[0] ?? ''}
        </span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Terminated Date',
      dataIndex: 'terminatedDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.terminatedDate?.split('T')[0] ?? ''}
        </span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <TeamMemberEdit id={record.id} memberList={teamMemberList} teamList={teamList} />
          {
            record.terminated
              ? <Button danger size="small" onClick={() => { memberTerminated(record.id, "false") }}>Terminated</Button>
              : <Button type="primary" size="small" onClick={() => { memberTerminated(record.id, "true") }}>Unerminated</Button>
          }
          {/* <Button danger icon={<DeleteOutlined />} size="small" /> */}
          <Button size="small" type="default" icon={<ArrowUpOutlined />} onClick={() => handleOrder(record.id, 'true')} />
          <Button size="small" type="default" icon={<ArrowDownOutlined />} onClick={() => handleOrder(record.id, 'false')} />
        </Space>
      ),
      /* eslint-enable */
    },
  ];

  const onSearchTeam = (v) => {
    const u = [...teamList];
    if (v) {
      setSearchTeamList([
        ...u.filter(
          (c) => c?.name?.toLowerCase().indexOf(v.toLowerCase()) > -1
        ),
      ]);
    } else {
      setSearchTeamList(u);
    }
  };
  return (
    <Card>
      <div className="d-flex mb-3" style={{ justifyContent: 'space-between' }}>
        <Select
          filterOption={false}
          showSearch
          onSearch={onSearchTeam}
          style={{ width: 200 }}
          onChange={getMemberList}
          placeholder="Select a Team."
          value={currentTeam}
        >
          {searchTeamList?.map((item) => {
            return (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
        <TeamMemberCreate teamList={teamList} />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={teamMemberList} />
      </div>
    </Card>
  );
};
export default TeamMemberList;
