/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Select, Space, Badge } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateTutorial from './create';
import EditTutorial from './edit';

const { Option } = Select;
const AssessmentTutorialsList = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [currentUniverId, setCurrentUniverId] = useState(null);
  const { universeList } = useSelector((state) => state.assessmentTutorials);
  const { categoryList } = useSelector((state) => state.assessmentQuestions);
  const { tutorialsList } = useSelector((state) => state.assessmentTutorials);
  const { questionsList } = useSelector((state) => state.assessmentQuestions);
  const [assessmentCategories, setAssessmentCategories] = useState([]);
  const [assessmentUniverse, setAssessmentUniverse] = useState([]);
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);

  useEffect(() => {
    dispatch(Actions.getAllAssessmentUniverse());
  }, [dispatch]);

  useEffect(() => {
    if (universeList) {
      setAssessmentUniverse(universeList);
      setCurrentUniverId(universeList[0]?.id);
    }
  }, [universeList]);

  useEffect(() => {
    if (categoryList) {
      setAssessmentCategories(categoryList);
      setCurrentCategoryId(categoryList[0]?.id);
    }
  }, [categoryList]);

  useEffect(() => {
    if (tutorialsList) {
      setTableList(tutorialsList);
      dispatch(Actions.getAllAssessmentQuestions(currentCategoryId));
    }
  }, [tutorialsList]);

  useEffect(() => {
    if (questionsList) {
      setAssessmentQuestions(questionsList);
    }
  }, [questionsList]);

  useEffect(() => {
    if (currentUniverId) {
      dispatch(Actions.getAssessmentCategories(currentUniverId));
    }
  }, [currentUniverId, dispatch]);

  useEffect(() => {
    if (currentCategoryId) {
      dispatch(
        Actions.getAllAssessmentTutorialsByCategoryId(currentCategoryId)
      );
      dispatch(Actions.getAllAssessmentQuestions(currentCategoryId));
    }
  }, [currentCategoryId, dispatch]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteTutorial({ id }));
  };

  const handleCategory = (value) => {
    setCurrentCategoryId(value);
  };

  const handleUniver = (value) => {
    setCurrentUniverId(value);
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'title'),
    },
    {
      title: 'Content',
      dataIndex: 'text',
    },
    {
      title: 'Type',
      dataIndex: 'isVideo',
      /* eslint-disable */
      render: (_, elm) => (
        <Badge style={{ backgroundColor: '#52c41a' }} count={elm.isVideo ? "Video" : "Image"} />
      )
      /* eslint-enable */
    },
    {
      title: 'Question',
      dataIndex: 'question',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'question'),
      /* eslint-disable */
      render: (_, elm) => {
        if (elm.question) {
          return (
            elm.question.question
          )
        }
      }
      /* eslint-enable */
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      /* eslint-disable */
      render: (_, elm) => (
        <Space>
          <EditTutorial id={elm.id} data={tutorialsList} assessmentQuestions={assessmentQuestions} currentCategoryId={currentCategoryId} />
          <Popconfirm
            title="Do you remove this Assessment Tutorial?"
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
      <div className="d-flex mb-3" style={{ justifyContent: 'space-between' }}>
        <Space>
          <Select
            style={{ width: 200 }}
            onChange={handleUniver}
            placeholder="Type Univer"
            value={currentUniverId}
          >
            {assessmentUniverse?.map((item) => {
              return (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
          <Select
            style={{ width: 200, textTransform: 'capitalize' }}
            onChange={handleCategory}
            placeholder="Type Category"
            value={currentCategoryId}
          >
            {assessmentCategories?.map((item) => {
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
        <CreateTutorial
          assessmentQuestions={assessmentQuestions}
          currentCategoryId={currentCategoryId}
        />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default AssessmentTutorialsList;
