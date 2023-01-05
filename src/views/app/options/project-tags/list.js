import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CreateProjectTags from './create';
import EditProjectTags from './edit';

const ProjectTagsList = () => {
  
  const dispatch = useDispatch();
  const [productTagList, setProductTagList] = useState(null);
  const { productTags } = useSelector((state) => state.projectTag);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 20,
  });

  useEffect(() => {
    dispatch(Actions.getAllProductTags());
  }, [dispatch]);

  useEffect(() => {
    setProductTagList(productTags);
  }, [productTags]);

  const deleteProductTag = (id) => {
    dispatch(Actions.deleteProductTag(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: ' Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <CreateProjectTags tooltip="Create New Product Tag" size="small"  />
          <EditProjectTags id={elm.id} data={productTagList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteProductTag(elm.id)}
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
        <CreateProjectTags buttonContent="Create New Product Tag"/>
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={productTagList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default ProjectTagsList;
