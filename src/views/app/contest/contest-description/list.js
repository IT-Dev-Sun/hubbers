import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateDescription from './create';
// import CreateUserButton from './create-user';
import EditDescription from './edit';

const ContestDescriptionList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const { descriptionList } = useSelector((state) => state.contestDescription);
  useEffect(() => {
    dispatch(Actions.getAllDescription());
  }, [dispatch]);

  useEffect(() => {
    setList(descriptionList);
  }, [descriptionList]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteDescription(id));
  };

  const tableColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: ' Title',
      dataIndex: 'title',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          {`${record.title}`}
        </Space>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'title'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      /* eslint-disable */
      render: (_, record) => (
        <div className="d-flex">
          <div dangerouslySetInnerHTML={{__html:record.description}} />
        </div>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.category}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'category'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditDescription id={elm.id} data={list} />
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
        <CreateDescription />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={list} />
      </div>
    </Card>
  );
};
export default ContestDescriptionList;
