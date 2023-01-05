/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input as RInput } from 'reactstrap';
import {
  Row,
  Drawer,
  Form,
  Button,
  Col,
  Input,
  Select,
  Switch,
  DatePicker,
  Divider,
  TimePicker,
  Space,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import { getRandomInt, slugify } from '../../../../helpers/Utils';
import { EventRepeatPeriod } from '../../../../constants/eventRepeatPeriod';
import { EventRepeatPeriodCustomUnit } from '../../../../constants/eventRepeatPeriodCustomUnit';
import { WeekDays } from '../../../../constants/weekDays';
import { EventOnlineType } from '../../../../constants/eventOnlineType';
import UploadImage from '../../../../components/UploadImage';
import CommunityTopicSelect from '../../../../components/util-components/selector/CommunityTopicSelect';
import CommunitySelect from '../../../../components/util-components/selector/CommunitySelect';
import TimezoneSelect from '../../../../components/util-components/selector/TimezoneSelect';
import UserSelect from '../../../../components/util-components/selector/UserSelect';

const { Option } = Select;
const { TextArea } = Input;

const CreateEvent = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [dateTime, setDateTime] = React.useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    customRepeatPeriod: {
      // date: ''
    },
  });
  const [isRepeat, setIsRepeat] = React.useState(null);
  const [isGlobal, setIsGlobal] = React.useState(null);
  const [published, setPublished] = React.useState(null);
  const [draft, setDraft] = React.useState(null);
  const [rsvp, setRsvp] = React.useState(null);
  const [repeatPeriod, setRepeatPeriod] = React.useState();
  const [endType, setEndType] = React.useState('date');
  const [eventType, setEventType] = React.useState('online');
  const [eventOnlineType, setEventOnlineType] = React.useState('meeting');
  const [social, setSocial] = React.useState(null);
  const { socialList } = useSelector((state) => state.social);

  React.useEffect(() => {
    dispatch(Actions.getAllSocial());
  }, [dispatch]);

  React.useEffect(() => {
    setSocial(socialList);
  }, [socialList]);

  const showDrawer = () => {
    form.resetFields();
    setDateTime({
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      customRepeatPeriod: {},
    });
    setIsGlobal(false);
    setPublished(true);
    setDraft(false);
    setIsRepeat(false);
    setRepeatPeriod(null);
    setEventType('online');
    setEventOnlineType('meeting');
    setRsvp(false);
    setEndType('date');
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleDraft = (e) => {
    setDraft(e.target.checked);
  };

  const createEvent = (values) => {
    let data = {
      ...values,
      ...dateTime,
      customRepeatPeriod: {
        ...values.customRepeatPeriod,
        ...dateTime.customRepeatPeriod,
        repeatEndType: endType,
      },
      eventType,
      isGlobal,
      published,
      draft,
    };
    if (values.startDate == null) {
      data = { ...data, startDate: null };
    }
    if (values.startTime == null) {
      data = { ...data, startTime: null };
    }
    if (values.endDate == null) {
      data = { ...data, endDate: null };
    }
    if (values.endTime == null) {
      data = { ...data, endTime: null };
    }
    if (data.schedules) {
      let schedules = [...data.schedules];
      schedules = schedules.map((s) => {
        return { ...s, time: s.time.format('HH:mm:ss') };
      });
      delete data.schedules;
      data = { ...data, schedules: [...schedules] };
    }
    console.log(data);
    dispatch(Actions.createEvent(data));
    onClose();
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Create New Event
      </Button>
      <Drawer
        title="Create a New Event"
        width={1024}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 10 }}
      >
        <Form
          name="eventForm"
          onFinish={createEvent}
          form={form}
          className="p-4 mt-4"
          initialValues={{
            isGlobal,
            published,
            draft,
            isRepeat,
            rsvp,
            restrictEventLink: false,
            closeRsvps: false,
            eventType,
            repeatEndType: endType,
            onlineType: eventOnlineType,
            customRepeatPeriod: { repeatEndType: 'date' },
          }}
        >
          <>
            <Row>
              <Col span={12}>
                <h2>Create Event</h2>
              </Col>
              <Col span={12}>
                <Form.Item style={{ textAlign: 'right' }}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12} className="d-flex">
                <Form.Item
                  name="isGlobal"
                  label={<b>Global</b>}
                  colon={false}
                  valuePropName="checked"
                  className="mr-4"
                >
                  <Switch
                    onChange={(v) => {
                      setIsGlobal(v);
                      form.setFieldsValue({ communityId: null });
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="published"
                  label={<b>Published</b>}
                  colon={false}
                  valuePropName="checked"
                  className="ml-4"
                >
                  <Switch
                    onChange={(v) => {
                      setPublished(v);
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={12} className="text-right">
                <FormGroup check>
                  <Label check>
                    <RInput type="checkbox" onChange={handleDraft} />
                    As Draft
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <p>Post to event in</p>
            <Row>
              <Col lg={11} md={11} sm={11}>
                <Form.Item
                  name="communityId"
                  rules={
                    !isGlobal
                      ? [{ required: true, message: 'Please select!' }]
                      : []
                  }
                >
                  <CommunitySelect
                    allowClear
                    disabled={isGlobal}
                    placeholder="Community"
                    onChange={() => {
                      form.setFieldsValue({ topicId: null });
                    }}
                  />
                </Form.Item>
              </Col>
              <Col lg={2} md={2} sm={2} />
              <Col lg={11} md={11} sm={11}>
                <Form.Item name="topicId">
                  <CommunityTopicSelect
                    communityId={form.getFieldValue('communityId')}
                    placeholder="Topic"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={11} md={11}>
                <p className="mb-2 mt-4 fw-6">Event title</p>
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: 'Please input event title!' },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Add a title"
                    onChange={(v) =>
                      form.setFieldsValue({
                        slug: `${slugify(v.target.value)}-${getRandomInt(
                          100000,
                          999999
                        )}`,
                      })
                    }
                  />
                </Form.Item>
              </Col>
              <Col lg={2} md={2} />
              <Col lg={11} md={11}>
                <p className="mb-2 mt-4 fw-6">Event slug</p>
                <Form.Item name="slug">
                  <Input type="text" disabled placeholder="event slug" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24}>
                <p>Timezone</p>
              </Col>
              <Col lg={24}>
                <Form.Item
                  name="timezone"
                  rules={
                    !draft
                      ? [{ required: true, message: 'Please set timezone!' }]
                      : []
                  }
                >
                  <TimezoneSelect />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={11} md={11} sm={11}>
                <p>Start</p>
                <Row>
                  <Col lg={12} md={12}>
                    <Form.Item
                      name="startDate"
                      rules={
                        !draft
                          ? [
                              {
                                required: true,
                                message: 'Please set start date!',
                              },
                            ]
                          : []
                      }
                    >
                      <DatePicker
                        style={{ width: '100%' }}
                        onChange={(date, ds) =>
                          setDateTime({ ...dateTime, startDate: ds })
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={2} md={2} />
                  <Col lg={10} md={10}>
                    <Form.Item
                      name="startTime"
                      rules={
                        !draft
                          ? [
                              {
                                required: true,
                                message: 'Please set start time!',
                              },
                            ]
                          : []
                      }
                    >
                      <TimePicker
                        style={{ width: '100%' }}
                        onChange={(time, ts) =>
                          setDateTime({ ...dateTime, startTime: ts })
                        }
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={2} sm={2} />
              <Col lg={11} md={11} sm={11}>
                <p>End</p>
                <Row>
                  <Col lg={12} md={12}>
                    <Form.Item
                      name="endDate"
                      rules={
                        !draft
                          ? [
                              {
                                required: true,
                                message: 'Please set end date!',
                              },
                            ]
                          : []
                      }
                    >
                      <DatePicker
                        style={{ width: '100%' }}
                        onChange={(date, ds) =>
                          setDateTime({ ...dateTime, endDate: ds })
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={2} md={2} />
                  <Col lg={10} md={10}>
                    <Form.Item
                      name="endTime"
                      rules={
                        !draft
                          ? [
                              {
                                required: true,
                                message: 'Please set end time!',
                              },
                            ]
                          : []
                      }
                    >
                      <TimePicker
                        style={{ width: '100%' }}
                        onChange={(time, ts) =>
                          setDateTime({ ...dateTime, endTime: ts })
                        }
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="mt-4">
              <Form.Item
                name="isRepeat"
                label={<b>Repeat Event</b>}
                colon={false}
                valuePropName="checked"
              >
                <Switch onChange={(v) => setIsRepeat(v)} />
              </Form.Item>
            </div>
            {isRepeat ? (
              <div className="bg-hbx-sixth p-3 mt-4 br-1">
                <p className="mb-2 fw-6">Repeat period</p>
                <Form.Item
                  name="repeatPeriod"
                  rules={
                    !draft
                      ? [
                          {
                            required: true,
                            message: 'Please select repeat period!',
                          },
                        ]
                      : []
                  }
                >
                  <Select
                    onChange={(v) => setRepeatPeriod(v)}
                    style={{ width: '100%' }}
                  >
                    {EventRepeatPeriod.map((item) => {
                      return (
                        <Option key={item.value} value={item.value}>
                          {item.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                {repeatPeriod === 'custom' && (
                  <>
                    <p className="mb-2 mt-4 fw-6">Occurs Every</p>
                    <Row>
                      <Col lg={11} md={11} sm={11}>
                        <Form.Item
                          name={['customRepeatPeriod', 'number']}
                          rules={
                            !draft
                              ? [{ required: true, message: 'Please enter!' }]
                              : []
                          }
                        >
                          <Input type="number" />
                        </Form.Item>
                      </Col>
                      <Col lg={2} md={2} sm={2} />
                      <Col lg={11} md={11} sm={11}>
                        <Form.Item
                          name={['customRepeatPeriod', 'unit']}
                          rules={
                            !draft
                              ? [{ required: true, message: 'Please select!' }]
                              : []
                          }
                        >
                          <Select style={{ width: '100%' }}>
                            {EventRepeatPeriodCustomUnit.map((item) => (
                              <Option key={item.value} value={item.value}>
                                {item.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <p className="mb-2 mt-4 fw-6">Repeat On</p>
                    <Form.Item
                      name={['customRepeatPeriod', 'weekDays']}
                      rules={
                        !draft
                          ? [{ required: true, message: 'Please select!' }]
                          : []
                      }
                    >
                      <Select
                        mode="multiple"
                        placeholder="Please select"
                        style={{ width: '100%' }}
                      >
                        {WeekDays.map((item) => (
                          <Option key={item.shortName} value={item.shortName}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <p className="mb-2 mt-4 fw-6">Repeat Ends</p>
                    <Space>
                      <FormGroup check>
                        <Label check>
                          <RInput
                            type="radio"
                            name="endType"
                            value="date"
                            defaultChecked={endType === 'date'}
                            onChange={(e) => setEndType(e.target.value)}
                          />
                          On Date
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <RInput
                            type="radio"
                            name="endType"
                            value="after"
                            defaultChecked={endType === 'after'}
                            onChange={(e) => setEndType(e.target.value)}
                          />
                          After
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <RInput
                            type="radio"
                            name="endType"
                            value="never"
                            defaultChecked={endType === 'never'}
                            onChange={(e) => setEndType(e.target.value)}
                          />
                          Never
                        </Label>
                      </FormGroup>
                    </Space>
                    <div className="mt-2">
                      {endType === 'date' && (
                        <Form.Item
                          name={['customRepeatPeriod', 'date']}
                          rules={
                            !draft
                              ? [
                                  {
                                    required: true,
                                    message: 'Please enter the date!',
                                  },
                                ]
                              : []
                          }
                        >
                          <DatePicker
                            onChange={(date, ds) =>
                              setDateTime({
                                ...dateTime,
                                customRepeatPeriod: { date: ds },
                              })
                            }
                          />
                        </Form.Item>
                      )}
                      {endType === 'after' && (
                        <Space align="center">
                          <Form.Item
                            name={['customRepeatPeriod', 'occurences']}
                            label={<b>Occurrences</b>}
                            colon={false}
                            rules={
                              !draft
                                ? [
                                    {
                                      required: true,
                                      message:
                                        'Please enter the number of the occurences!Please select!',
                                    },
                                  ]
                                : []
                            }
                          >
                            <Input type="number" />
                          </Form.Item>
                        </Space>
                      )}
                      {endType === 'never' && (
                        <p>
                          All instances of the event will be visible in the
                          calendar view, but a maximum of 32 at a time will
                          display on the Events list.
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ) : (
              ''
            )}
            <Row>
              <Col lg={12} md={12} sm={12}>
                <p className="mb-2 mt-4 fw-6">Event type</p>
              </Col>
              <Col className="text-right" lg={12} md={12} sm={12}>
                <Space>
                  <FormGroup check>
                    <Label check>
                      <RInput
                        type="radio"
                        name="eventType"
                        value="online"
                        defaultChecked={eventType === 'online'}
                        onChange={(e) => setEventType(e.target.value)}
                      />
                      Online
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <RInput
                        type="radio"
                        name="eventType"
                        value="local"
                        defaultChecked={eventType === 'local'}
                        onChange={(e) => setEventType(e.target.value)}
                      />
                      Local
                    </Label>
                  </FormGroup>
                </Space>
              </Col>
            </Row>
            <div>
              {eventType === 'online' && (
                <>
                  <Form.Item
                    name="onlineType"
                    rules={
                      !draft
                        ? [{ required: true, message: 'Please select!' }]
                        : []
                    }
                  >
                    <Select
                      placeholder="Please select"
                      onChange={(e) => setEventOnlineType(e)}
                      style={{ width: '100%' }}
                    >
                      {EventOnlineType.map((item) => {
                        if (item.value === 'zoom') {
                          return (
                            <Option
                              disabled
                              key={item.value}
                              value={item.value}
                            >
                              {item.label}
                            </Option>
                          );
                        }
                        return (
                          <Option key={item.value} value={item.value}>
                            {item.label}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <div className="bg-hbx-sixth p-3 mt-4 br-1">
                    {eventOnlineType === 'zoom' && (
                      <>
                        <p className="mb-2 text-center fs-4 fw-6">Zoom</p>
                        <p className="fw-5 fs-2 text-center">
                          Sign into your Zoom account to start creating Zoom
                          meetings and webinars right here in Topper.
                        </p>
                        <div className="w-100 text-center">
                          <Button type="hbs-primary" shape="round">
                            Sign in
                          </Button>
                          <span> - or - </span>
                          <Button type="hbs-outline-primary" shape="round">
                            Create an account
                          </Button>
                        </div>
                      </>
                    )}
                    {eventOnlineType === 'meeting' && (
                      <>
                        <p className="mb-2 fw-6">Link to your Meeting</p>
                        <Form.Item
                          name="onlineUrl"
                          rules={
                            !draft
                              ? [
                                  {
                                    required: true,
                                    message:
                                      'Please enter the link for the meeting!',
                                  },
                                ]
                              : []
                          }
                        >
                          <Input
                            type="text"
                            placeholder="e.g. https://gotomeeting.com/join/yourmeeting"
                          />
                        </Form.Item>
                        <p className="mt-2">
                          Host an Online Meeting by directing members to a link
                          of your choice. Simply copy the meeting URL and add it
                          here. Some of our favorite services are GoToMeeting,
                          Join.me, or Google Meet. If you prefer <b>Zoom</b>, we
                          recommend using the Zoom Event Type.
                        </p>
                      </>
                    )}
                    {eventOnlineType === 'webinar' && (
                      <>
                        <p className="mb-2 fw-6">Link to your Webinar</p>
                        <Form.Item
                          name="onlineUrl"
                          rules={
                            !draft
                              ? [
                                  {
                                    required: true,
                                    message: 'Please the link for the webinar!',
                                  },
                                ]
                              : []
                          }
                        >
                          <Input
                            type="text"
                            placeholder="e.g. https://www.crowdcast.io/yourwebinar"
                          />
                        </Form.Item>
                        <p className="mt-2">
                          Host a Webinar by directing members to a link of your
                          choice. Simply copy the webinar URL and add it here.
                          Some of our favorite services are Crowdcast,
                          WebinarNinja, GoToWebinar, or Zoho Meeting. If you
                          prefer <b>Zoom</b>, we recommend using the Zoom Event
                          Type.
                        </p>
                      </>
                    )}
                    {eventOnlineType === 'live_video' && (
                      <>
                        <p className="mb-2 fw-6">Link to your Live Video</p>
                        <Form.Item
                          name="onlineUrl"
                          rules={
                            !draft
                              ? [
                                  {
                                    required: true,
                                    message: 'Please enter the link for video!',
                                  },
                                ]
                              : []
                          }
                        >
                          <Input
                            type="text"
                            placeholder="e.g. https://www.youtube.com/watchyourvideo"
                          />
                        </Form.Item>
                        <p className="mt-2">
                          Host a Live Video Event by directing members to an
                          external streaming service of your choice. Simply copy
                          the video URL and add it here. Some of our favorites
                          are Crowdcast, Vimeo Livestream, or YouTube Live. If
                          you prefer <b>Zoom</b>, we recommend using the Zoom
                          Event Type.
                        </p>
                      </>
                    )}
                    {eventOnlineType === 'text_chat' && (
                      <>
                        <p className="mt-2">
                          Host a Text Chat Event for all members of Topper. When
                          it’s time for the event to start, members can click on
                          a link that will open up All Member Chat. Note that if
                          you have All Member Chat turned off by default in
                          Topper, you’ll need to enable this feature before the
                          event begins.
                        </p>
                      </>
                    )}
                  </div>
                </>
              )}
              {eventType === 'local' && (
                <div className="bg-hbx-sixth p-3 mt-4 br-1">
                  <p className="mb-2 fw-6">Location</p>
                  <Form.Item
                    name={['localContent', 'location', 'name']}
                    fieldKey={['name']}
                    rules={
                      !draft
                        ? [
                            {
                              required: true,
                              message: 'Please enter the location name!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input type="text" placeholder="Venue Name" />
                  </Form.Item>
                  <Form.Item
                    name={['localContent', 'location', 'streetAddress']}
                    fieldKey={['streetAddress']}
                    rules={
                      !draft
                        ? [
                            {
                              required: true,
                              message: 'Please enter the street address!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input type="text" placeholder="Street Address" />
                  </Form.Item>
                  <Form.Item
                    name={['localContent', 'location', 'city']}
                    fieldKey={['city']}
                    rules={
                      !draft
                        ? [
                            {
                              required: true,
                              message: 'Please enter the city name!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input type="text" placeholder="City, State, Zip Code" />
                  </Form.Item>
                  <p className="mb-2 fw-6 mt-2">Map URL</p>
                  <Form.Item
                    name="mapUrl"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter correct google map embed url!',
                      },
                      () => ({
                        validator(rule, value) {
                          if (
                            !value ||
                            value.substring(0, 7) === 'http://' ||
                            value.substring(0, 8) === 'https://'
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            'Please enter correct google map embed url!'
                          );
                        },
                      }),
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2734156489837!2d-58.38093673499132!3d-34.597247080461194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac9e5cc7a0b%3A0x2337010eb60c8711!2sWeWork!5e0!3m2!1sen!2sus!4v1568724078170!5m2!1sen!2sus"
                    />
                  </Form.Item>
                  <p className="mb-2 fw-6 mt-2">Add an optional link</p>
                  <Form.Item name={['localContent', 'url']} fieldKey={['url']}>
                    <Input
                      type="text"
                      placeholder="e.g. https://www.eventbrite.com/events/163537"
                    />
                  </Form.Item>
                </div>
              )}
            </div>
            <div className="mt-4">
              <Form.Item
                name="rsvp"
                valuePropName="checked"
                rules={
                  !draft ? [{ required: true, message: 'Please select!' }] : []
                }
                label={<b>RSVPs</b>}
                colon={false}
              >
                <Switch onChange={(v) => setRsvp(v)} />
              </Form.Item>
            </div>
            {rsvp && (
              <div className="bg-hbx-sixth p-3 mt-4 br-1">
                <div className="mt-4">
                  <Form.Item
                    name="restrictEventLink"
                    valuePropName="checked"
                    rules={
                      !draft
                        ? [{ required: true, message: 'Please select!' }]
                        : []
                    }
                    label={<b>Restrict Event Link</b>}
                    colon={false}
                  >
                    <Switch />
                  </Form.Item>
                </div>
                <div className="mt-4">
                  <Form.Item
                    name="closeRsvps"
                    valuePropName="checked"
                    rules={
                      !draft
                        ? [{ required: true, message: 'Please select!' }]
                        : []
                    }
                    label={<b>Close RSVPs</b>}
                    colon={false}
                  >
                    <Switch />
                  </Form.Item>
                </div>
              </div>
            )}
            <Divider />
            <p className="fw-6 fc-3 fs-2">About Event</p>
            <p className="mb-2 mt-4 fw-6">Header Image or Video</p>
            <Form.Item name="headerImageUrl">
              <UploadImage aspect={2} />
            </Form.Item>
            <p className="mb-2 mt-4 fw-6">Description</p>
            <Form.Item
              name="description"
              rules={
                !draft
                  ? [{ required: true, message: 'Please enter description!' }]
                  : []
              }
            >
              <TextArea
                rows={3}
                type="text"
                placeholder="Please enter description"
              />
            </Form.Item>
            <p className="mb-2 mt-4 fw-6">Agenda</p>
            <Form.Item
              name="agenda"
              rules={
                !draft
                  ? [{ required: true, message: 'Please enter agenda!' }]
                  : []
              }
            >
              <TextArea
                rows={3}
                type="text"
                placeholder="Please enter agenda"
              />
            </Form.Item>
            <Form.Item
              name="createdBy"
              rules={
                !draft ? [{ required: true, message: 'Please select!' }] : []
              }
            >
              <UserSelect />
            </Form.Item>
            <Form.List name="speakers">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <React.Fragment key={field.key}>
                      <Row>
                        <Col md={11}>
                          <p className="mb-2 mt-4 fw-6">Name</p>
                          <Form.Item
                            {...field}
                            name={[field.name, 'name']}
                            fieldKey={[field.fieldKey, 'name']}
                            rules={
                              !draft
                                ? [
                                    {
                                      required: true,
                                      message: 'Name is required!',
                                    },
                                  ]
                                : []
                            }
                          >
                            <Input type="text" placeholder="Name" />
                          </Form.Item>
                        </Col>
                        <Col lg={2} md={2} sm={2} />
                        <Col md={11}>
                          <p className="mb-2 mt-4 fw-6">Position</p>
                          <Form.Item
                            {...field}
                            name={[field.name, 'position']}
                            fieldKey={[field.fieldKey, 'position']}
                            rules={
                              !draft
                                ? [
                                    {
                                      required: true,
                                      message: 'Position is required!',
                                    },
                                  ]
                                : []
                            }
                          >
                            <Input type="text" placeholder="position" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={11}>
                          <p className="mb-2 mt-4 fw-6">Bio</p>
                          <Form.Item
                            {...field}
                            name={[field.name, 'bio']}
                            fieldKey={[field.fieldKey, 'bio']}
                          >
                            <TextArea placeholder="bio" />
                          </Form.Item>
                        </Col>
                        <Col lg={2} md={2} sm={2} />
                        <Col md={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, 'imageUrl']}
                            fieldKey={[field.fieldKey, 'imageUrl']}
                          >
                            <UploadImage />
                          </Form.Item>
                        </Col>
                      </Row>
                      <div className="text-right mb-3">
                        <Button danger onClick={() => remove(field.name)}>
                          Remove
                        </Button>
                      </div>
                    </React.Fragment>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Speaker
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.List name="schedules">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <React.Fragment key={field.key}>
                      <Row>
                        <Col md={11}>
                          <p className="mb-2 mt-4 fw-6">Time</p>
                          <Form.Item
                            {...field}
                            name={[field.name, 'time']}
                            fieldKey={[field.fieldKey, 'time']}
                            rules={
                              !draft
                                ? [
                                    {
                                      required: true,
                                      message: 'Name is required!',
                                    },
                                  ]
                                : []
                            }
                          >
                            <TimePicker style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col lg={2} md={2} sm={2} />
                        <Col md={11}>
                          <p className="mb-2 mt-4 fw-6">Description</p>
                          <Form.Item
                            {...field}
                            name={[field.name, 'description']}
                            fieldKey={[field.fieldKey, 'description']}
                          >
                            <TextArea placeholder="description" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <div className="text-right mb-3">
                        <Button danger onClick={() => remove(field.name)}>
                          Remove
                        </Button>
                      </div>
                    </React.Fragment>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Schedule
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <h1 style={{ fontSize: '17px' }}>Social Link</h1>
            {social?.length > 0 &&
              social.map((item) => {
                return (
                  <Form.Item key={item.id} name={['social', `${item.id}`]}>
                    <Input placeholder={`${item.name} link.`} />
                  </Form.Item>
                );
              })}
            <Row style={{ flexDirection: 'row-reverse' }}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Row>
          </>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateEvent;
