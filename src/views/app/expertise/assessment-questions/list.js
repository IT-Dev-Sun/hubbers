import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Select, Space, Badge } from 'antd';
import {
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateQuestion from './create';
import EditQuestion from './edit';

const { Option } = Select;
const AssessmentQuestionsList = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [currenUniverseId, setCurrentUniverseId] = useState(null);
  const { questionsList } = useSelector((state) => state.assessmentQuestions);
  const { categoryList } = useSelector((state) => state.assessmentQuestions);
  const { tagList } = useSelector((state) => state.assessmentQuestions);
  const { universeList } = useSelector((state) => state.assessmentTutorials);

  useEffect(() => {
    dispatch(Actions.getAllAssessmentUniverse());
    dispatch(Actions.getAssessmentTags());
  }, [dispatch]);

  useEffect(() => {
    if (universeList && universeList.length) {
      setCurrentUniverseId(universeList[0].id);
    }
  }, [universeList]);

  useEffect(() => {
    if (currenUniverseId) {
      dispatch(Actions.getAssessmentCategories(currenUniverseId));
    }
  }, [currenUniverseId, dispatch]);
  useEffect(() => {
    if (questionsList) {
      setTableList(questionsList);
    }
  }, [questionsList]);

  useEffect(() => {
    if (categoryList && categoryList.length) {
      setCurrentCategoryId(categoryList[0].id);
    } else {
      setCurrentCategoryId(null);
    }
  }, [categoryList, dispatch]);

  useEffect(() => {
    if (currentCategoryId) {
      dispatch(Actions.getAllAssessmentQuestions(currentCategoryId));
    } else {
      setTableList([]);
    }
  }, [currentCategoryId, dispatch]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteQuestion({ id }));
  };

  const handleCategory = (value) => {
    setCurrentCategoryId(value);
  };

  const handleUniverse = (value) => {
    setCurrentUniverseId(value);
  };

  const handleOrder = (id, flag) => {
    dispatch(Actions.orderQuestion({ id, flag }));
  };
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Validation Criteria',
      dataIndex: 'criteria',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'criteria'),
    },
    {
      title: 'Question',
      dataIndex: 'question',
    },
    {
      title: 'Assessment Tags',
      dataIndex: 'assessmentTags',
      /* eslint-disable */
      render: (_, record) => {
        if (record.assessmentTags.length) {
          return record.assessmentTags.map(tag =>
            <Badge style={{ backgroundColor: '#52c41a' }} count={tag.name} key={tag.id} />
          )
        }
      }
      /* eslint-enable */
    },
    {
      title: '(%)',
      dataIndex: 'weight',
      width: '40px',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <span style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>{(record.weight * 100).toFixed(2)}</span>
        </Space>
      ),
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditQuestion id={elm.id} data={questionsList} assessmentCategories={categoryList} assessmentTags={tagList} />
          <Popconfirm
            title="Do you remove this Assessment Question?"
            onConfirm={() => handleDelete(elm.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small" />
          </Popconfirm>
          <Button size="small" type="default" icon={<ArrowUpOutlined />} onClick={() => handleOrder(elm.id, 'true')} />
          <Button size="small" type="default" icon={<ArrowDownOutlined />} onClick={() => handleOrder(elm.id, 'false')} />
        </Space>
      ),
      /* eslint-enable */
    },
  ];
  return (
    <Card>
      <div className="d-flex mb-3" style={{ justifyContent: 'space-between' }}>
        <Space>
          <Select
            style={{ width: 200 }}
            onChange={handleUniverse}
            placeholder="Type Universe"
            value={currenUniverseId}
          >
            {universeList?.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
          <Select
            onChange={handleCategory}
            placeholder="Type Category"
            value={currentCategoryId}
            style={{ width: 200, textTransform: 'capitalize' }}
          >
            {categoryList?.map((item) => {
              return (
                <Option
                  key={item.id}
                  value={item.id}
                  style={{ textTransform: 'capitalize' }}
                >
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Space>
        <CreateQuestion
          assessmentCategories={categoryList}
          assessmentTags={tagList}
          currentCategoryId={currentCategoryId}
        />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default AssessmentQuestionsList;
