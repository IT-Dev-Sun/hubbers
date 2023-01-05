import {
  GET_ALL_COURSE_STRUCTURE,
  GET_ALL_COURSE_STRUCTURE_SUCCESS,
  GET_ALL_COURSE_STRUCTURE_ERROR,
  CREATE_COURSE_STRUCTURE,
  CREATE_COURSE_STRUCTURE_SUCCESS,
  CREATE_COURSE_STRUCTURE_ERROR,
  UPDATE_COURSE_STRUCTURE,
  UPDATE_COURSE_STRUCTURE_SUCCESS,
  UPDATE_COURSE_STRUCTURE_ERROR,
  DELETE_COURSE_STRUCTURE,
  DELETE_COURSE_STRUCTURE_SUCCESS,
  DELETE_COURSE_STRUCTURE_ERROR,
} from '../../../types/community/course/structure';

export const getAllCourseStructure = () => ({
  type: GET_ALL_COURSE_STRUCTURE,
});
export const getAllCourseStructureSuccess = (data) => ({
  type: GET_ALL_COURSE_STRUCTURE_SUCCESS,
  payload: data,
});
export const getAllCourseStructureError = (data) => ({
  type: GET_ALL_COURSE_STRUCTURE_ERROR,
  payload: data,
});

export const createCourseStructure = (data) => ({
  type: CREATE_COURSE_STRUCTURE,
  payload: data,
});
export const createCourseStructureSuccess = (data) => ({
  type: CREATE_COURSE_STRUCTURE_SUCCESS,
  payload: data,
});
export const createCourseStructureError = (data) => ({
  type: CREATE_COURSE_STRUCTURE_ERROR,
  payload: data,
});

export const updateCourseStructure = (data) => ({
  type: UPDATE_COURSE_STRUCTURE,
  payload: data,
});
export const updateCourseStructureSuccess = (data) => ({
  type: UPDATE_COURSE_STRUCTURE_SUCCESS,
  payload: data,
});
export const updateCourseStructureError = (data) => ({
  type: UPDATE_COURSE_STRUCTURE_ERROR,
  payload: data,
});

export const deleteCourseStructure = (data) => ({
  type: DELETE_COURSE_STRUCTURE,
  payload: data,
});
export const deleteCourseStructureSuccess = (data) => ({
  type: DELETE_COURSE_STRUCTURE_SUCCESS,
  payload: data,
});
export const deleteCourseStructureError = (data) => ({
  type: DELETE_COURSE_STRUCTURE_ERROR,
  payload: data,
});
