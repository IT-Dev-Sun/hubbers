import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
} from '../../types/product/all-products';

export const getAllProduct = () => ({
  type: GET_ALL_PRODUCT,
});
export const getAllProductSuccess = (data) => ({
  type: GET_ALL_PRODUCT_SUCCESS,
  payload: data,
});
export const getAllProductError = (data) => ({
  type: GET_ALL_PRODUCT_ERROR,
  payload: data,
});

export const getSingleProduct = (data) => ({
  type: GET_SINGLE_PRODUCT,
  payload: data,
});
export const getSingleProductSuccess = (data) => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload: data,
});
export const getSingleProductError = (data) => ({
  type: GET_SINGLE_PRODUCT_ERROR,
  payload: data,
});

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  payload: data,
});
export const createProductSuccess = (data) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: data,
});
export const createProductError = (data) => ({
  type: CREATE_PRODUCT_ERROR,
  payload: data,
});

export const updateProduct = (data) => ({
  type: UPDATE_PRODUCT,
  payload: data,
});
export const updateProductSuccess = (data) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: data,
});
export const updateProductError = (data) => ({
  type: UPDATE_PRODUCT_ERROR,
  payload: data,
});

export const deleteProduct = (data) => ({
  type: DELETE_PRODUCT,
  payload: data,
});
export const deleteProductSuccess = (data) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: data,
});
export const deleteProductError = (data) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: data,
});
