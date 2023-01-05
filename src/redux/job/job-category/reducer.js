import {
  GET_ALL_JOB_CATEGORY,
  GET_ALL_JOB_CATEGORY_SUCCESS,
  GET_ALL_JOB_CATEGORY_ERROR,
  CREATE_JOB_CATEGORY,
  CREATE_JOB_CATEGORY_SUCCESS,
  CREATE_JOB_CATEGORY_ERROR,
  UPDATE_JOB_CATEGORY,
  UPDATE_JOB_CATEGORY_SUCCESS,
  UPDATE_JOB_CATEGORY_ERROR,
  DELETE_JOB_CATEGORY,
  DELETE_JOB_CATEGORY_SUCCESS,
  DELETE_JOB_CATEGORY_ERROR,
} from '../../types/job/job-category';

const INIT_STATE = {
  loading: false,
  list: [],
  newJobCategory: null,
  updateJobCategory: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_JOB_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_JOB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_JOB_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_JOB_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case CREATE_JOB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        newJobCategory: action.payload,
      };
    case CREATE_JOB_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_JOB_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_JOB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_JOB_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_JOB_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case DELETE_JOB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_JOB_CATEGORY_ERROR:
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
