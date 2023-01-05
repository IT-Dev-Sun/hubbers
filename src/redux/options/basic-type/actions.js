import {
  CREATE_BASIC_TYPE,
  CREATE_BASIC_TYPE_SUCCESS,
  CREATE_BASIC_TYPE_ERROR,
  GET_ALL_BASIC_TYPE,
  GET_ALL_BASIC_TYPE_SUCCESS,
  GET_ALL_BASIC_TYPE_ERROR,
  GET_PARENT_BASIC_TYPE,
  GET_PARENT_BASIC_TYPE_SUCCESS,
  GET_PARENT_BASIC_TYPE_ERROR,
  UPDATE_BASIC_TYPE,
  UPDATE_BASIC_TYPE_SUCCESS,
  UPDATE_BASIC_TYPE_ERROR,
  DELETE_BASIC_TYPE,
  DELETE_BASIC_TYPE_SUCCESS,
  DELETE_BASIC_TYPE_ERROR,
  ORDER_BASIC_TYPE,
  ORDER_BASIC_TYPE_SUCCESS,
  ORDER_BASIC_TYPE_ERROR,
} from '../../types/options/basic-type';

export const getAllBasicType = (id) => ({
  type: GET_ALL_BASIC_TYPE,
  payload: id,
});

export const getAllBasicTypeSuccess = (data) => ({
  type: GET_ALL_BASIC_TYPE_SUCCESS,
  payload: data,
});

export const getAllBasicTypeError = (data) => ({
  type: GET_ALL_BASIC_TYPE_ERROR,
  payload: data,
});

export const getParentBasicType = (id) => ({
  type: GET_PARENT_BASIC_TYPE,
  payload: id,
});

export const getParentBasicTypeSuccess = (data) => ({
  type: GET_PARENT_BASIC_TYPE_SUCCESS,
  payload: data,
});

export const getParentBasicTypeError = (data) => ({
  type: GET_PARENT_BASIC_TYPE_ERROR,
  payload: data,
});

// create
export const createBasicType = (values) => ({
  type: CREATE_BASIC_TYPE,
  payload: values,
});

export const createBasicTypeSuccess = (data) => ({
  type: CREATE_BASIC_TYPE_SUCCESS,
  payload: data,
});

export const createBasicTypeError = (message) => ({
  type: CREATE_BASIC_TYPE_ERROR,
  payload: message,
});

// delete
export const deleteBasicType = (data) => ({
  type: DELETE_BASIC_TYPE,
  payload: data,
});

export const deleteBasicTypeSuccess = (data) => ({
  type: DELETE_BASIC_TYPE_SUCCESS,
  payload: data,
});

export const deleteBasicTypeError = (data) => ({
  type: DELETE_BASIC_TYPE_ERROR,
  payload: data,
});

// update
export const updateBasicType = (data) => ({
  type: UPDATE_BASIC_TYPE,
  payload: data,
});

export const updateBasicTypeSuccess = (data) => ({
  type: UPDATE_BASIC_TYPE_SUCCESS,
  payload: data,
});

export const updateBasicTypeError = (data) => ({
  type: UPDATE_BASIC_TYPE_ERROR,
  payload: data,
});

// order
export const orderBasicType = (data) => ({
  type: ORDER_BASIC_TYPE,
  payload: data,
});

export const orderBasicTypeSuccess = (data) => ({
  type: ORDER_BASIC_TYPE_SUCCESS,
  payload: data,
});

export const orderBasicTypeError = (data) => ({
  type: ORDER_BASIC_TYPE_ERROR,
  payload: data,
});
