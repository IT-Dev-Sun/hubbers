import React, { useEffect, useState } from 'react';
import { Drawer, Button, Collapse, List, Space } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../../../redux/actions';
import PageLoading from '../../../../../components/util-components/PageLoading';
import { getCurrentUser } from '../../../../../helpers/Utils';
import EditUnit from './editUnit';

const { Panel } = Collapse;
const CourseLesson = ({ id }) => {
  const dispatch = useDispatch();
  const currentUser = getCurrentUser();
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState(null);
  const { detail: courseDetail } = useSelector((state) => state.courseMain);
  const toggleDrawer = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    if (visible) {
      dispatch(Actions.getDetailCourse(id));
    }
  }, [id, visible, dispatch]);

  useEffect(() => {
    if (courseDetail) {
      setDetail(courseDetail);
    }
  }, [courseDetail]);

  return (
    <>
      <Button
        type="primary"
        onClick={toggleDrawer}
        icon={<EyeOutlined />}
        size="small"
      />
      <Drawer
        title="Course Detail"
        width={542}
        onClose={toggleDrawer}
        visible={visible}
        bodyStyle={{ paddingBottom: 10, paddingTop: 70 }}
      >
        {!detail ? (
          <PageLoading />
        ) : (
          <>
            <h1>
              <b>{detail.name}</b>
            </h1>
            <List
              className="lesson-list"
              bordered
              header={
                <List.Item style={{ margin: '-12px -32px -12px -8px' }}>
                  <b>{detail.overview?.name}</b>
                  <EditUnit
                    courseId={id}
                    t="overview"
                    id={detail.overview?.id}
                  />
                </List.Item>
              }
              footer={
                <List.Item style={{ justifyContent: 'center' }}>
                  <Space size={100}>
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => {
                        dispatch(
                          Actions.addUnit({
                            unit: 'section',
                            courseId: detail.id,
                            data: {
                              courseId: detail.id,
                              createdBy: currentUser?.id,
                            },
                          })
                        );
                      }}
                    >
                      New {detail.detail?.section?.name}
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => {
                        dispatch(
                          Actions.addUnit({
                            unit: 'unit',
                            courseId: detail.id,
                            data: {
                              courseId: detail.id,
                              createdBy: currentUser?.id,
                            },
                          })
                        );
                      }}
                    >
                      New {detail.detail?.unit?.name}
                    </Button>
                  </Space>
                </List.Item>
              }
              dataSource={detail.children}
              renderItem={(item) =>
                item.role?.name === 'section' ? (
                  <Collapse bordered={false}>
                    <Panel
                      header={
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            alignItems: 'center',
                          }}
                        >
                          <b>{item.name}</b>
                          <EditUnit courseId={id} t="section" id={item.id} />
                        </div>
                      }
                    >
                      {item.units && item.units?.length ? (
                        <>
                          {item.units.map((i) => {
                            return (
                              <List.Item
                                key={i.id}
                                style={{ paddingRight: 0, paddingLeft: 32 }}
                              >
                                <b>{i.name}</b>
                                <EditUnit courseId={id} t="unit" id={i.id} />
                              </List.Item>
                            );
                          })}
                          <List.Item
                            style={{
                              justifyContent: 'center',
                              paddingRight: 0,
                              paddingLeft: 32,
                            }}
                          >
                            <Button
                              type="primary"
                              size="small"
                              onClick={() => {
                                dispatch(
                                  Actions.addUnit({
                                    unit: 'unit',
                                    courseId: detail.id,
                                    data: {
                                      courseId: item.id,
                                      createdBy: currentUser?.id,
                                    },
                                  })
                                );
                              }}
                            >
                              New {detail.detail?.unit?.name}
                            </Button>
                          </List.Item>
                        </>
                      ) : (
                        <List.Item style={{ justifyContent: 'center' }}>
                          <Button
                            type="primary"
                            size="small"
                            onClick={() => {
                              dispatch(
                                Actions.addUnit({
                                  unit: 'unit',
                                  courseId: detail.id,
                                  data: {
                                    courseId: item.id,
                                    createdBy: currentUser?.id,
                                  },
                                })
                              );
                            }}
                          >
                            New {detail.detail?.unit?.name}
                          </Button>
                        </List.Item>
                      )}
                    </Panel>
                  </Collapse>
                ) : (
                  <List.Item
                    style={{ paddingLeft: '40px', paddingRight: '16px' }}
                  >
                    <b>{item.name}</b>
                    <EditUnit courseId={id} t="unit" id={item.id} />
                  </List.Item>
                )
              }
            />
          </>
        )}
      </Drawer>
    </>
  );
};

export default CourseLesson;
