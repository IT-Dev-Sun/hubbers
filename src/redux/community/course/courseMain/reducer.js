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

const INIT_STATE = {
  loading: false,
  list: [],
  detail: null,
  unitDetail: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_DETAIL_COURSE:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAIL_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    case GET_DETAIL_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_COURSE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_COURSE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COURSE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_UNIT:
      return {
        ...state,
        loading: true,
      };
    case ADD_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_UNIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_UNIT_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_UNIT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        unitDetail: action.payload,
      };
    case GET_UNIT_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_UNIT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_UNIT_ERROR:
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
