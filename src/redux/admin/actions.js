import {
  GET_ALL_ADMIN,
  GET_ALL_ADMIN_SUCCESS,
  GET_ALL_ADMIN_ERROR,
  CREATE_ADMIN,
  CREATE_ADMIN_SUCCESS,
  CREATE_ADMIN_ERROR,
  UPDATE_ADMIN,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_ERROR,
  DELETE_ADMIN,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_ERROR,
} from '../types/admin';

export const getAllAdmin = () => ({
  type: GET_ALL_ADMIN,
});
export const getAllAdminSuccess = (data) => ({
  type: GET_ALL_ADMIN_SUCCESS,
  payload: data,
});
export const getAllAdminError = (data) => ({
  type: GET_ALL_ADMIN_ERROR,
  payload: data,
});

export const createAdmin = (data) => ({
  type: CREATE_ADMIN,
  payload: data,
});
export const createAdminSuccess = (data) => ({
  type: CREATE_ADMIN_SUCCESS,
  payload: data,
});
export const createAdminError = (data) => ({
  type: CREATE_ADMIN_ERROR,
  payload: data,
});

export const updateAdmin = (data) => ({
  type: UPDATE_ADMIN,
  payload: data,
});
export const updateAdminSuccess = (data) => ({
  type: UPDATE_ADMIN_SUCCESS,
  payload: data,
});
export const updateAdminError = (data) => ({
  type: UPDATE_ADMIN_ERROR,
  payload: data,
});

export const deleteAdmin = (data) => ({
  type: DELETE_ADMIN,
  payload: data,
});
export const deleteAdminSuccess = (data) => ({
  type: DELETE_ADMIN_SUCCESS,
  payload: data,
});
export const deleteAdminError = (data) => ({
  type: DELETE_ADMIN_ERROR,
  payload: data,
});
