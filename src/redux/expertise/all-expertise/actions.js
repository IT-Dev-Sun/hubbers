import {
  GET_ALL_EXPERTISE,
  GET_ALL_EXPERTISE_SUCCESS,
  GET_ALL_EXPERTISE_ERROR,
  CREATE_EXPERTISE,
  CREATE_EXPERTISE_SUCCESS,
  CREATE_EXPERTISE_ERROR,
  UPDATE_EXPERTISE,
  UPDATE_EXPERTISE_SUCCESS,
  UPDATE_EXPERTISE_ERROR,
  DELETE_EXPERTISE,
  DELETE_EXPERTISE_SUCCESS,
  DELETE_EXPERTISE_ERROR,
} from '../../types/expertise/all-expertises';

export const getAllExpertises = () => ({
  type: GET_ALL_EXPERTISE,
});
export const getAllExpertisesSuccess = (data) => ({
  type: GET_ALL_EXPERTISE_SUCCESS,
  payload: data,
});
export const getAllExpertisesError = (data) => ({
  type: GET_ALL_EXPERTISE_ERROR,
  payload: data,
});
export const createExpertise = (data) => ({
  type: CREATE_EXPERTISE,
  payload: data,
});
export const createExpertiseSuccess = (data) => ({
  type: CREATE_EXPERTISE_SUCCESS,
  payload: data,
});
export const createExpertiseError = (data) => ({
  type: CREATE_EXPERTISE_ERROR,
  payload: data,
});
export const updateExpertise = (data) => ({
  type: UPDATE_EXPERTISE,
  payload: data,
});
export const updateExpertiseSuccess = (data) => ({
  type: UPDATE_EXPERTISE_SUCCESS,
  payload: data,
});
export const updateExpertiseError = (data) => ({
  type: UPDATE_EXPERTISE_ERROR,
  payload: data,
});
export const deleteExpertise = (data) => ({
  type: DELETE_EXPERTISE,
  payload: data,
});
export const deleteExpertiseSuccess = (data) => ({
  type: DELETE_EXPERTISE_SUCCESS,
  payload: data,
});
export const deleteExpertiseError = (data) => ({
  type: DELETE_EXPERTISE_ERROR,
  payload: data,
});
