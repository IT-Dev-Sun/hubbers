import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_ERROR,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  GET_ASSESSMENT_CATEGORIES,
  GET_ASSESSMENT_CATEGORIES_SUCCESS,
  GET_ASSESSMENT_CATEGORIES_ERROR,
  GET_ASSESSMENT_TAGS,
  GET_ASSESSMENT_TAGS_SUCCESS,
  GET_ASSESSMENT_TAGS_ERROR,
  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS,
  GET_SINGLE_QUESTION_ERROR,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_ERROR,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_ERROR,
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,
  ORDER_QUESTION,
  ORDER_QUESTION_SUCCESS,
  ORDER_QUESTION_ERROR,
} from '../../types/product/assessment-questions';

export const getAllAssessmentQuestions = (data) => ({
  type: GET_ALL_QUESTIONS,
  payload: data,
});
export const getAllAssessmentQuestionsSuccess = (data) => ({
  type: GET_ALL_QUESTIONS_SUCCESS,
  payload: data,
});
export const getAllAssessmentQuestionsError = (data) => ({
  type: GET_ALL_QUESTIONS_ERROR,
  payload: data,
});
export const getAllQuestions = () => ({
  type: GET_QUESTIONS,
});
export const getAllQuestionsSuccess = (data) => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: data,
});
export const getAllQuestionsError = (data) => ({
  type: GET_QUESTIONS_ERROR,
  payload: data,
});
export const getSingleQuestion = (data) => ({
  type: GET_SINGLE_QUESTION,
  payload: data,
});
export const getSingleQuestionSuccess = (data) => ({
  type: GET_SINGLE_QUESTION_SUCCESS,
  payload: data,
});
export const getSingleQuestionError = (data) => ({
  type: GET_SINGLE_QUESTION_ERROR,
  payload: data,
});
export const getAssessmentCategories = (data) => ({
  type: GET_ASSESSMENT_CATEGORIES,
  payload: data,
});
export const getAssessmentCategoriesSuccess = (data) => ({
  type: GET_ASSESSMENT_CATEGORIES_SUCCESS,
  payload: data,
});
export const getAssessmentCategoriesError = (data) => ({
  type: GET_ASSESSMENT_CATEGORIES_ERROR,
  payload: data,
});
export const getAssessmentTags = () => ({
  type: GET_ASSESSMENT_TAGS,
});
export const getAssessmentTagsSuccess = (data) => ({
  type: GET_ASSESSMENT_TAGS_SUCCESS,
  payload: data,
});
export const getAssessmentTagsError = (data) => ({
  type: GET_ASSESSMENT_TAGS_ERROR,
  payload: data,
});
export const createQuestion = (data) => ({
  type: CREATE_QUESTION,
  payload: data,
});
export const createQuestionSuccess = (data) => ({
  type: CREATE_QUESTION_SUCCESS,
  payload: data,
});
export const createQuestionError = (data) => ({
  type: CREATE_QUESTION_ERROR,
  payload: data,
});
export const deleteQuestion = (data) => ({
  type: DELETE_QUESTION,
  payload: data,
});
export const deleteQuestionSuccess = (data) => ({
  type: DELETE_QUESTION_SUCCESS,
  payload: data,
});
export const deleteQuestionError = (data) => ({
  type: DELETE_QUESTION_ERROR,
  payload: data,
});
export const orderQuestion = (data) => ({
  type: ORDER_QUESTION,
  payload: data,
});
export const orderQuestionSuccess = (data) => ({
  type: ORDER_QUESTION_SUCCESS,
  payload: data,
});
export const orderQuestionError = (data) => ({
  type: ORDER_QUESTION_ERROR,
  payload: data,
});
export const updateQuestion = (data) => ({
  type: UPDATE_QUESTION,
  payload: data,
});
export const updateQuestionSuccess = (data) => ({
  type: UPDATE_QUESTION_SUCCESS,
  payload: data,
});
export const updateQuestionError = (data) => ({
  type: UPDATE_QUESTION_ERROR,
  payload: data,
});
