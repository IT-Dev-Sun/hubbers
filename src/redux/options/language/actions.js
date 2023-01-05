import {
  GET_ALL_LANGUAGE,
  GET_ALL_LANGUAGE_SUCCESS,
  GET_ALL_LANGUAGE_ERROR,
  GET_SINGLE_LANGUAGE,
  GET_SINGLE_LANGUAGE_SUCCESS,
  GET_SINGLE_LANGUAGE_ERROR,
  CREATE_LANGUAGE,
  CREATE_LANGUAGE_SUCCESS,
  CREATE_LANGUAGE_ERROR,
  UPDATE_LANGUAGE,
  UPDATE_LANGUAGE_SUCCESS,
  UPDATE_LANGUAGE_ERROR,
  DELETE_LANGUAGE,
  DELETE_LANGUAGE_SUCCESS,
  DELETE_LANGUAGE_ERROR,
} from '../../types/options/language';

export const getAllLanguage = () => ({
  type: GET_ALL_LANGUAGE,
});
export const getAllLanguageSuccess = (data) => ({
  type: GET_ALL_LANGUAGE_SUCCESS,
  payload: data,
});

export const getAllLanguageError = (data) => ({
  type: GET_ALL_LANGUAGE_ERROR,
  payload: data,
});

export const getSingleLanguage = (data) => ({
  type: GET_SINGLE_LANGUAGE,
  payload: data,
});
export const getSingleLanguageSuccess = (data) => ({
  type: GET_SINGLE_LANGUAGE_SUCCESS,
  payload: data,
});

export const getSingleLanguageError = (data) => ({
  type: GET_SINGLE_LANGUAGE_ERROR,
  payload: data,
});

export const createLanguage = (data) => ({
  type: CREATE_LANGUAGE,
  payload: data,
});
export const createLanguageSuccess = (data) => ({
  type: CREATE_LANGUAGE_SUCCESS,
  payload: data,
});

export const createLanguageError = (data) => ({
  type: CREATE_LANGUAGE_ERROR,
  payload: data,
});

export const updateLanguage = (data) => ({
  type: UPDATE_LANGUAGE,
  payload: data,
});
export const updateLanguageSuccess = (data) => ({
  type: UPDATE_LANGUAGE_SUCCESS,
  payload: data,
});

export const updateLanguageError = (data) => ({
  type: UPDATE_LANGUAGE_ERROR,
  payload: data,
});

export const deleteLanguage = (data) => ({
  type: DELETE_LANGUAGE,
  payload: data,
});
export const deleteLanguageSuccess = (data) => ({
  type: DELETE_LANGUAGE_SUCCESS,
  payload: data,
});

export const deleteLanguageError = (data) => ({
  type: DELETE_LANGUAGE_ERROR,
  payload: data,
});
