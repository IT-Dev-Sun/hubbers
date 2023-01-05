import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Popconfirm, Image, Avatar, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import utils from '../../../../helpers/utils/index';
import * as Actions from '../../../../redux/actions';
import CreateProduct from './create';
import EditProduct from './edit';

const ProductList = () => {
  const dispatch = useDispatch();
  const [tableList, setTableList] = useState([]);
  const [categoryList, setCategoryList] = useState(null);
  const [productCategory, setProductCategory] = useState([]);
  const [innovationCategory, setInnovationCategory] = useState([]);
  const [techCategory, setTechCategory] = useState([]);
  const [productCategoryId, setProductCategoryId] = useState(null);
  const [techCategoryId, setTechCategoryId] = useState(null);
  const [innovationCategoryId, setInnovationCategoryId] = useState(null);
  const { productList } = useSelector((state) => state.allProducts);
  const { typeList } = useSelector((state) => state.basicTypeCategory);
  const { list } = useSelector((state) => state.basicType);

  useEffect(() => {
    dispatch(Actions.getAllBasicTypeCategory());
    dispatch(Actions.getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    if (typeList) {
      setCategoryList(typeList);
    }
  }, [typeList]);

  useEffect(() => {
    if (categoryList) {
      const productType = categoryList.filter(
        (item) => item.name === 'product'
      );
      if (productType.length > 0) {
        setProductCategoryId(productType[0].id);
        dispatch(Actions.getAllBasicType(productType[0].id));
      }
      const techType = categoryList.filter((item) => item.name === 'tech');
      if (techType.length > 0) {
        setTechCategoryId(techType[0].id);
        dispatch(Actions.getAllBasicType(techType[0].id));
      }
      const innovationType = categoryList.filter(
        (item) => item.name === 'innovation'
      );
      if (innovationType.length > 0) {
        setInnovationCategoryId(innovationType[0].id);
        dispatch(Actions.getAllBasicType(innovationType[0].id));
      }
    }
  }, [categoryList, dispatch]);

  useEffect(() => {
    if (list[0]?.categoryId === productCategoryId) {
      setProductCategory(list);
    }
    if (list[0]?.categoryId === innovationCategoryId) {
      setInnovationCategory(list);
    }
    if (list[0]?.categoryId === techCategoryId) {
      setTechCategory(list);
    }
  }, [innovationCategoryId, list, productCategoryId, techCategoryId]);

  useEffect(() => {
    if (productList) {
      setTableList(productList);
    }
  }, [productList]);

  const handleDelete = (id) => {
    dispatch(Actions.deleteProduct(id));
  };

  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'id'),
    },
    {
      title: 'Image',
      dataIndex: 'featuredImageUrl',
      /* eslint-disable */
      render: (_, record) => (
        <Image width={100} src={record.featuredImageUrl} />
      ),
      /* eslint-enable */
    },
    {
      title: ' Name',
      dataIndex: 'name',
      sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
    },
    {
      title: 'Created By',
      dataIndex: 'userId',
      /* eslint-disable */
      render: (_, record) => (
        <Space>
          <Avatar size={42} src={record.creator?.avatar} />
          <span style={{ whiteSpace: 'nowrap' }}>{record.creator?.firstname} {record.creator?.lastname}</span>
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
          <EditProduct id={elm.id} productCategory = {productCategory} techCategory = {techCategory} innovationCategory = {innovationCategory} />
          <Popconfirm
            title="Do you remove this product?"
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
        <CreateProduct
          productCategory={productCategory}
          techCategory={techCategory}
          innovationCategory={innovationCategory}
        />
      </div>
      <div className="table-responsive">
        <Table rowKey="id" columns={tableColumns} dataSource={tableList} />
      </div>
    </Card>
  );
};
export default ProductList;
