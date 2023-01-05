import React, { useState, useEffect } from 'react';
import {
  Card,
  Table,
  Select,
  Input,
  Button,
  Popconfirm,
  Tooltip,
  Avatar,
  Upload,
  Space,
} from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Flex from '../../../components/shared-components/Flex';
import utils from '../../../helpers/utils/index';
import * as Actions from '../../../redux/actions';
import CreateUserButton from './create-user';
import { statusList } from '../../../constants/userStatus';
import { API_BASE_URL } from '../../../constants/defaultValues';

const { Option } = Select;

const AllUsers = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userList, SetUserList] = useState(null);
  // const [uploading, setUploading] = useState(false);
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(Actions.getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    SetUserList(users);
  }, [users]);

  const handleShowStatus = (value) => {
    if (value !== 'All') {
      const key = 'status';
      const tagetValue = value;
      const data = utils.filterArray(users, key, tagetValue);
      SetUserList(data);
    } else {
      SetUserList(users);
    }
  };

  const editItem = (id) => {
    history.push(`/app/users/${id}`);
  };

  const deleteUser = (id) => {
    dispatch(Actions.deleteUser(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: ' Name',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <Avatar size={30} src={record.avatar}/>
          {`${record.firstname ? record.firstname : ''} ${
            record.lastname ? record.lastname : ''
          }`}
        </Space>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'firstname'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      /* eslint-disable */
      render: (_, record) => (
        <div className="d-flex">
          <span>{record.email}</span>
        </div>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'email'),
    },
    {
      title: 'Joined Date',
      dataIndex: 'joinedDate',
      /* eslint-disable */
      render: (_, record) => (
        <div className="d-flex">
          <span>{record.detail?.joinedDate}</span>
        </div>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'joinedDate'),
    },
    {
      title: 'preferedRole',
      dataIndex: 'preferedRole',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.preferedRole?.name}</span>
        ),
        /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'preferedRoleId'),
    },
    {
      title: 'Email Verify',
      dataIndex: 'emailVerified',
      /* eslint-disable */
        render: (_, record) => <span>{record.detail?.emailVerified}</span>,
        /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'emailVerified'),
    },
    {
      title: 'Phone Verify',
      dataIndex: 'phoneVerified',
      /* eslint-disable */
        render: (_, record) => <span>{record.detail?.phoneVerified}</span>,
        /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'phoneVerified'),
    },
    {
      title: 'Linkedin Login',
      dataIndex: 'isLoginWithLinkedin',
      /* eslint-disable */
        render: (_, record) => (
          <span>{record.isLoginWithLinkedin}</span>
          ),
          /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'isLoginWithLinkedin'),
    },
    {
      title: 'Published',
      dataIndex: 'published',
      /* eslint-disable */
          render: (_, record) => (
            <span>
              {record.published ? 'Published' : 'Not Published'}
            </span>
          ),
          /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'published'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
          render: (_, elm) => (
        <Space>
          <Tooltip title="View/Edit">
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => editItem(elm.id)}
              size="small"
            />
          </Tooltip>
          <Popconfirm
            title="Are you sure delete this Item?"
            onConfirm={() => deleteUser(elm.id)}
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
  const onSearch = (e) => {
    const { value } = e.currentTarget;
    const searchArray = e.currentTarget.value ? userList : users;
    const data = utils.wildCardSearch(searchArray, value);
    SetUserList(data);
  };
  return (
    <Card>
      <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false}>
          <div className="mr-md-3 mb-3">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={(e) => onSearch(e)}
            />
          </div>
          <div className="mb-3">
            <Select
              defaultValue="All"
              className="w-100"
              style={{ minWidth: 180 }}
              onChange={handleShowStatus}
              placeholder="All"
            >
              <Option value="All"> All </Option>
              {statusList.map((elm) => (
                <Option key={elm} value={elm}>
                  {elm}
                </Option>
              ))}
            </Select>
          </div>
        </Flex>
        <div style={{ display: 'flex' }}>
          <Space>
            <Tooltip title="Create User">
              <CreateUserButton />
            </Tooltip>
            <Tooltip title="Import Users">
              <Upload
                showUploadList={false}
                action={`${API_BASE_URL}/user/json`}
                onChange={(e) => console.log(e)}
              >
                <Button type="primary" icon={<PlusOutlined />} block>
                  {/* {uploading ? <Spin /> : 'Import Users'} */}
                  Import Users
                </Button>
              </Upload>
            </Tooltip>
            {/* <Button type="primary" icon={<FileExcelOutlined />} block>Export All</Button>   */}
          </Space>
        </div>
      </Flex>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={userList} />
      </div>
    </Card>
  );
};
export default AllUsers;
