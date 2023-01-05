import {
  GET_ALL_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from '../types/user';

export const getAllUsers = () => ({
  type: GET_ALL_USER,
});

export const updateUser = (id, data) => ({
  type: UPDATE_USER,
  payload: { id, data },
});

export const getAllUsersSuccess = (data) => ({
  type: GET_ALL_USER_SUCCESS,
  payload: data,
});

export const getAllUsersError = (data) => ({
  type: GET_ALL_USER_ERROR,
  payload: data,
});

export const getSingleUser = (id) => ({
  type: GET_USER,
  payload: id,
});

export const getUsersSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const getUsersError = (data) => ({
  type: GET_USER_ERROR,
  payload: data,
});

export const createUser = (data) => ({
  type: CREATE_USER,
  payload: data,
});

export const createUserSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserError = (data) => ({
  type: CREATE_USER_ERROR,
  payload: data,
});

export const deleteUser = (data) => ({
  type: DELETE_USER,
  payload: data,
});
export const deleteUserSuccess = (data) => ({
  type: DELETE_USER_SUCCESS,
  payload: data,
});
export const deleteUserError = (data) => ({
  type: DELETE_USER_ERROR,
  payload: data,
});
