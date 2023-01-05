import {
  GET_ALL_JOB,
  GET_ALL_JOB_SUCCESS,
  GET_ALL_JOB_ERROR,
  CREATE_JOB,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  DELETE_JOB,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_ERROR,
} from '../../types/job/job';

const INIT_STATE = {
  loading: false,
  list: [],
  newJob: null,
  updateJob: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_JOB:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_JOB_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_JOB:
      return {
        ...state,
        loading: true,
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        newJob: action.payload,
      };
    case CREATE_JOB_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_JOB:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJob: action.payload,
      };
    case UPDATE_JOB_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_JOB:
      return {
        ...state,
        loading: true,
      };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_JOB_ERROR:
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
