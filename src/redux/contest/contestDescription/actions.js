import {
  GET_ALL_CONTEST_DESCRIPTION,
  GET_ALL_CONTEST_DESCRIPTION_SUCCESS,
  GET_ALL_CONTEST_DESCRIPTION_ERROR,
  CREATE_CONTEST_DESCRIPTION,
  CREATE_CONTEST_DESCRIPTION_SUCCESS,
  CREATE_CONTEST_DESCRIPTION_ERROR,
  UPDATE_CONTEST_DESCRIPTION,
  UPDATE_CONTEST_DESCRIPTION_SUCCESS,
  UPDATE_CONTEST_DESCRIPTION_ERROR,
  DELETE_CONTEST_DESCRIPTION,
  DELETE_CONTEST_DESCRIPTION_SUCCESS,
  DELETE_CONTEST_DESCRIPTION_ERROR,
} from '../../types/contest/contestType';

export const getAllDescription = () => ({
  type: GET_ALL_CONTEST_DESCRIPTION,
});
export const getAllDescriptionSuccess = (data) => ({
  type: GET_ALL_CONTEST_DESCRIPTION_SUCCESS,
  payload: data,
});
export const getAllDescriptionError = (data) => ({
  type: GET_ALL_CONTEST_DESCRIPTION_ERROR,
  payload: data,
});

export const createDescription = (data) => ({
  type: CREATE_CONTEST_DESCRIPTION,
  payload: data,
});
export const createDescriptionSuccess = (data) => ({
  type: CREATE_CONTEST_DESCRIPTION_SUCCESS,
  payload: data,
});
export const createDescriptionError = (data) => ({
  type: CREATE_CONTEST_DESCRIPTION_ERROR,
  payload: data,
});
export const updateDescription = (data) => ({
  type: UPDATE_CONTEST_DESCRIPTION,
  payload: data,
});
export const updateDescriptionSuccess = (data) => ({
  type: UPDATE_CONTEST_DESCRIPTION_SUCCESS,
  payload: data,
});
export const updateDescriptionError = (data) => ({
  type: UPDATE_CONTEST_DESCRIPTION_ERROR,
  payload: data,
});
export const deleteDescription = (data) => ({
  type: DELETE_CONTEST_DESCRIPTION,
  payload: data,
});
export const deleteDescriptionSuccess = (data) => ({
  type: DELETE_CONTEST_DESCRIPTION_SUCCESS,
  payload: data,
});
export const deleteDescriptionError = (data) => ({
  type: DELETE_CONTEST_DESCRIPTION_ERROR,
  payload: data,
});
