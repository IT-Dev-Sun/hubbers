import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Space, Modal, Image } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar, Pagination } from 'swiper';
// import { ThemeColors } from '../../../../helpers/ThemeColors';
import GlideComponent from '../../../../components/carousel/GlideComponent';
// import CreateContestMember from './create';

const ContestEntryList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const [fileList, setFileList] = useState(null);
  const [state, setState] = useState({ visible: false });
  const { contestEntryList } = useSelector((s) => s.contestEntry);
  useEffect(() => {
    dispatch(Actions.getAllContestEntryList());
  }, [dispatch]);

  useEffect(() => {
    setList(contestEntryList);
  }, [contestEntryList]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteContestEntryList(id));
  };

  const showModal = (id) => {
    const i = list.filter((item) => item.id === id)[0];
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
  const tableColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Contest',
      dataIndex: 'contest',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.contest.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'contest'),
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
        {/* <CreateContestMember /> */}
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={list} />
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
export default ContestEntryList;
