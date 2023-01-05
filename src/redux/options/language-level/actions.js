import {
  GET_ALL_LANGUAGE_LEVEL,
  GET_ALL_LANGUAGE_LEVEL_SUCCESS,
  GET_ALL_LANGUAGE_LEVEL_ERROR,
  GET_SINGLE_LANGUAGE_LEVEL,
  GET_SINGLE_LANGUAGE_LEVEL_SUCCESS,
  GET_SINGLE_LANGUAGE_LEVEL_ERROR,
  CREATE_LANGUAGE_LEVEL,
  CREATE_LANGUAGE_LEVEL_SUCCESS,
  CREATE_LANGUAGE_LEVEL_ERROR,
  UPDATE_LANGUAGE_LEVEL,
  UPDATE_LANGUAGE_LEVEL_SUCCESS,
  UPDATE_LANGUAGE_LEVEL_ERROR,
  DELETE_LANGUAGE_LEVEL,
  DELETE_LANGUAGE_LEVEL_SUCCESS,
  DELETE_LANGUAGE_LEVEL_ERROR,
} from '../../types/options/language-level';

export const getAllLanguageLevel = () => ({
  type: GET_ALL_LANGUAGE_LEVEL,
});
export const getAllLanguageLevelSuccess = (data) => ({
  type: GET_ALL_LANGUAGE_LEVEL_SUCCESS,
  payload: data,
});

export const getAllLanguageLevelError = (data) => ({
  type: GET_ALL_LANGUAGE_LEVEL_ERROR,
  payload: data,
});

export const getSingleLanguageLevel = (data) => ({
  type: GET_SINGLE_LANGUAGE_LEVEL,
  payload: data,
});
export const getSingleLanguageLevelSuccess = (data) => ({
  type: GET_SINGLE_LANGUAGE_LEVEL_SUCCESS,
  payload: data,
});

export const getSingleLanguageLevelError = (data) => ({
  type: GET_SINGLE_LANGUAGE_LEVEL_ERROR,
  payload: data,
});

export const createLanguageLevel = (data) => ({
  type: CREATE_LANGUAGE_LEVEL,
  payload: data,
});
export const createLanguageLevelSuccess = (data) => ({
  type: CREATE_LANGUAGE_LEVEL_SUCCESS,
  payload: data,
});

export const createLanguageLevelError = (data) => ({
  type: CREATE_LANGUAGE_LEVEL_ERROR,
  payload: data,
});

export const updateLanguageLevel = (data) => ({
  type: UPDATE_LANGUAGE_LEVEL,
  payload: data,
});
export const updateLanguageLevelSuccess = (data) => ({
  type: UPDATE_LANGUAGE_LEVEL_SUCCESS,
  payload: data,
});

export const updateLanguageLevelError = (data) => ({
  type: UPDATE_LANGUAGE_LEVEL_ERROR,
  payload: data,
});

export const deleteLanguageLevel = (data) => ({
  type: DELETE_LANGUAGE_LEVEL,
  payload: data,
});
export const deleteLanguageLevelSuccess = (data) => ({
  type: DELETE_LANGUAGE_LEVEL_SUCCESS,
  payload: data,
});

export const deleteLanguageLevelError = (data) => ({
  type: DELETE_LANGUAGE_LEVEL_ERROR,
  payload: data,
});
