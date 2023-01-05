import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateModuleType from './create';
import EditModuleType from './edit';

const List = () => {
  const dispatch = useDispatch();
  const [moduleTypeList, setModuleTypeList] = useState(null);
  const { list } = useSelector((state) => state.moduleType);
  useEffect(() => {
    dispatch(Actions.getAllModuleType());
  }, [dispatch]);

  useEffect(() => {
    setModuleTypeList(list);
  }, [list]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteModuleType(id));
  };
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'logo',
      dataIndex: 'logo',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'logo'),
      /* eslint-disable */
      render: logo => <img alt="" src={logo} />,
      /* eslint-enable */
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'partner name',
      dataIndex: 'partner',
      // sorter: (a, b) => utils.antdTableSorter(a, b, 'partner'),
      render: (partner) => partner.name,
    },
    {
      title: 'short description',
      dataIndex: 'shortDescription',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'shortDescription'),
    },
    {
      title: 'description',
      dataIndex: 'description',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
    },
    {
      title: 'CoBuilding',
      dataIndex: 'isCoBuilding',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'isCoBuilding'),
      render: (isCoBuilding) => (isCoBuilding ? 'True' : 'False'),
    },
    {
      title: 'BetaTesting',
      dataIndex: 'isBetaTesting',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'isBetaTesting'),
      render: (isBetaTesting) => (isBetaTesting ? 'True' : 'False'),
    },
    {
      title: 'published',
      dataIndex: 'published',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'published'),
      render: (published) => (published ? 'Published' : 'Not published'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditModuleType id={elm.id} data={moduleTypeList} />
          <Popconfirm
            title="Do you remove this ModuleType?"
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
        <CreateModuleType />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={moduleTypeList} />
      </div>
    </Card>
  );
};
export default List;
