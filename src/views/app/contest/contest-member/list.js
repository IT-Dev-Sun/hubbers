import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space, Modal, Image } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import GlideComponent from '../../../../components/carousel/GlideComponent';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateContestMember from './create';

const ContestMemberList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const [entryList, setEntryList] = useState(null);
  const [fileList, setFileList] = useState(null);
  const [state, setState] = useState({ visible: false });
  const { contestMemberList } = useSelector((s) => s.contestList);
  const { contestEntryList } = useSelector((s) => s.contestEntry);
  useEffect(() => {
    dispatch(Actions.getAllContestEntryList());
    dispatch(Actions.getAllContestMemberList());
  }, [dispatch]);

  useEffect(() => {
    setList(contestMemberList);
  }, [contestMemberList]);

  useEffect(() => {
    setEntryList(contestEntryList);
  }, [contestEntryList]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteContestMemberList(id));
  };
  const handleChageRole = (id, isActive) => {
    dispatch(Actions.updateContestMemberList({ id, isActive }));
  };

  const handleEntryDelete = (id) => {
    dispatch(Actions.deleteContestEntryList(id));
  };

  const showModal = (id) => {
    const i = entryList.filter((item) => item.id === id)[0];
    setFileList(i.fileList);
    setState({
      visible: true,
    });
  };

  const hideModal = () => {
    setState({
      visible: false,
    });
  };
  const getContestEntryMark = (entryMark) => {
    const entryMarkColumns = [
      {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
      },
      {
        title: 'DesignMark',
        dataIndex: 'designMark',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'designMark'),
      },
      {
        title: 'FunctionalityMark',
        dataIndex: 'functionalityMark',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'functionalityMark'),
      },
      {
        title: 'ManuFacturabilityMark',
        dataIndex: 'manuFacturabilityMark',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'manuFacturabilityMark'),
      },
      {
        title: 'MarketPotentialMark',
        dataIndex: 'marketPotentialMark',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'marketPotentialMark'),
      },
      {
        title: 'AverageMark',
        dataIndex: 'averageMark',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'averageMark'),
      },
    ];
    return (
      <Table
        rowKey="id"
        columns={entryMarkColumns}
        dataSource={entryMark}
        pagination={false}
      />
    );
  };
  const getContestEntry = (userId, contestId) => {
    const entryColumns = [
      {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
      },
      {
        title: 'Description',
        dataIndex: 'description',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.description}</span>
        ),
        /* eslint-enable */
        sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
      },
      {
        title: 'Design',
        dataIndex: 'design',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.design}</span>
        ),
        /* eslint-enable */
        sorter: (a, b) => utils.antdTableSorter(a, b, 'design'),
      },
      {
        title: 'Functionality',
        dataIndex: 'functionality',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.functionality}</span>
        ),
        /* eslint-enable */
        sorter: (a, b) => utils.antdTableSorter(a, b, 'functionality'),
      },
      {
        title: 'ManuFacturability',
        dataIndex: 'manuFacturability',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.manuFacturability}</span>
        ),
        /* eslint-enable */
        sorter: (a, b) => utils.antdTableSorter(a, b, 'manuFacturability'),
      },
      {
        title: 'MarketPotential',
        dataIndex: 'marketPotential',
        /* eslint-disable */
        render: (_, record) => (
          <span>{record.marketPotential}</span>
        ),
        /* eslint-enable */
        sorter: (a, b) => utils.antdTableSorter(a, b, 'marketPotential'),
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        /* eslint-disable */
        render: (_, elm) => (
  
          <Space>
            <Button type="primary" ghost icon={<EyeOutlined />} size="small" onClick={() => showModal(elm.id)} />
            <Popconfirm
              title="Do you remove this admin?"
              onConfirm={() => handleEntryDelete(elm.id)}
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
    const e = entryList.filter(
      (item) => item.userId === userId && item.contestId === contestId
    );
    // setEntryOneList(e);
    return (
      <Table
        rowKey="id"
        columns={entryColumns}
        expandable={{
          expandedRowRender: (record) => getContestEntryMark(record.entryMarks),
        }}
        dataSource={e}
        pagination={false}
      />
    );
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
          <Avatar width={50} src={record.user.avatar}/>
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'User',
      dataIndex: 'email',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.user.email}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'email'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.role === 'contestant' ? 'contestant' : 'judge'}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'role'),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      /* eslint-disable */
      render: (_, record) => (
        <span>{Math.ceil((new Date().getTime() - new Date(record.createdAt).getTime())/1000/3600/24)} days ago.</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'time'),
    },
    {
      title: 'Contest',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.contest.name}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      /* eslint-disable */
      render: (_, record) => (
        <span>
          {record.isActive ? <span style={{color: 'green'}}>Active</span> :  <span style={{color: 'red'}}>InActive</span>}
        </span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'role'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          {/* <EditContestList id={elm.id} data={list} /> */}
          {
          !elm.isActive ?
            <Popconfirm
              title="Are you sure you wish to approve this member?"
              onConfirm={() => handleChageRole(elm.id, true)}
              okText="Yes"
              cancelText="No"
            >
              <Button size="small" type="primary">Accept</Button>
            </Popconfirm> : <Popconfirm
              title="Are you sure you wish to reject this member?"
              onConfirm={() => handleChageRole(elm.id, false)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger size="small">Reject</Button>
            </Popconfirm>
          }
          <Popconfirm
            title="Do you remove this member?"
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
        <CreateContestMember />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          expandable={{
            expandedRowRender: (record) =>
              getContestEntry(record.userId, record.contestId),
          }}
          dataSource={list}
        />
      </div>
      <Modal
        title="Contest Entry Images"
        visible={state.visible}
        onOk={hideModal}
        onCancel={hideModal}
        cancelText="Cancel"
      >
        <GlideComponent
          settings={{
            gap: 5,
            perView: 4,
            type: 'carousel',
            breakpoints: {
              320: { perView: 1 },
              576: { perView: 2 },
              1600: { perView: 3 },
              1800: { perView: 4 },
            },
            hideNav: true,
          }}
        >
          {fileList &&
            fileList.map((item) => (
              <div className="text-center" key={item.id}>
                <Image alt="" preview={false} src={item.url} />
              </div>
            ))}
        </GlideComponent>
      </Modal>
    </Card>
  );
};
export default ContestMemberList;
