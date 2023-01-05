import {
  GET_ALL_JOB,
  GET_ALL_JOB_SUCCESS,
  GET_ALL_JOB_ERROR,
  CREATE_JOB,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  DELETE_JOB,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_ERROR,
} from '../../types/job/job';

export const getAllJob = () => ({
  type: GET_ALL_JOB,
});
export const getAllJobSuccess = (data) => ({
  type: GET_ALL_JOB_SUCCESS,
  payload: data,
});
export const getAllJobError = (data) => ({
  type: GET_ALL_JOB_ERROR,
  payload: data,
});

export const createJob = (data) => ({
  type: CREATE_JOB,
  payload: data,
});
export const createJobSuccess = (data) => ({
  type: CREATE_JOB_SUCCESS,
  payload: data,
});
export const createJobError = (data) => ({
  type: CREATE_JOB_ERROR,
  payload: data,
});

export const updateJob = (data) => ({
  type: UPDATE_JOB,
  payload: data,
});
export const updateJobSuccess = (data) => ({
  type: UPDATE_JOB_SUCCESS,
  payload: data,
});
export const updateJobError = (data) => ({
  type: UPDATE_JOB_ERROR,
  payload: data,
});

export const deleteJob = (data) => ({
  type: DELETE_JOB,
  payload: data,
});
export const deleteJobSuccess = (data) => ({
  type: DELETE_JOB_SUCCESS,
  payload: data,
});
export const deleteJobError = (data) => ({
  type: DELETE_JOB_ERROR,
  payload: data,
});
