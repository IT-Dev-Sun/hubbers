import {
  CREATE_EXPERTISE_CATEGORY,
  CREATE_EXPERTISE_CATEGORY_SUCCESS,
  CREATE_EXPERTISE_CATEGORY_ERROR,
  GET_ALL_EXPERTISE_CATEGORY,
  GET_ALL_EXPERTISE_CATEGORY_SUCCESS,
  GET_ALL_EXPERTISE_CATEGORY_ERROR,
  GET_ALL_SKILL,
  GET_ALL_SKILL_SUCCESS,
  GET_ALL_SKILL_ERROR,
  UPDATE_EXPERTISE_CATEGORY,
  UPDATE_EXPERTISE_CATEGORY_SUCCESS,
  UPDATE_EXPERTISE_CATEGORY_ERROR,
  DELETE_EXPERTISE_CATEGORY,
  DELETE_EXPERTISE_CATEGORY_SUCCESS,
  DELETE_EXPERTISE_CATEGORY_ERROR,
  ORDER_EXPERTISE_CATEGORY,
  ORDER_EXPERTISE_CATEGORY_SUCCESS,
  ORDER_EXPERTISE_CATEGORY_ERROR,
} from '../../types/options/expertise-category';

// getAll
export const getAllExpertiseCategory = () => ({
  type: GET_ALL_EXPERTISE_CATEGORY,
});

export const getAllExpertiseCategorySuccess = (data) => ({
  type: GET_ALL_EXPERTISE_CATEGORY_SUCCESS,
  payload: data,
});

export const getAllExpertiseCategoryError = (data) => ({
  type: GET_ALL_EXPERTISE_CATEGORY_ERROR,
  payload: data,
});

// skill
export const getAllSkill = () => ({
  type: GET_ALL_SKILL,
});

export const getAllSkillSuccess = (data) => ({
  type: GET_ALL_SKILL_SUCCESS,
  payload: data,
});

export const getAllSkillError = (data) => ({
  type: GET_ALL_SKILL_ERROR,
  payload: data,
});

// create
export const createExpertiseCategory = (values) => ({
  type: CREATE_EXPERTISE_CATEGORY,
  payload: values,
});

export const createExpertiseCategorySuccess = (data) => ({
  type: CREATE_EXPERTISE_CATEGORY_SUCCESS,
  payload: data,
});

export const createExpertiseCategoryError = (message) => ({
  type: CREATE_EXPERTISE_CATEGORY_ERROR,
  payload: message,
});

// delete
export const deleteExpertiseCategory = (data) => ({
  type: DELETE_EXPERTISE_CATEGORY,
  payload: data,
});

export const deleteExpertiseCategorySuccess = (data) => ({
  type: DELETE_EXPERTISE_CATEGORY_SUCCESS,
  payload: data,
});

export const deleteExpertiseCategoryError = (data) => ({
  type: DELETE_EXPERTISE_CATEGORY_ERROR,
  payload: data,
});

// update
export const updateExpertiseCategory = (data) => ({
  type: UPDATE_EXPERTISE_CATEGORY,
  payload: data,
});

export const updateExpertiseCategorySuccess = (data) => ({
  type: UPDATE_EXPERTISE_CATEGORY_SUCCESS,
  payload: data,
});

export const updateExpertiseCategoryError = (data) => ({
  type: UPDATE_EXPERTISE_CATEGORY_ERROR,
  payload: data,
});

// order
export const orderExpertiseCategory = (data) => ({
  type: ORDER_EXPERTISE_CATEGORY,
  payload: data,
});

export const orderExpertiseCategorySuccess = (data) => ({
  type: ORDER_EXPERTISE_CATEGORY_SUCCESS,
  payload: data,
});

export const orderExpertiseCategoryError = (data) => ({
  type: ORDER_EXPERTISE_CATEGORY_ERROR,
  payload: data,
});
