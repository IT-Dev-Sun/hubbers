import {
  GET_ALL_CURRENCY,
  GET_ALL_CURRENCY_SUCCESS,
  GET_ALL_CURRENCY_ERROR,
  GET_SINGLE_CURRENCY,
  GET_SINGLE_CURRENCY_SUCCESS,
  GET_SINGLE_CURRENCY_ERROR,
  CREATE_CURRENCY,
  CREATE_CURRENCY_SUCCESS,
  CREATE_CURRENCY_ERROR,
  UPDATE_CURRENCY,
  UPDATE_CURRENCY_SUCCESS,
  UPDATE_CURRENCY_ERROR,
  DELETE_CURRENCY,
  DELETE_CURRENCY_SUCCESS,
  DELETE_CURRENCY_ERROR,
} from '../../types/options/currency';

export const getAllCurrency = () => ({
  type: GET_ALL_CURRENCY,
});
export const getAllCurrencySuccess = (data) => ({
  type: GET_ALL_CURRENCY_SUCCESS,
  payload: data,
});

export const getAllCurrencyError = (data) => ({
  type: GET_ALL_CURRENCY_ERROR,
  payload: data,
});

export const getSingleCurrency = (data) => ({
  type: GET_SINGLE_CURRENCY,
  payload: data,
});
export const getSingleCurrencySuccess = (data) => ({
  type: GET_SINGLE_CURRENCY_SUCCESS,
  payload: data,
});

export const getSingleCurrencyError = (data) => ({
  type: GET_SINGLE_CURRENCY_ERROR,
  payload: data,
});

export const createCurrency = (data) => ({
  type: CREATE_CURRENCY,
  payload: data,
});
export const createCurrencySuccess = (data) => ({
  type: CREATE_CURRENCY_SUCCESS,
  payload: data,
});

export const createCurrencyError = (data) => ({
  type: CREATE_CURRENCY_ERROR,
  payload: data,
});

export const updateCurrency = (data) => ({
  type: UPDATE_CURRENCY,
  payload: data,
});
export const updateCurrencySuccess = (data) => ({
  type: UPDATE_CURRENCY_SUCCESS,
  payload: data,
});

export const updateCurrencyError = (data) => ({
  type: UPDATE_CURRENCY_ERROR,
  payload: data,
});

export const deleteCurrency = (data) => ({
  type: DELETE_CURRENCY,
  payload: data,
});
export const deleteCurrencySuccess = (data) => ({
  type: DELETE_CURRENCY_SUCCESS,
  payload: data,
});

export const deleteCurrencyError = (data) => ({
  type: DELETE_CURRENCY_ERROR,
  payload: data,
});
