import {
  GET_ALL_UNIVERSE,
  GET_ALL_UNIVERSE_SUCCESS,
  GET_ALL_UNIVERSE_ERROR,
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID,
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_SUCCESS,
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_ERROR,
  CREATE_TUTORIAL,
  CREATE_TUTORIAL_SUCCESS,
  CREATE_TUTORIAL_ERROR,
  UPDATE_TUTORIAL,
  UPDATE_TUTORIAL_SUCCESS,
  UPDATE_TUTORIAL_ERROR,
  DELETE_TUTORIAL,
  DELETE_TUTORIAL_SUCCESS,
  DELETE_TUTORIAL_ERROR,
} from '../../types/product/assessment-tutorials';

export const getAllAssessmentUniverse = (data) => ({
  type: GET_ALL_UNIVERSE,
  payload: data,
});
export const getAllAssessmentUniverseSuccess = (data) => ({
  type: GET_ALL_UNIVERSE_SUCCESS,
  payload: data,
});
export const getAllAssessmentUniverseError = (data) => ({
  type: GET_ALL_UNIVERSE_ERROR,
  payload: data,
});
export const getAllAssessmentTutorialsByCategoryId = (data) => ({
  type: GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID,
  payload: data,
});
export const getAllAssessmentTutorialsByCategoryIdSuccess = (data) => ({
  type: GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_SUCCESS,
  payload: data,
});
export const getAllAssessmentTutorialsByCategoryIdError = (data) => ({
  type: GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_ERROR,
  payload: data,
});
export const createTutorial = (data) => ({
  type: CREATE_TUTORIAL,
  payload: data,
});
export const createTutorialSuccess = (data) => ({
  type: CREATE_TUTORIAL_SUCCESS,
  payload: data,
});
export const createTutorialError = (data) => ({
  type: CREATE_TUTORIAL_ERROR,
  payload: data,
});
export const deleteTutorial = (data) => ({
  type: DELETE_TUTORIAL,
  payload: data,
});
export const deleteTutorialSuccess = (data) => ({
  type: DELETE_TUTORIAL_SUCCESS,
  payload: data,
});
export const deleteTutorialError = (data) => ({
  type: DELETE_TUTORIAL_ERROR,
  payload: data,
});
export const updateTutorial = (data) => ({
  type: UPDATE_TUTORIAL,
  payload: data,
});
export const updateTutorialSuccess = (data) => ({
  type: UPDATE_TUTORIAL_SUCCESS,
  payload: data,
});
export const updateTutorialError = (data) => ({
  type: UPDATE_TUTORIAL_ERROR,
  payload: data,
});
