import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Space,
  Table,
  Tooltip,
  Popconfirm,
  Button,
  Select,
  notification,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import utils from '../../../../../helpers/utils/index';
import * as Actions from '../../../../../redux/actions';
import CourseStructureCreate from './create';
import EditCourseStructure from './edit';
import courseStructureType from '../../../../../constants/courseStructureType';

const { Option } = Select;
const CourseStructureList = () => {
  const dispatch = useDispatch();
  const [filteredCourseStructureList, setFilteredCourseStructureList] =
    useState(null);
  const [courseStructureList, setCourseStructureList] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('courseType');
  const { list, error } = useSelector((state) => state.courseStructure);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    dispatch(Actions.getAllCourseStructure());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Error',
        placement: 'bottomRight',
        description: error[0]?.message,
      });
    }
  }, [error]);

  useEffect(() => {
    setCourseStructureList(list);
  }, [list]);
  useEffect(() => {
    if (courseStructureList) {
      setFilteredCourseStructureList(
        courseStructureList.filter((l) => l.category === currentCategory)
      );
    }
  }, [courseStructureList, currentCategory]);

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.name}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Singular Name',
      dataIndex: 'singularName',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.singularName}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'singularName'),
    },
    {
      title: 'Indefinite Article Name',
      dataIndex: 'iaName',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.iaName}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'iaName'),
    },
    {
      title: 'Plural Name',
      dataIndex: 'pluralName',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.pluralName}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'pluralName'),
    },
    {
      title: 'Possessive Plural Name',
      dataIndex: 'ppName',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.ppName}</span>
      ),
      /* eslint-enable */
      sorter: (a, b) => utils.antdTableSorter(a, b, 'ppName'),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      /* eslint-disable */
      render: (_, record) => (
        <span>{record.createdAt.split("T")[0]}</span>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditCourseStructure id={elm.id} data={filteredCourseStructureList} />
          <Tooltip title="Delete">
            <Popconfirm
              title="Are you sure delete this courseStructure?"
              onConfirm={() => dispatch(Actions.deleteCourseStructure(elm.id))}
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
      <div className="mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
        <Select
          style={{ width: 200 }}
          onChange={(e) => setCurrentCategory(e)}
          placeholder="Type Category"
          value={currentCategory}
        >
          {courseStructureType?.map((item) => {
            return (
              <Option key={item.key} value={item.key}>
                {item.name}
              </Option>
            );
          })}
        </Select>
        <CourseStructureCreate
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={filteredCourseStructureList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default CourseStructureList;
