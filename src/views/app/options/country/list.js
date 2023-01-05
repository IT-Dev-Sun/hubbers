import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateCountry from './create';
import EditCountry from './edit';

const CountryList = () => {
  const dispatch = useDispatch();
  const [countryList, setCountryList] = useState(null);
  const { list } = useSelector((state) => state.country);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllCountry());
  }, [dispatch]);

  useEffect(() => {
    let countries = [];
    if (list && list.length > 0) {
      // eslint-disable-next-line array-callback-return
      list.map((c) => {
        countries = [...countries, c.dataValues];
      });
    }
    setCountryList(countries);
  }, [list]);

  const deleteCountry = (id) => {
    dispatch(Actions.deleteCountry(id));
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
        <span>{record.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Short Name',
      dataIndex: 'shortName',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.shortName}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'shortName'),
    },
    {
      title: 'Continent',
      dataIndex: 'continent',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.continent}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'continent'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditCountry id={elm.id} data={countryList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this Item?"
              onConfirm={() => deleteCountry(elm.id)}
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
        <CreateCountry />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={countryList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default CountryList;
