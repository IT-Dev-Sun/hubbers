import {
  CREATE_BASIC_TYPE_CATEGORY,
  CREATE_BASIC_TYPE_CATEGORY_SUCCESS,
  CREATE_BASIC_TYPE_CATEGORY_ERROR,
  GET_ALL_BASIC_TYPE_CATEGORY,
  GET_ALL_BASIC_TYPE_CATEGORY_SUCCESS,
  GET_ALL_BASIC_TYPE_CATEGORY_ERROR,
  UPDATE_BASIC_TYPE_CATEGORY,
  UPDATE_BASIC_TYPE_CATEGORY_SUCCESS,
  UPDATE_BASIC_TYPE_CATEGORY_ERROR,
  DELETE_BASIC_TYPE_CATEGORY,
  DELETE_BASIC_TYPE_CATEGORY_SUCCESS,
  DELETE_BASIC_TYPE_CATEGORY_ERROR,
} from '../../types/options/basic-type-category';

// getAll
export const getAllBasicTypeCategory = () => ({
  type: GET_ALL_BASIC_TYPE_CATEGORY,
});

export const getAllBasicTypeCategorySuccess = (data) => ({
  type: GET_ALL_BASIC_TYPE_CATEGORY_SUCCESS,
  payload: data,
});

export const getAllBasicTypeCategoryError = (data) => ({
  type: GET_ALL_BASIC_TYPE_CATEGORY_ERROR,
  payload: data,
});

// create
export const createBasicTypeCategory = (values) => ({
  type: CREATE_BASIC_TYPE_CATEGORY,
  payload: values,
});

export const createBasicTypeCategorySuccess = (data) => ({
  type: CREATE_BASIC_TYPE_CATEGORY_SUCCESS,
  payload: data,
});

export const createBasicTypeCategoryError = (message) => ({
  type: CREATE_BASIC_TYPE_CATEGORY_ERROR,
  payload: message,
});

// delete
export const deleteBasicTypeCategory = (id) => ({
  type: DELETE_BASIC_TYPE_CATEGORY,
  payload: id,
});

export const deleteBasicTypeCategorySuccess = (data) => ({
  type: DELETE_BASIC_TYPE_CATEGORY_SUCCESS,
  payload: data,
});

export const deleteBasicTypeCategoryError = (data) => ({
  type: DELETE_BASIC_TYPE_CATEGORY_ERROR,
  payload: data,
});

// update
export const updateBasicTypeCategory = (data) => ({
  type: UPDATE_BASIC_TYPE_CATEGORY,
  payload: data,
});

export const updateBasicTypeCategorySuccess = (data) => ({
  type: UPDATE_BASIC_TYPE_CATEGORY_SUCCESS,
  payload: data,
});

export const updateBasicTypeCategoryError = (data) => ({
  type: UPDATE_BASIC_TYPE_CATEGORY_ERROR,
  payload: data,
});
