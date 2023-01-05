import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, Button, Select, Drawer } from 'antd';
import { FormGroup, Label, Input as RCB } from 'reactstrap';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../../../redux/actions';
import CKEditor5 from '../../../../../components/util-components/CkEditor';

const { Option } = Select;

const ContestDescription = ({
  childrenVisible,
  onChildrenShow,
  onChildrenClose,
  form,
}) => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const { currencyList } = useSelector((state) => state.contestList);
  const { descriptionList } = useSelector((state) => state.contestList);
  const { officialList } = useSelector((state) => state.contestList);
  const { marketList } = useSelector((state) => state.contestList);
  useEffect(() => {
    dispatch(Actions.getAllCurrency());
    dispatch(Actions.getAllContestDescription('description'));
    dispatch(Actions.getAllContestOfficial('official'));
    dispatch(Actions.getAllContestMarket('market'));
  }, [dispatch]);

  useEffect(() => {
    setCurrency(currencyList);
  }, [currencyList]);
  const handleChange = (e) => {
    setValue('description');
    if (e.target.value * 1) {
      setDescription(descriptionList);
      onChildrenShow();
    } else {
      form.setFieldsValue({ description: '' });
    }
  };
  const handleOfficialChange = (e) => {
    setValue('officialRules');
    if (e.target.value * 1) {
      setDescription(officialList);
      onChildrenShow();
    } else {
      form.setFieldsValue({ officialRules: '' });
    }
  };
  const handleMarketChange = (e) => {
    setValue('marketRules');
    if (e.target.value * 1) {
      setDescription(marketList);
      onChildrenShow();
    } else {
      form.setFieldsValue({ marketRules: '' });
    }
  };
  const handleClick = (idx) => {
    console.log(description.data[idx]);
    form.setFieldsValue({ [value]: description.data[idx].description });
    onChildrenClose();
  };
  return (
    <>
      <Row justify="space-between" align="middle">
        <Col lg={10} md={12}>
          <p className="mb-2 mt-3 fw-6">
            <b>Description</b>
          </p>
        </Col>
        <Col lg={10} md={12}>
          <Row justify="space-between">
            <FormGroup check>
              <Label check>
                <RCB
                  type="radio"
                  name="description"
                  value={0}
                  onChange={handleChange}
                />
                Write yours
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <RCB
                  type="radio"
                  name="description"
                  value={1}
                  onChange={handleChange}
                />
                Use an existing template
              </Label>
            </FormGroup>
          </Row>
        </Col>
      </Row>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input the description',
          },
        ]}
      >
        <CKEditor5 />
      </Form.Item>
      <Drawer
        title="Templates"
        width={320}
        closable={false}
        onClose={onChildrenClose}
        visible={childrenVisible}
      >
        {description &&
          description.data &&
          description.data.map((val, index) => (
            <Button
              key={val.title}
              block
              type="dashed"
              className="mt-4"
              onClick={(e) => handleClick(index, e)}
            >
              {val.title}
            </Button>
          ))}
      </Drawer>
      <Row justify="space-between" align="middle">
        <Col lg={10} md={12}>
          <p className="mb-2 mt-3 fw-6">
            <b>Official Rules</b>
          </p>
        </Col>
        <Col lg={10} md={12}>
          <Row justify="space-between">
            <FormGroup check>
              <Label check>
                <RCB
                  type="radio"
                  name="officialRule"
                  value={0}
                  onChange={handleOfficialChange}
                />
                Write yours
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <RCB
                  type="radio"
                  name="officialRule"
                  value={1}
                  onChange={handleOfficialChange}
                />
                Use an existing template
              </Label>
            </FormGroup>
          </Row>
        </Col>
      </Row>
      <Form.Item
        name="officialRules"
        rules={[
          {
            required: true,
            message: 'Please input the officialRules',
          },
        ]}
      >
        <CKEditor5 />
      </Form.Item>
      <Row justify="space-between" align="middle">
        <Col lg={10} md={12}>
          <p className="mb-2 mt-3 fw-6">
            <b>Market Rules</b>
          </p>
        </Col>
        <Col lg={10} md={12}>
          <Row justify="space-between">
            <FormGroup check>
              <Label check>
                <RCB
                  type="radio"
                  name="marketRule"
                  value={0}
                  onChange={handleMarketChange}
                />
                Write yours
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <RCB
                  type="radio"
                  name="marketRule"
                  value={1}
                  onChange={handleMarketChange}
                />
                Use an existing template
              </Label>
            </FormGroup>
          </Row>
        </Col>
      </Row>
      <Form.Item
        name="marketRules"
        rules={[
          {
            required: true,
            message: 'Please input the marketRules',
          },
        ]}
      >
        <CKEditor5 />
      </Form.Item>
      <p className="mb-2 mt-3 fw-6">
        <b>Criterias</b>
      </p>
      <Form.List name="criterias">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <React.Fragment key={field.key}>
                <Row>
                  <Col md={11}>
                    <p className="mb-2 mt-4 fw-6">Title</p>
                    <Form.Item
                      {...field}
                      name={[field.name, 'title']}
                      fieldKey={[field.fieldKey, 'title']}
                      rules={[{ required: true, message: 'Title is required' }]}
                    >
                      <Input placeholder="criterias title" />
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
                      <CKEditor5 />
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
                Add Criteria
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <p className="mb-2 mt-3 fw-6">
        <b>Marks</b>
      </p>
      <Form.List name="prize">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <React.Fragment key={field.key}>
                <Row>
                  <Col md={24}>
                    <Row>
                      <Col md={4}>
                        <p className="mb-2 mt-4 fw-6">Name</p>
                        <Form.Item
                          {...field}
                          name={[field.name, 'name']}
                          fieldKey={[field.fieldKey, 'name']}
                          rules={[
                            { required: true, message: 'name is required' },
                          ]}
                        >
                          <Input placeholder="prize name" />
                        </Form.Item>
                      </Col>
                      <Col lg={1} md={1} sm={1} />
                      <Col md={4}>
                        <p className="mb-2 mt-4 fw-6">Standing</p>
                        <Form.Item
                          {...field}
                          name={[field.name, 'standing']}
                          fieldKey={[field.fieldKey, 'standing']}
                          rules={[
                            { required: true, message: 'standing is required' },
                          ]}
                        >
                          <Input type="number" placeholder="prize standing" />
                        </Form.Item>
                      </Col>
                      <Col lg={1} md={1} sm={1} />
                      <Col md={4}>
                        <p className="mb-2 mt-4 fw-6">Amount</p>
                        <Form.Item
                          {...field}
                          name={[field.name, 'prize']}
                          fieldKey={[field.fieldKey, 'prize']}
                          rules={[
                            { required: true, message: 'amount is required' },
                          ]}
                        >
                          <Input type="number" placeholder="prize amount" />
                        </Form.Item>
                      </Col>
                      <Col lg={1} md={1} sm={1} />
                      <Col md={4}>
                        <p className="mb-2 mt-4 fw-6">Currency</p>
                        <Form.Item
                          {...field}
                          name={[field.name, 'currencyId']}
                          fieldKey={[field.fieldKey, 'currencyId']}
                          rules={[
                            { required: true, message: 'currency is required' },
                          ]}
                        >
                          <Select>
                            {currency &&
                              currency.map((c) => {
                                return (
                                  <Option key={c.id} value={c.id}>
                                    {c.name}
                                  </Option>
                                );
                              })}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col lg={1} md={1} sm={1} />
                      <Col md={4}>
                        <p className="mb-2 mt-4 fw-6">Royalty</p>
                        <Form.Item
                          {...field}
                          name={[field.name, 'royalty']}
                          fieldKey={[field.fieldKey, 'royalty']}
                          rules={[
                            { required: true, message: 'royalty is required' },
                          ]}
                        >
                          <Input type="number" placeholder="prize royalty" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={24}>
                    <p className="mb-2 mt-4 fw-6">Description</p>
                    <Form.Item
                      {...field}
                      name={[field.name, 'description']}
                      fieldKey={[field.fieldKey, 'description']}
                    >
                      <CKEditor5 />
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
                Add Prize
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ContestDescription;
