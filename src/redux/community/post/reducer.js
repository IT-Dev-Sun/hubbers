import {
  CREATE_POST,
  CREATE_POST_ERROR,
  GET_ALL_POST,
  GET_ALL_POST_ERROR,
  GET_ALL_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_ERROR,
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
} from '../../types/community/post';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_POST_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_POST_ERROR:
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
