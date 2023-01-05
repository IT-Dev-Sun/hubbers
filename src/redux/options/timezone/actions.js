import {
  GET_ALL_TIMEZONE,
  GET_ALL_TIMEZONE_SUCCESS,
  GET_ALL_TIMEZONE_ERROR,
  GET_SINGLE_TIMEZONE,
  GET_SINGLE_TIMEZONE_SUCCESS,
  GET_SINGLE_TIMEZONE_ERROR,
  CREATE_TIMEZONE,
  CREATE_TIMEZONE_SUCCESS,
  CREATE_TIMEZONE_ERROR,
  UPDATE_TIMEZONE,
  UPDATE_TIMEZONE_SUCCESS,
  UPDATE_TIMEZONE_ERROR,
  DELETE_TIMEZONE,
  DELETE_TIMEZONE_SUCCESS,
  DELETE_TIMEZONE_ERROR,
} from '../../types/options/timezone';

export const getAllTimezone = () => ({
  type: GET_ALL_TIMEZONE,
});
export const getAllTimezoneSuccess = (data) => ({
  type: GET_ALL_TIMEZONE_SUCCESS,
  payload: data,
});

export const getAllTimezoneError = (data) => ({
  type: GET_ALL_TIMEZONE_ERROR,
  payload: data,
});

export const getSingleTimezone = (data) => ({
  type: GET_SINGLE_TIMEZONE,
  payload: data,
});
export const getSingleTimezoneSuccess = (data) => ({
  type: GET_SINGLE_TIMEZONE_SUCCESS,
  payload: data,
});

export const getSingleTimezoneError = (data) => ({
  type: GET_SINGLE_TIMEZONE_ERROR,
  payload: data,
});

export const createTimezone = (data) => ({
  type: CREATE_TIMEZONE,
  payload: data,
});
export const createTimezoneSuccess = (data) => ({
  type: CREATE_TIMEZONE_SUCCESS,
  payload: data,
});

export const createTimezoneError = (data) => ({
  type: CREATE_TIMEZONE_ERROR,
  payload: data,
});

export const updateTimezone = (data) => ({
  type: UPDATE_TIMEZONE,
  payload: data,
});
export const updateTimezoneSuccess = (data) => ({
  type: UPDATE_TIMEZONE_SUCCESS,
  payload: data,
});

export const updateTimezoneError = (data) => ({
  type: UPDATE_TIMEZONE_ERROR,
  payload: data,
});

export const deleteTimezone = (data) => ({
  type: DELETE_TIMEZONE,
  payload: data,
});
export const deleteTimezoneSuccess = (data) => ({
  type: DELETE_TIMEZONE_SUCCESS,
  payload: data,
});

export const deleteTimezoneError = (data) => ({
  type: DELETE_TIMEZONE_ERROR,
  payload: data,
});
