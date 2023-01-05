import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Table, Space, Avatar, Tooltip, Popconfirm, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../../helpers/utils/index';
import * as Actions from '../../../../../redux/actions';
import CourseCreate from './create';
import EditCourse from './edit';
import CourseLesson from './lesson';

const CourseList = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.courseMain);

  const [courseList, setCourseList] = useState([]);

  const [pagination, setPagenation] = useState({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(Actions.getAllCourse());
  }, [dispatch]);

  useEffect(() => {
    setCourseList(list);
  }, [list]);

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Creator',
      dataIndex: 'createdBy',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <Avatar size={32} src={record.creator.avatar} />
          <span>{record.creator.firstname}</span>
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'Title',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span style={{whiteSpace:'nowrap'}}>{record.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Community',
      dataIndex: 'community',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.isGlobal ? '' : record.community.name}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Privacy Option',
      dataIndex: 'privacyOption',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.privacyOption.name}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Global',
      dataIndex: 'isGlobal',
      /* eslint-disable */
      render: (_, record) => (
        <span style={{whiteSpace:'nowrap'}}>{record.isGlobal ? 'Global' : 'Not Global'}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'isGlobal'),
    },
    {
      title: 'Publish',
      dataIndex: 'published',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.published ? 'Published' : 'Not Published'}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'published'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <Tooltip title="Edit">
            <EditCourse id={elm.id} data={courseList} />
          </Tooltip>
          <Tooltip title="View">
            <CourseLesson id={elm.id} />
          </Tooltip>
          <Popconfirm
            title="Are you sure delete this group?"
            onConfirm={() => dispatch(Actions.deleteCourse(elm.id))}
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

  const handleTableChange = (params) => {
    setPagenation(params.pagination);
  };

  return (
    <Card>
      <div className="text-right mb-3">
        <CourseCreate />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={courseList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default CourseList;
