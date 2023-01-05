import {
  GET_ALL_ADMIN_ROLE,
  GET_ALL_ADMIN_ROLE_SUCCESS,
  GET_ALL_ADMIN_ROLE_ERROR,
  CREATE_ADMIN_ROLE,
  CREATE_ADMIN_ROLE_SUCCESS,
  CREATE_ADMIN_ROLE_ERROR,
  UPDATE_ADMIN_ROLE,
  UPDATE_ADMIN_ROLE_SUCCESS,
  UPDATE_ADMIN_ROLE_ERROR,
  DELETE_ADMIN_ROLE,
  DELETE_ADMIN_ROLE_SUCCESS,
  DELETE_ADMIN_ROLE_ERROR,
} from '../types/admin-role';

export const getAllAdminRole = () => ({
  type: GET_ALL_ADMIN_ROLE,
});
export const getAllAdminRoleSuccess = (data) => ({
  type: GET_ALL_ADMIN_ROLE_SUCCESS,
  payload: data,
});
export const getAllAdminRoleError = (data) => ({
  type: GET_ALL_ADMIN_ROLE_ERROR,
  payload: data,
});

export const createAdminRole = (data) => ({
  type: CREATE_ADMIN_ROLE,
  payload: data,
});
export const createAdminRoleSuccess = (data) => ({
  type: CREATE_ADMIN_ROLE_SUCCESS,
  payload: data,
});
export const createAdminRoleError = (data) => ({
  type: CREATE_ADMIN_ROLE_ERROR,
  payload: data,
});

export const updateAdminRole = (data) => ({
  type: UPDATE_ADMIN_ROLE,
  payload: data,
});
export const updateAdminRoleSuccess = (data) => ({
  type: UPDATE_ADMIN_ROLE_SUCCESS,
  payload: data,
});
export const updateAdminRoleError = (data) => ({
  type: UPDATE_ADMIN_ROLE_ERROR,
  payload: data,
});

export const deleteAdminRole = (data) => ({
  type: DELETE_ADMIN_ROLE,
  payload: data,
});
export const deleteAdminRoleSuccess = (data) => ({
  type: DELETE_ADMIN_ROLE_SUCCESS,
  payload: data,
});
export const deleteAdminRoleError = (data) => ({
  type: DELETE_ADMIN_ROLE_ERROR,
  payload: data,
});
