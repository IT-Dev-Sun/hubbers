/* eslint-disable consistent-return */
/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Space, Table, Popconfirm, Button, Select, Image } from 'antd';
import {
  DeleteOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import * as Actions from '../../../../redux/actions';
import CreateBasicType from './create';
import EditBasicType from './edit';

const { Option } = Select;

const BasicTypeList = () => {
  const dispatch = useDispatch();
  const [basicTypeList, setBasicTypeList] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  const [parentList, setParentList] = useState(null);
  const [parentName, setParentName] = useState(null);
  const [includeImage, setIncludeImage] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [orderFlag, setOrderFlag] = useState(false);
  const [tableColumns, setTableColumns] = useState(null);
  const { list } = useSelector((state) => state.basicType);
  const { parentlist } = useSelector((state) => state.basicType);
  const { typeList } = useSelector((state) => state.basicTypeCategory);
  const [pagination, setPagenation] = React.useState({
    current: 1,
    pageSize: 5,
  });

  useEffect(() => {
    if (currentCategoryId) {
      dispatch(Actions.getAllBasicType(currentCategoryId));
    }
  }, [currentCategoryId, dispatch]);

  useEffect(() => {
    dispatch(Actions.getAllBasicTypeCategory());
  }, [dispatch]);

  useEffect(() => {
    setCategoryList(typeList);
  }, [typeList]);

  useEffect(() => {
    setParentList(parentlist);
  }, [parentlist]);

  useEffect(() => {
    if (categoryList?.length > 0) {
      setCurrentCategoryId(categoryList[0].id);
      setIncludeImage(categoryList[0].includeImage);
      if (categoryList[0].parentCategoryId) {
        dispatch(Actions.getParentBasicType(categoryList[0].parentCategoryId));
      }
      // setParentName(categoryList[0].parent?.displayName);
    }
  }, [categoryList, dispatch]);

  useEffect(() => {
    if (list && list.length) {
      setBasicTypeList(list);
    }
  }, [list]);

  useEffect(() => {
    if (basicTypeList?.length > 0 && orderFlag === false) {
      // setCurrentCategoryId(basicTypeList[0].categoryId);
    } else {
      setOrderFlag(false);
    }
  }, [basicTypeList, orderFlag]);

  const deleteBasicType = (id) => {
    if (id && currentCategoryId) {
      dispatch(Actions.deleteBasicType({ id, currentCategoryId }));
    }
  };

  const handleCategory = (value) => {
    const selectItem = categoryList.filter((item) => item.id === value)[0];
    setCurrentCategoryId(value);
    setIncludeImage(selectItem.includeImage);
    setParentName(selectItem.parent?.displayName);
    if (selectItem.parentCategoryId) {
      dispatch(Actions.getParentBasicType(selectItem.parentCategoryId));
    } else {
      dispatch(Actions.getParentBasicType(0));
    }
  };

  const handleOrder = (id, flag) => {
    if (id && flag && currentCategoryId) {
      dispatch(Actions.orderBasicType({ id, flag, currentCategoryId }));
    }
  };
  useEffect(() => {
    const col = [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Image',
        dataIndex: 'image',
        render: (_, elm) => {
          if (elm.featuredImg) {
            return (
              <Image
                width={70}
                height={70}
                preview={false}
                src={elm.featuredImg}
              />
            );
          }
        },
      },
      {
        title: ' Name',
        dataIndex: 'name',
      },
      {
        title: `${parentName ?? 'Parent'}`,
        dataIndex: 'parentId',
        render: (_, elm) => {
          const n = parentList.filter((item) => item.id === elm.parentId)[0]
            ?.name;
          return <span>{elm.parentId && n}</span>;
        },
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        render: (_, elm) => {
          return (
            <Space>
              <EditBasicType
                id={elm.id}
                includeImage={includeImage}
                data={basicTypeList ?? []}
                category={categoryList ?? []}
                parentList={parentList ?? []}
              />
              <Popconfirm
                title="Are you sure delete this Item?"
                onConfirm={() => deleteBasicType(elm.id)}
                onCancel={() => console.log('Canceled to delete')}
                okText="Yes"
                cancelText="No"
              >
                <Button danger icon={<DeleteOutlined />} size="small" />
              </Popconfirm>
              <Button
                size="small"
                type="default"
                icon={<ArrowUpOutlined />}
                onClick={() => handleOrder(elm.id, 'true')}
              />
              <Button
                size="small"
                type="default"
                icon={<ArrowDownOutlined />}
                onClick={() => handleOrder(elm.id, 'false')}
              />
            </Space>
          );
        },
      },
    ];
    let newCol = [...col];
    if (!includeImage) {
      newCol = newCol.filter((c) => c.title !== 'Image');
    }
    if (!parentName) {
      newCol = newCol.filter((c) => c.title !== 'Parent');
    }
    setTableColumns(newCol);
  }, [
    includeImage,
    parentName,
    parentlist,
    basicTypeList,
    categoryList,
    parentList,
    // deleteBasicType,
    // handleOrder,
  ]);
  const handleTableChange = (params) => {
    setPagenation(params.pagination);
  };
  return (
    <Card>
      <div className="d-flex mb-3" style={{ justifyContent: 'space-between' }}>
        <Select
          style={{ width: 200 }}
          onChange={handleCategory}
          placeholder="Type Category"
          value={currentCategoryId}
        >
          {categoryList?.map((item) => {
            return (
              <Option key={item.id} value={item.id}>
                {item.displayName}
              </Option>
            );
          })}
        </Select>
        <CreateBasicType
          categoryList={categoryList}
          currentCategoryId={currentCategoryId}
          includeImage={includeImage}
          parentList={parentList}
        />
      </div>
      <div className="table-responsive">
        <Table
          rowKey="id"
          columns={tableColumns ?? []}
          dataSource={basicTypeList}
          pagination={pagination}
          onChange={handleTableChange}
        />
      </div>
    </Card>
  );
};
export default BasicTypeList;
