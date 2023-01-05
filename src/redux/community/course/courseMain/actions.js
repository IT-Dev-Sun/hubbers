import {
  GET_ALL_COURSE,
  GET_ALL_COURSE_SUCCESS,
  GET_ALL_COURSE_ERROR,
  CREATE_COURSE,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_ERROR,
  UPDATE_COURSE,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_ERROR,
  DELETE_COURSE,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_ERROR,
  GET_DETAIL_COURSE,
  GET_DETAIL_COURSE_SUCCESS,
  GET_DETAIL_COURSE_ERROR,
  ADD_UNIT,
  ADD_UNIT_SUCCESS,
  ADD_UNIT_ERROR,
  GET_UNIT_DETAIL,
  GET_UNIT_DETAIL_SUCCESS,
  GET_UNIT_DETAIL_ERROR,
  UPDATE_UNIT,
  UPDATE_UNIT_SUCCESS,
  UPDATE_UNIT_ERROR,
} from '../../../types/community/course/main';

export const getAllCourse = () => ({
  type: GET_ALL_COURSE,
});
export const getAllCourseSuccess = (data) => ({
  type: GET_ALL_COURSE_SUCCESS,
  payload: data,
});
export const getAllCourseError = (data) => ({
  type: GET_ALL_COURSE_ERROR,
  payload: data,
});

export const getDetailCourse = (data) => ({
  type: GET_DETAIL_COURSE,
  payload: data,
});
export const getDetailCourseSuccess = (data) => ({
  type: GET_DETAIL_COURSE_SUCCESS,
  payload: data,
});
export const getDetailCourseError = (data) => ({
  type: GET_DETAIL_COURSE_ERROR,
  payload: data,
});

export const createCourse = (data) => ({
  type: CREATE_COURSE,
  payload: data,
});
export const createCourseSuccess = (data) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: data,
});
export const createCourseError = (data) => ({
  type: CREATE_COURSE_ERROR,
  payload: data,
});

export const updateCourse = (data) => ({
  type: UPDATE_COURSE,
  payload: data,
});
export const updateCourseSuccess = (data) => ({
  type: UPDATE_COURSE_SUCCESS,
  payload: data,
});
export const updateCourseError = (data) => ({
  type: UPDATE_COURSE_ERROR,
  payload: data,
});

export const deleteCourse = (data) => ({
  type: DELETE_COURSE,
  payload: data,
});
export const deleteCourseSuccess = (data) => ({
  type: DELETE_COURSE_SUCCESS,
  payload: data,
});
export const deleteCourseError = (data) => ({
  type: DELETE_COURSE_ERROR,
  payload: data,
});

export const addUnit = (data) => ({
  type: ADD_UNIT,
  payload: data,
});
export const addUnitSuccess = (data) => ({
  type: ADD_UNIT_SUCCESS,
  payload: data,
});
export const addUnitError = (data) => ({
  type: ADD_UNIT_ERROR,
  payload: data,
});

export const getUnitDetail = (data) => ({
  type: GET_UNIT_DETAIL,
  payload: data,
});
export const getUnitDetailSuccess = (data) => ({
  type: GET_UNIT_DETAIL_SUCCESS,
  payload: data,
});
export const getUnitDetailError = (data) => ({
  type: GET_UNIT_DETAIL_ERROR,
  payload: data,
});

export const updateUnit = (data) => ({
  type: UPDATE_UNIT,
  payload: data,
});
export const updateUnitSuccess = (data) => ({
  type: UPDATE_UNIT_SUCCESS,
  payload: data,
});
export const updateUnitError = (data) => ({
  type: UPDATE_UNIT_ERROR,
  payload: data,
});
