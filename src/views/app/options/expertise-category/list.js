import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CreateExpertiseCategory from './create';
import EditExpertiseCategory from './edit';

const ExpertiseCategoryList = () => {
  const dispatch = useDispatch();
  const [expertiseCategoryList, setExpertiseCategoryList] = useState(null);
  const { list } = useSelector((state) => state.expertiseCategory);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllExpertiseCategory());
  }, [dispatch]);

  useEffect(() => {
    setExpertiseCategoryList(list);
  }, [list]);

  const deleteExpertiseCategory = (id) => {
    dispatch(Actions.deleteExpertiseCategory(id));
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
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Created By',
      dataIndex: 'created',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.creator?.email}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <CreateExpertiseCategory type="expertiseSubcategory" tooltip="Create New ExpertiseSubcategory" size="small" parentId={elm.id} />
          <EditExpertiseCategory id={elm.id} data={expertiseCategoryList} type="expertiseCategory" />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteExpertiseCategory(elm.id)}
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
  const getSkill = (parentId) => {
    const skillColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: ' Name',
        dataIndex: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Created By',
        dataIndex: 'created',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.creator?.email}</span>
        ),
        /* eslint-enable */
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        /* eslint-disable */
        render: (_, elm) => (
          <Space>
            <EditExpertiseCategory id={elm.id} data={expertiseCategoryList} type="skill" />
            <Tooltip title="Delete">
              <Popconfirm
                title="Are you sure delete this Item?"
                onConfirm={() => deleteExpertiseCategory(elm.id)}
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
    return (
      <Table
        rowKey="id"
        columns={skillColumns}
        dataSource={expertiseCategoryList.filter(
          (item) => item.parentId === parentId
        )}
        pagination={false}
        rowClassName="table-3"
      />
    );
  };
  const getExpertiseSubcategory = (parentId) => {
    const tableColumnsSub = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: ' Name',
        dataIndex: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Created By',
        dataIndex: 'created',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.creator?.email}</span>
        ),
        /* eslint-enable */
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        /* eslint-disable */
        render: (_, elm) => (
          <Space>
            <CreateExpertiseCategory type="skill" tooltip="Create New ExpertiseSubcategory" size="small" parentId={elm.id} />
            <EditExpertiseCategory id={elm.id} data={expertiseCategoryList} type="expertiseSubcategory" />
            <Tooltip title="Delete">
              <Popconfirm
                title="Are you sure delete this Item?"
                onConfirm={() => deleteExpertiseCategory(elm.id)}
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
    return (
      <Table
        rowKey="id"
        columns={tableColumnsSub}
        dataSource={expertiseCategoryList.filter(
          (item) => item.parentId === parentId
        )}
        expandable={{
          expandedRowRender: (record) => getSkill(record.id),
        }}
        pagination={false}
        rowClassName="table-2"
      />
    );
  };
  return (
    <Card>
      <div className="text-right mb-3">
        <CreateExpertiseCategory
          type="expertiseCategory"
          buttonContent="Create New ExpertiseCategory"
        />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={expertiseCategoryList?.filter(
            (item) => item.categoryType === 'expertiseCategory'
          )}
          expandable={{
            expandedRowRender: (record) => getExpertiseSubcategory(record.id),
          }}
          pagination={pagination}
          onChange={handleTableChange}
          rowClassName="table-1"
        />
      </div>
    </Card>
  );
};
export default ExpertiseCategoryList;
