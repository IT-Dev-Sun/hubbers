import {
  GET_ALL_SOCIAL,
  GET_ALL_SOCIAL_SUCCESS,
  GET_ALL_SOCIAL_ERROR,
  CREATE_SOCIAL,
  CREATE_SOCIAL_SUCCESS,
  CREATE_SOCIAL_ERROR,
  UPDATE_SOCIAL,
  UPDATE_SOCIAL_SUCCESS,
  UPDATE_SOCIAL_ERROR,
  DELETE_SOCIAL,
  DELETE_SOCIAL_SUCCESS,
  DELETE_SOCIAL_ERROR,
} from '../../types/social/social';

export const getAllSocial = () => ({
  type: GET_ALL_SOCIAL,
});
export const getAllSocialSuccess = (data) => ({
  type: GET_ALL_SOCIAL_SUCCESS,
  payload: data,
});
export const getAllSocialError = (data) => ({
  type: GET_ALL_SOCIAL_ERROR,
  payload: data,
});
export const createSocial = (data) => ({
  type: CREATE_SOCIAL,
  payload: data,
});
export const createSocialSuccess = (data) => ({
  type: CREATE_SOCIAL_SUCCESS,
  payload: data,
});
export const createSocialError = (data) => ({
  type: CREATE_SOCIAL_ERROR,
  payload: data,
});
export const updateSocial = (data) => ({
  type: UPDATE_SOCIAL,
  payload: data,
});
export const updateSocialSuccess = (data) => ({
  type: UPDATE_SOCIAL_SUCCESS,
  payload: data,
});
export const updateSocialError = (data) => ({
  type: UPDATE_SOCIAL_ERROR,
  payload: data,
});
export const deleteSocial = (data) => ({
  type: DELETE_SOCIAL,
  payload: data,
});
export const deleteSocialSuccess = (data) => ({
  type: DELETE_SOCIAL_SUCCESS,
  payload: data,
});
export const deleteSocialError = (data) => ({
  type: DELETE_SOCIAL_ERROR,
  payload: data,
});
