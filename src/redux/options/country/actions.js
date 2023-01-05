import {
  GET_ALL_COUNTRY,
  GET_ALL_COUNTRY_SUCCESS,
  GET_ALL_COUNTRY_ERROR,
  GET_SINGLE_COUNTRY,
  GET_SINGLE_COUNTRY_SUCCESS,
  GET_SINGLE_COUNTRY_ERROR,
  CREATE_COUNTRY,
  CREATE_COUNTRY_SUCCESS,
  CREATE_COUNTRY_ERROR,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_ERROR,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  DELETE_COUNTRY_ERROR,
} from '../../types/options/country';

export const getAllCountry = () => ({
  type: GET_ALL_COUNTRY,
});
export const getAllCountrySuccess = (data) => ({
  type: GET_ALL_COUNTRY_SUCCESS,
  payload: data,
});

export const getAllCountryError = (data) => ({
  type: GET_ALL_COUNTRY_ERROR,
  payload: data,
});

export const getSingleCountry = (data) => ({
  type: GET_SINGLE_COUNTRY,
  payload: data,
});
export const getSingleCountrySuccess = (data) => ({
  type: GET_SINGLE_COUNTRY_SUCCESS,
  payload: data,
});

export const getSingleCountryError = (data) => ({
  type: GET_SINGLE_COUNTRY_ERROR,
  payload: data,
});

export const createCountry = (data) => ({
  type: CREATE_COUNTRY,
  payload: data,
});
export const createCountrySuccess = (data) => ({
  type: CREATE_COUNTRY_SUCCESS,
  payload: data,
});

export const createCountryError = (data) => ({
  type: CREATE_COUNTRY_ERROR,
  payload: data,
});

export const updateCountry = (data) => ({
  type: UPDATE_COUNTRY,
  payload: data,
});
export const updateCountrySuccess = (data) => ({
  type: UPDATE_COUNTRY_SUCCESS,
  payload: data,
});

export const updateCountryError = (data) => ({
  type: UPDATE_COUNTRY_ERROR,
  payload: data,
});

export const deleteCountry = (data) => ({
  type: DELETE_COUNTRY,
  payload: data,
});
export const deleteCountrySuccess = (data) => ({
  type: DELETE_COUNTRY_SUCCESS,
  payload: data,
});

export const deleteCountryError = (data) => ({
  type: DELETE_COUNTRY_ERROR,
  payload: data,
});
