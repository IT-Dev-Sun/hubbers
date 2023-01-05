import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Image, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateContestList from './create';
import EditContestList from './edit';
// import CreateUserButton from './create-user';
// import EditDescription from './edit';

const ContestList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const [contestType, setContestType] = useState(null);
  const [industryItems, setIndustryItems] = useState(null);
  const [innovationItems, setInnovationItems] = useState(null);
  const [techItems, setTechItems] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  const { typeList } = useSelector((state) => state.basicTypeCategory);
  const { contestTypeList } = useSelector((state) => state.contestList);
  const { productList } = useSelector((state) => state.contestList);
  const { innovationList } = useSelector((state) => state.contestList);
  const { techList } = useSelector((state) => state.contestList);
  const { contestList } = useSelector((state) => state.contestList);

  useEffect(() => {
    dispatch(Actions.getAllBasicTypeCategory());
    dispatch(Actions.getAllContestCountry());
    dispatch(Actions.getAllContestList());
  }, [dispatch]);

  useEffect(() => {
    if (categoryList) {
      const ct = categoryList.filter((item) => item.name === 'contest');
      if (ct.length > 0) {
        dispatch(Actions.getAllContestType(ct[0].id));
      }
      const productType = categoryList.filter(
        (item) => item.name === 'product'
      );
      if (productType.length > 0) {
        dispatch(Actions.getAllContestProduct(productType[0].id));
      }
      const techType = categoryList.filter((item) => item.name === 'tech');
      if (techType.length > 0) {
        dispatch(Actions.getAllContestTech(techType[0].id));
      }
      const innovationType = categoryList.filter(
        (item) => item.name === 'innovation'
      );
      if (innovationType.length > 0) {
        dispatch(Actions.getAllContestInnovation(innovationType[0].id));
      }
    }
  }, [categoryList, dispatch]);

  useEffect(() => {
    setContestType(contestTypeList);
    setIndustryItems(productList);
    setInnovationItems(innovationList);
    setTechItems(techList);
  }, [contestTypeList, productList, innovationList, techList]);

  useEffect(() => {
    setCategoryList(typeList);
  }, [typeList]);

  useEffect(() => {
    setList(contestList);
  }, [contestList]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteContestList(id));
  };

  const tableColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <Image width={80} preview={false} src={record.featuredImageUrl} />
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'Name',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          {record.name}
        </Space>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Judges',
      dataIndex: 'nbJudge',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.contestMembers.filter((item) => item.role === 'judge').length}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'nbJudge'),
    },
    {
      title: 'Contestants',
      dataIndex: 'nbContestant',
      /* eslint-disable */
      render: (_, record) => (
        !record.nbContestant ? <span>All</span> : <span>{record.contestMembers.filter((item) => item.role === 'contestant').length}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'nbContestant'),
    },
    {
      title: 'Start Date',
      dataIndex: 'startTime',
      /* eslint-disable */
      render: (_, record) => (
        <span>{moment(record.startTime).format('YYYY-MM-DD')}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'startTime'),
    },
    {
      title: 'End Date',
      dataIndex: 'endTime',
      /* eslint-disable */
      render: (_, record) => (
        <span>{moment(record.endTime).format('YYYY-MM-DD')}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'endTime'),
    },
    {
      title: 'Views',
      dataIndex: 'view',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.view.length}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'view'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditContestList id={elm.id} data={list} contestType={contestType} industryItems={industryItems} innovationItems={innovationItems} techItems={techItems} />
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
        <CreateContestList
          contestType={contestType}
          industryItems={industryItems}
          innovationItems={innovationItems}
          techItems={techItems}
        />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={list} />
      </div>
    </Card>
  );
};
export default ContestList;
