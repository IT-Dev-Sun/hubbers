import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Table,
  Space,
  Select,
  Popconfirm,
  Button,
  Image,
  Avatar,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateCommunity from './create';
import EditCommunity from './edit';

const { Option } = Select;

const Member = () => {
  const dispatch = useDispatch();
  const { communityAll } = useSelector((state) => state);
  const { list } = useSelector((state) => state.member);
  const [communityRoleList, setCommunityRoleList] = useState([]);
  const [communityList, setCommunityList] = useState([]);
  const [tableList, setTableList] = useState([]);
  const [currentCommunityRole, setCurrentCommunityRole] = useState(null);
  const [currentCommunity, setCurrentCommunity] = useState(null);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllCommunityRole());
  }, [dispatch]);

  useEffect(() => {
    setCommunityRoleList(communityAll.roleList);
    setCurrentCommunityRole(communityAll.roleList[0]?.id);
    dispatch(Actions.getCommunityListByRole(communityAll.roleList[0]?.id));
  }, [communityAll.roleList, dispatch]);

  useEffect(() => {
    setCommunityList(communityAll.communityList);
    setCurrentCommunity(
      communityAll.communityList && communityAll.communityList[0]?.id
    );
    dispatch(
      Actions.getMemberListByCommunity(
        communityAll.communityList && communityAll.communityList[0]?.id
      )
    );
  }, [communityAll.communityList, dispatch]);

  useEffect(() => {
    setTableList(list);
    if (list?.length) {
      setCurrentCommunity(list[0].communityId);
    }
  }, [list]);

  const onChangeCommunityRole = (value) => {
    setCurrentCommunityRole(value);
    dispatch(Actions.getCommunityListByRole(value));
  };

  const onChangeCommunity = (value) => {
    setCurrentCommunity(value);
    dispatch(Actions.getMemberListByCommunity(value));
  };

  const handleDelete = (id) => {
    dispatch(Actions.deleteMember(id));
  };

  const handleChangeSuspend = (state, id, communityId) => {
    dispatch(Actions.updateMember({ suspend: state, id, communityId }));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      /* eslint-disable */
      render: (_, record) => (
        record.user?.avatar && <Avatar src={<Image src={record.user?.avatar}/>} size={70}/>
      ),
      /* eslint-enable */
    },
    {
      title: ' Name',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span>{`${record.user?.firstname && record.user?.firstname} ${record.user?.lastname && record.user?.lastname}`}</span>
      ),
      sorter: (a, b) => {
        return a.user?.firstname.toLowerCase() > b.user?.firstname.toLowerCase()
          ? -1
          : b.user?.firstname.toLowerCase() > a.user?.firstname.toLowerCase()
          ? 1
          : 0;
      },
      /* eslint-enable */
    },
    {
      title: 'Email',
      dataIndex: 'email',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.user?.email}</span>
      ),
      sorter: (a, b) => {
        return a.user?.email.toLowerCase() > b.user?.email.toLowerCase()
          ? -1
          : b.user?.email.toLowerCase() > a.user?.email.toLowerCase()
          ? 1
          : 0;
      },
      /* eslint-enable */
    },
    {
      title: 'Community',
      dataIndex: 'community',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.community?.name}</span>
      ),
      sorter: (a, b) => {
        return a.community?.name.toLowerCase() > b.community?.name.toLowerCase()
          ? -1
          : b.community?.name.toLowerCase() > a.community?.name.toLowerCase()
          ? 1
          : 0;
      },
      /* eslint-enable */
    },
    {
      title: 'Role',
      dataIndex: 'role',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.role?.name}</span>
      ),
      sorter: (a, b) => {
        return a.role?.name.toLowerCase() > b.role?.name.toLowerCase()
          ? -1
          : b.role?.name.toLowerCase() > a.role?.name.toLowerCase()
          ? 1
          : 0;
      },
      /* eslint-enable */
    },
    {
      title: 'Joined Date',
      dataIndex: 'joinedDate',
      /* eslint-disable */
      render: (_, record) => (
        <span>{moment(record.joinedDate).format('YYYY-MM-DD')}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'joinedDate'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.status}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'status'),
    },
    {
      title: 'Published',
      dataIndex: 'pubished',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.published ? 'Published' : 'Not Published'}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'published'),
    },
    {
      title: 'Suspend',
      dataIndex: 'suspend',
      /* eslint-disable */
      render: (_, record) =>
        <Button type={record.suspend ? 'primary' : 'danger'} ghost size='small' onClick={() => handleChangeSuspend(!record.suspend, record.id, record.communityId)}>{record.suspend ? 'Active' : 'Suspend'}</Button>
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditCommunity id={elm.id} data={tableList} role={currentCommunityRole} />
          <Popconfirm
            title="Are you sure delete this Member?"
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
      <div
        className="mb-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Select
            style={{ width: '160px' }}
            value={currentCommunityRole}
            onChange={onChangeCommunityRole}
          >
            {communityRoleList?.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
          <Select
            className="ml-3"
            style={{ width: '160px' }}
            value={currentCommunity}
            onChange={onChangeCommunity}
          >
            {communityList?.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <CreateCommunity role={currentCommunityRole} />
        </div>
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={tableList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default Member;
