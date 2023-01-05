import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateSocial from './create';
import EditSocial from './edit';

const SocialList = () => {
  const dispatch = useDispatch();
  const [socialList, setSocialList] = useState(null);
  const { socialList: sList } = useSelector((state) => state.social);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(Actions.getAllSocial());
  }, [dispatch]);

  useEffect(() => {
    setSocialList(sList);
  }, [sList]);

  const deleteSocial = (id) => {
    dispatch(Actions.deleteSocial(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Icon',
      dataIndex: 'icon',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'icon'),
      /* eslint-disable */
      render: (_, elm) => <Image preview={false} width={100} src={elm.icon} />
      /* eslint-enable */
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditSocial id={elm.id} data={socialList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteSocial(elm.id)}
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
        <CreateSocial />
      </div>
      <div className="table-responsive">
        {socialList && (
          <Table
            rowKey="id"
            columns={tableColumns}
            dataSource={socialList}
            pagination={pagination}
            onChange={handleTableChange}
          />
        )}
      </div>
    </Card>
  );
};
export default SocialList;
