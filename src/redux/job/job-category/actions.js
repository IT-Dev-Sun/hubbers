import {
  GET_ALL_JOB_CATEGORY,
  GET_ALL_JOB_CATEGORY_SUCCESS,
  GET_ALL_JOB_CATEGORY_ERROR,
  CREATE_JOB_CATEGORY,
  CREATE_JOB_CATEGORY_SUCCESS,
  CREATE_JOB_CATEGORY_ERROR,
  UPDATE_JOB_CATEGORY,
  UPDATE_JOB_CATEGORY_SUCCESS,
  UPDATE_JOB_CATEGORY_ERROR,
  DELETE_JOB_CATEGORY,
  DELETE_JOB_CATEGORY_SUCCESS,
  DELETE_JOB_CATEGORY_ERROR,
} from '../../types/job/job-category';

export const getAllJobCategory = () => ({
  type: GET_ALL_JOB_CATEGORY,
});
export const getAllJobCategorySuccess = (data) => ({
  type: GET_ALL_JOB_CATEGORY_SUCCESS,
  payload: data,
});
export const getAllJobCategoryError = (data) => ({
  type: GET_ALL_JOB_CATEGORY_ERROR,
  payload: data,
});

export const createJobCategory = (data) => ({
  type: CREATE_JOB_CATEGORY,
  payload: data,
});
export const createJobCategorySuccess = (data) => ({
  type: CREATE_JOB_CATEGORY_SUCCESS,
  payload: data,
});
export const createJobCategoryError = (data) => ({
  type: CREATE_JOB_CATEGORY_ERROR,
  payload: data,
});

export const updateJobCategory = (data) => ({
  type: UPDATE_JOB_CATEGORY,
  payload: data,
});
export const updateJobCategorySuccess = (data) => ({
  type: UPDATE_JOB_CATEGORY_SUCCESS,
  payload: data,
});
export const updateJobCategoryError = (data) => ({
  type: UPDATE_JOB_CATEGORY_ERROR,
  payload: data,
});

export const deleteJobCategory = (data) => ({
  type: DELETE_JOB_CATEGORY,
  payload: data,
});
export const deleteJobCategorySuccess = (data) => ({
  type: DELETE_JOB_CATEGORY_SUCCESS,
  payload: data,
});
export const deleteJobCategoryError = (data) => ({
  type: DELETE_JOB_CATEGORY_ERROR,
  payload: data,
});
