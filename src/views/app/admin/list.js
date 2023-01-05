import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Avatar, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../helpers/utils/index';
import * as Actions from '../../../redux/actions';
// import CreateUserButton from './create-user';
import CreateAdmin from './create';
import EditAdmin from './edit';

const AdminList = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [adminList, setAdminList] = useState(null);
  // // const [uploading, setUploading] = useState(false);
  const { list } = useSelector((state) => state.admins);
  
  useEffect(() => {
    dispatch(Actions.getAllAdmin());
  }, [dispatch]);

  useEffect(() => {
    setAdminList(list);
  }, [list]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteAdmin(id));
  };

  // const handleShowStatus = (value) => {
  //   if (value !== 'All') {
  //     const key = 'status';
  //     const tagetValue = value;
  //     const data = utils.filterArray(users, key, tagetValue);
  //     SetUserList(data);
  //   } else {
  //     SetUserList(users);
  //   }
  // };

  // const editItem = (id) => {
  //   history.push(`/app/users/${id}`);
  // };
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
      sorter: (a, b) => utils.antdTableSorter(a, b, 'published'),
    },
    {
      title: 'Admin Role',
      dataIndex: 'role',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.role?.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'role'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditAdmin id={elm.id} data={adminList} />
          <Popconfirm
            title="Do you remove this admin?"
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
        <CreateAdmin />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={adminList} />
      </div>
    </Card>
  );
};
export default AdminList;
