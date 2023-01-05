import {
  GET_ALL_SETTING,
  GET_ALL_SETTING_SUCCESS,
  GET_ALL_SETTING_ERROR,
  CREATE_SETTING,
  CREATE_SETTING_SUCCESS,
  CREATE_SETTING_ERROR,
  UPDATE_SETTING,
  UPDATE_SETTING_SUCCESS,
  UPDATE_SETTING_ERROR,
  DELETE_SETTING,
  DELETE_SETTING_SUCCESS,
  DELETE_SETTING_ERROR,
} from '../../types/options/setting';

export const getAllSetting = () => ({
  type: GET_ALL_SETTING,
});
export const getAllSettingSuccess = (data) => ({
  type: GET_ALL_SETTING_SUCCESS,
  payload: data,
});

export const getAllSettingError = (data) => ({
  type: GET_ALL_SETTING_ERROR,
  payload: data,
});

export const createSetting = (data) => ({
  type: CREATE_SETTING,
  payload: data,
});
export const createSettingSuccess = (data) => ({
  type: CREATE_SETTING_SUCCESS,
  payload: data,
});

export const createSettingError = (data) => ({
  type: CREATE_SETTING_ERROR,
  payload: data,
});

export const updateSetting = (data) => ({
  type: UPDATE_SETTING,
  payload: data,
});
export const updateSettingSuccess = (data) => ({
  type: UPDATE_SETTING_SUCCESS,
  payload: data,
});

export const updateSettingError = (data) => ({
  type: UPDATE_SETTING_ERROR,
  payload: data,
});

export const deleteSetting = (data) => ({
  type: DELETE_SETTING,
  payload: data,
});
export const deleteSettingSuccess = (data) => ({
  type: DELETE_SETTING_SUCCESS,
  payload: data,
});

export const deleteSettingError = (data) => ({
  type: DELETE_SETTING_ERROR,
  payload: data,
});
