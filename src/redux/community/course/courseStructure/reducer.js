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

const INIT_STATE = {
  loading: false,
  list: [],
  newCourse: null,
  updatedCourse: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSE_STRUCTURE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_COURSE_STRUCTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_COURSE_STRUCTURE_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_COURSE_STRUCTURE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_STRUCTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        newCourse: action.payload,
      };
    case CREATE_COURSE_STRUCTURE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_COURSE_STRUCTURE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COURSE_STRUCTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedCourse: action.payload,
      };
    case UPDATE_COURSE_STRUCTURE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COURSE_STRUCTURE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_STRUCTURE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_COURSE_STRUCTURE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
