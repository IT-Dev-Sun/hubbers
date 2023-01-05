import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateLanguageLevel from './create';
import EditLanguageLevel from './edit';

const LanguageLevelList = () => {
  const dispatch = useDispatch();
  const [languageLevelList, SetLanguageLevelList] = useState(null);
  const { list } = useSelector((state) => state.languageLevel);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllLanguageLevel());
  }, [dispatch]);

  useEffect(() => {
    SetLanguageLevelList(list);
  }, [list]);

  const deleteLanguageLevel = (id) => {
    dispatch(Actions.deleteLanguageLevel(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditLanguageLevel id={elm.id} data={languageLevelList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteLanguageLevel(elm.id)}
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
        <CreateLanguageLevel />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={languageLevelList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default LanguageLevelList;
