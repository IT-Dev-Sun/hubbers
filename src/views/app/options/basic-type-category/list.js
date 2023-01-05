import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button, Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateBasicTypeCategory from './create';
import EditBasicTypeCategory from './edit';

const BasicTypeCategoryList = () => {
  const dispatch = useDispatch();
  const [basicTypeCategoryList, setBasicTypeCategoryList] = useState(null);
  const { typeList } = useSelector((state) => state.basicTypeCategory);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllBasicTypeCategory());
  }, [dispatch]);

  useEffect(() => {
    setBasicTypeCategoryList(typeList);
  }, [typeList]);

  const deleteBasicTypeCategory = (id) => {
    dispatch(Actions.deleteBasicTypeCategory(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Display Name',
      dataIndex: 'displayName',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'displayName'),
    },
    {
      title: ' Name',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'IncludeImage',
      dataIndex: 'includeImage',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <Badge count={`${elm.includeImage}`} style={{ backgroundColor: elm.includeImage === true ? '#52c41a' : '#ff4d4f' }} />
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'Parent Category',
      dataIndex: 'parentCategoryId',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          {
            elm.parentCategoryId
              ?
              <Badge count={`${elm.parent && elm.parent.displayName}`} style={{ backgroundColor: '#52c41a' }} />
              :
              <></>
          }
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditBasicTypeCategory id={elm.id} data={basicTypeCategoryList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteBasicTypeCategory(elm.id)}
              onCancel={() => console.log('Canceled to delete')}
              okText="Yes"
              cancelText="No"
            >
              <Button danger icon={<DeleteOutlined />} size="small" />
            </Popconfirm>
          </Tooltip>
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
        <CreateBasicTypeCategory categoryList={basicTypeCategoryList} />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={basicTypeCategoryList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default BasicTypeCategoryList;
