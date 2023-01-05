import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreatePartnerType from './create';
import EditPartnerType from './edit';

const PartnerTypeList = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState(null);
  const { partnerTypeList } = useSelector((state) => state.partnerType);
  useEffect(() => {
    dispatch(Actions.getAllPartnerType());
  }, [dispatch]);

  useEffect(() => {
    setTableList(partnerTypeList);
  }, [partnerTypeList]);

  const handleDelete = (id) => {
    dispatch(Actions.deletePartnerType(id));
  };
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'description',
      dataIndex: 'description',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditPartnerType id={elm.id} data={tableList} />
          <Popconfirm
            title="Do you remove this Partner Type?"
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
        <CreatePartnerType />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default PartnerTypeList;
