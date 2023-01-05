/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import {
  Select,
  Form,
  Switch,
  Slider,
  Row,
  Col,
  Input,
  DatePicker,
} from 'antd';
import { FormGroup, Input as RCB, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as Actions from '../../../../../redux/actions';
import UploadImage from '../../../../../components/UploadImage';
import { ThemeColors } from '../../../../../helpers/ThemeColors';
import { getRandomInt, slugify } from '../../../../../helpers/Utils';

const { Option } = Select;
const { RangePicker } = DatePicker;

const ContestConfirm = (props) => {
  const dispatch = useDispatch();
  const [contestType, setContestType] = useState(null);
  const [industryItems, setIndustryItems] = useState(null);
  const [innovationItems, setInnovationItems] = useState(null);
  const [techItems, setTechItems] = useState(null);
  const [countryItems, setCountryItems] = useState(null);
  const [socialItems, setSocialItems] = useState(null);
  const [someDesignerDisable, setSomeDesignerDisable] = useState();
  const [isGlobal, setIsGlobal] = useState(
    // eslint-disable-next-line react/destructuring-assignment
    props.form.getFieldsValue(true).isGlobal
  );
  // const { contestTypeList } = useSelector((state) => state.contestList);
  // const { productList } = useSelector((state) => state.contestList);
  // const { innovationList } = useSelector((state) => state.contestList);
  const { countryList } = useSelector((state) => state.contestList);
  const { socialList } = useSelector((state) => state.social);
  useEffect(() => {
    dispatch(Actions.getAllContestCountry());
    dispatch(Actions.getAllSocial());
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setContestType(props.contestType);
    // eslint-disable-next-line react/destructuring-assignment
    setIndustryItems(props.industryItems);
    // eslint-disable-next-line react/destructuring-assignment
    setInnovationItems(props.innovationItems);
    // eslint-disable-next-line react/destructuring-assignment
    setTechItems(props.techItems);
    setCountryItems(countryList);
    setSocialItems(socialList);
  }, [props, countryList, socialList]);

  const handleCheck = (e) => {
    setSomeDesignerDisable(e.target.checked);
    // eslint-disable-next-line react/destructuring-assignment
    props.form.setFieldsValue({
      allnbContestant: e.target.checked,
      nbContestant: 0,
    });
  };
  return (
    <>
      <p className="mb-2 mt-3">
        <b>Title</b>
      </p>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input the contest title!',
          },
        ]}
      >
        <Input
          onChange={(e) =>
            // eslint-disable-next-line react/destructuring-assignment
            props.form.setFieldsValue({
              slug: `${slugify(e.target.value)}-${getRandomInt(
                100000,
                999999
              )}`,
            })
          }
        />
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>Slug</b>
      </p>
      <Form.Item name="slug">
        <Input disabled />
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>Contest Type</b>
      </p>
      <Form.Item
        name="contestTypeId"
        rules={[
          {
            required: true,
            message: 'Please input the contest type!',
          },
        ]}
      >
        <Select>
          {contestType &&
            contestType.map((product) => {
              return (
                <Option key={product.id} value={product.id}>
                  {product.name}
                </Option>
              );
            })}
        </Select>
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>Industry</b>
      </p>
      <Form.Item
        name="productId"
        rules={[
          {
            required: true,
            message: 'Please input the contest industry!',
          },
        ]}
      >
        <Select mode="multiple" allowClear placeholder="Please select">
          {industryItems &&
            industryItems.map((product) => (
              <Option key={product.id} value={product.id}>
                {product.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>Innovations</b>
      </p>
      <Form.Item
        name="innovationId"
        rules={[
          {
            required: true,
            message: 'Please input the contest innovation!',
          },
        ]}
      >
        <Select mode="multiple" allowClear placeholder="Please select">
          {innovationItems &&
            innovationItems.map((product) => (
              <Option key={product.id} value={product.id}>
                {product.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>Tech</b>
      </p>
      <Form.Item
        name="techId"
        rules={[
          {
            required: true,
            message: 'Please input the contest tech!',
          },
        ]}
      >
        <Select mode="multiple" allowClear placeholder="Please select">
          {techItems &&
            techItems.map((product) => (
              <Option key={product.id} value={product.id}>
                {product.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="isGlobal"
        label={<b>Global/Local</b>}
        valuePropName="checked"
      >
        <Switch onChange={(e) => setIsGlobal(e)} />
      </Form.Item>
      {isGlobal ? (
        <Form.Item
          name="countryId"
          rules={[
            {
              required: true,
              message: 'Please input the area or country!',
            },
          ]}
        >
          <Select
            showSearch
            mode="multiple"
            allowClear
            placeholder="Please select"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countryItems &&
              countryItems.map((country) => (
                <Option key={country.id} value={country.id}>
                  {country.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
      ) : (
        ''
      )}
      <p className="mb-2 mt-3 fw-6">
        <b>
          How many designers would you like to participate in your product
          competition?
        </b>
      </p>
      <Row>
        <Col sm={12} md={15} lg={18} className="pr-3">
          <Form.Item
            name="nbContestant"
            rules={[
              {
                required: !someDesignerDisable,
                message: 'Please input the Designers!',
              },
            ]}
          >
            <Slider
              defaultValue={0}
              min={0}
              max={50}
              trackStyle={{ backgroundColor: ThemeColors().themeColor1 }}
              handleStyle={{ borderColor: ThemeColors().themeColor1 }}
              disabled={someDesignerDisable}
            />
          </Form.Item>
        </Col>
        <Col sm={12} md={9} lg={6} className="pl-3">
          <FormGroup check>
            <Label check>
              <RCB type="checkbox" onChange={handleCheck} />
              Everyone can participate
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <p className="mb-2 mt-3 fw-6">
        <b>Experience and talents of designers</b>
      </p>
      <Row>
        <Col className="pt-1">
          <span>Minimum</span>
        </Col>
        <Col sm={2} className="px-2">
          <Form.Item
            name="minPoints"
            rules={[
              {
                required: true,
                message: 'required',
              },
            ]}
          >
            <Input type="number" min={0} />
          </Form.Item>
        </Col>
        <Col className="pt-1">
          <span>points in the Hubbers product competion</span>
        </Col>
      </Row>
      <p className="mb-2 mt-3 fw-6">
        <b>How many judges will participate from your side?</b>
      </p>
      <Form.Item
        name="nbJudge"
        rules={[
          {
            required: true,
            message: 'Please input the judges!',
          },
        ]}
      >
        <Slider
          defaultValue={5}
          min={5}
          max={50}
          trackStyle={{ backgroundColor: ThemeColors().themeColor1 }}
          handleStyle={{ borderColor: ThemeColors().themeColor1 }}
        />
      </Form.Item>
      <Form.Item
        name="extraNbJudge"
        label={
          <span>
            <b>Number of extra judge needed</b>
          </span>
        }
      >
        <Input type="number" min={0} />
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>
          How many revisions do you want to allow designers to provide (up to
          3).
        </b>
      </p>
      <Form.Item
        name="nbRevision"
        rules={[
          {
            required: true,
            message: 'Please input the revisions!',
          },
        ]}
      >
        <Slider
          defaultValue={0}
          min={0}
          max={3}
          trackStyle={{ backgroundColor: ThemeColors().themeColor1 }}
          handleStyle={{ borderColor: ThemeColors().themeColor1 }}
        />
      </Form.Item>
      <p className="mt-3 mb-2 fw-6">
        <b>Image of your Contest</b>
      </p>
      <Form.Item
        name="featuredImageUrl"
        rules={[
          {
            required: true,
            message: 'Please upload the image!',
          },
        ]}
      >
        <UploadImage />
      </Form.Item>
      <p className="mt-2 mb-3 fw-6">
        <b>Start and End Date</b>
      </p>
      <Form.Item
        name="date"
        rules={[
          {
            required: true,
            message: 'Please input the date',
          },
        ]}
      >
        <RangePicker
          showTime
          style={{ width: '100%' }}
          // defaultValue={
          //   props.form.getFieldsValue(true).startTime && [
          //     moment(
          //       props.form.getFieldsValue(true).startTime,
          //       'YYYY-MM-DD HH:mm:ss'
          //     ),
          //     moment(
          //       props.form.getFieldsValue(true).endTime,
          //       'YYYY-MM-DD HH:mm:ss'
          //     ),
          //   ]
          // }
          defaultValue={
            // eslint-disable-next-line react/destructuring-assignment
            props.form.getFieldsValue(true).startTime && [
              moment(
                // eslint-disable-next-line react/destructuring-assignment
                props.form.getFieldsValue(true).startTime,
                'YYYY-MM-DD HH:mm:ss'
              ),
              moment(
                // eslint-disable-next-line react/destructuring-assignment
                props.form.getFieldsValue(true).endTime,
                'YYYY-MM-DD HH:mm:ss'
              ),
            ]
          }
          onChange={(ds) => {
            const duration = ds[1].diff(ds[0], 'days');
            // eslint-disable-next-line react/destructuring-assignment
            props.form.setFieldsValue({
              startTime: ds[0].format(),
              endTime: ds[1].format(),
              duration,
            });
          }}
        />
      </Form.Item>
      <Form.Item name="startTime" hidden>
        <Input />
      </Form.Item>
      <Form.Item name="endTime" hidden>
        <Input />
      </Form.Item>
      <Form.Item name="duration" hidden>
        <Input />
      </Form.Item>
      <p className="mt-2 mb-3 fw-6">
        <b>Social Link</b>
      </p>
      {socialItems?.length > 0 &&
        socialItems.map((item) => {
          return (
            <Form.Item key={item.id} name={['social', `${item.id}`]}>
              <Input placeholder={`${item.name} link.`} />
            </Form.Item>
          );
        })}
    </>
  );
};

export default ContestConfirm;
