import {
  GET_ALL_USER_ROLES,
  GET_ALL_USER_ROLES_SUCCESS,
  GET_ALL_USER_ROLES_ERROR,
} from '../types/user-role';

export const getAllUserRoles = () => ({
  type: GET_ALL_USER_ROLES,
});

export const getAllUserRolesSuccess = (data) => ({
  type: GET_ALL_USER_ROLES_SUCCESS,
  payload: data,
});

export const getAllUserRolesError = (data) => ({
  type: GET_ALL_USER_ROLES_ERROR,
  payload: data,
});
