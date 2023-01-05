import React, { useState, useEffect } from 'react';
import { Card, Space, Table, Popconfirm, Button, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import * as Actions from '../../../redux/actions';
import MemberCreate from './create';
import MemberEdit from './edit';

const MemberList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const { memberList } = useSelector((state) => state.hubbersTeam);

  useEffect(() => {
    dispatch(Actions.getAllHubbersTeam());
  }, [dispatch]);

  useEffect(() => {
    setList(memberList);
  }, [memberList]);

  const handleOrder = (id, flag) => {
    dispatch(Actions.orderHubbersTeam(id, flag));
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
        <Avatar size={50} src={record.user?.avatar}/>
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
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinedDate',
      /* eslint-disable */
      render: (_, record) => (
        <span style={{whiteSpace:'nowrap'}}>
          {moment(record.joinedDate).format('YYYY-MM-DD')}
        </span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Terminate Date',
      dataIndex: 'terminatedDate',
    },
    {
      title: 'Terminated',
      dataIndex: 'isTerminated',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.isTerminated ? 'Terminated' : 'Not Terminated'}
        </span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Published',
      dataIndex: 'published',
      /* eslint-disable */
      render: (_, record) => (
        <span
          style={{
            color: `${record.published ? '#75ac2a' : 'red'}`
          }}
        >
          {record.published ? 'Publish' : 'Not Publish'}
        </span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <MemberEdit id={elm.id} data={list} />
          <Popconfirm
            title="Are you sure remove this member?"
            onConfirm={() => dispatch(Actions.deleteHubbersTeam(elm.id))}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
          <Button size="small" type="default" icon={<ArrowUpOutlined />} onClick={()=>handleOrder(elm.id, 'true')} />
          <Button size="small" type="default" icon={<ArrowDownOutlined />} onClick={()=>handleOrder(elm.id, 'false')} />
        </Space>
      ),
      /* eslint-enable */
    },
  ];
  return (
    <Card>
      <div className="w-100 text-right mb-3">
        <MemberCreate />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={list} />
      </div>
    </Card>
  );
};
export default MemberList;
