import {
  GET_ALL_MODULE_TYPE,
  GET_ALL_MODULE_TYPE_SUCCESS,
  GET_ALL_MODULE_TYPE_ERROR,
  CREATE_MODULE_TYPE,
  CREATE_MODULE_TYPE_SUCCESS,
  CREATE_MODULE_TYPE_ERROR,
  UPDATE_MODULE_TYPE,
  UPDATE_MODULE_TYPE_SUCCESS,
  UPDATE_MODULE_TYPE_ERROR,
  DELETE_MODULE_TYPE,
  DELETE_MODULE_TYPE_SUCCESS,
  DELETE_MODULE_TYPE_ERROR,
} from '../../types/module/moduleType';

export const getAllModuleType = () => ({
  type: GET_ALL_MODULE_TYPE,
});
export const getAllModuleTypeSuccess = (data) => ({
  type: GET_ALL_MODULE_TYPE_SUCCESS,
  payload: data,
});
export const getAllModuleTypeError = (data) => ({
  type: GET_ALL_MODULE_TYPE_ERROR,
  payload: data,
});

export const createModuleType = (data) => ({
  type: CREATE_MODULE_TYPE,
  payload: data,
});
export const createModuleTypeSuccess = (data) => ({
  type: CREATE_MODULE_TYPE_SUCCESS,
  payload: data,
});
export const createModuleTypeError = (data) => ({
  type: CREATE_MODULE_TYPE_ERROR,
  payload: data,
});

export const updateModuleType = (data) => ({
  type: UPDATE_MODULE_TYPE,
  payload: data,
});
export const updateModuleTypeSuccess = (data) => ({
  type: UPDATE_MODULE_TYPE_SUCCESS,
  payload: data,
});
export const updateModuleTypeError = (data) => ({
  type: UPDATE_MODULE_TYPE_ERROR,
  payload: data,
});

export const deleteModuleType = (data) => ({
  type: DELETE_MODULE_TYPE,
  payload: data,
});
export const deleteModuleTypeSuccess = (data) => ({
  type: DELETE_MODULE_TYPE_SUCCESS,
  payload: data,
});
export const deleteModuleTypeError = (data) => ({
  type: DELETE_MODULE_TYPE_ERROR,
  payload: data,
});
