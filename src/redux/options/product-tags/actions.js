import {GET_ALL_PRODUCT_TAGS, GET_ALL_PRODUCT_TAGS_SUCCESS, CREATE_PRODUCT_TAG, CREATE_PRODUCT_TAG_SUCCESS, UPDATE_PRODUCT_TAG, UPDATE_PRODUCT_TAG_SUCCESS, DELETE_PRODUCT_TAG, DELETE_PRODUCT_TAG_SUCCESS} from './actionTypes';

export const getAllProductTags = (id) => ({
  type: GET_ALL_PRODUCT_TAGS,
});

export const getAllProductTagsSuccess = (data) => ({
  type: GET_ALL_PRODUCT_TAGS_SUCCESS,
  payload: data,
});

// create
export const createProductTag = (values) => ({
  type: CREATE_PRODUCT_TAG,
  payload: values,
});

export const createProductTagSuccess = (data) => ({
  type: CREATE_PRODUCT_TAG_SUCCESS,
  payload: data,
});

// delete
export const deleteProductTag = (id) => ({
  type: DELETE_PRODUCT_TAG,
  payload: id,
});

export const deleteBasicTypeSuccess = (id) => ({
  type: DELETE_PRODUCT_TAG_SUCCESS,
  payload: id,
});


// update
export const updateProductTagById = (data) => ({
  type: UPDATE_PRODUCT_TAG,
  payload: data,
});

export const updateProductTagByIdSuccess = (data) => ({
  type: UPDATE_PRODUCT_TAG_SUCCESS,
  payload: data
});

