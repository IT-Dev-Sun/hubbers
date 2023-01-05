import {
  GET_ALL_MODULE_TYPE,
  GET_ALL_MODULE_TYPE_SUCCESS,
  GET_ALL_MODULE_TYPE_ERROR,
  CREATE_MODULE_TYPE,
  CREATE_MODULE_TYPE_SUCCESS,
  CREATE_MODULE_TYPE_ERROR,
  UPDATE_MODULE_TYPE,
  UPDATE_MODULE_TYPE_SUCCESS,
  UPDATE_MODULE_TYPE_ERROR,
  DELETE_MODULE_TYPE,
  DELETE_MODULE_TYPE_SUCCESS,
  DELETE_MODULE_TYPE_ERROR,
} from '../../types/module/moduleType';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_MODULE_TYPE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MODULE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_MODULE_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_MODULE_TYPE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MODULE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_MODULE_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_MODULE_TYPE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_MODULE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_MODULE_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_MODULE_TYPE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MODULE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_MODULE_TYPE_ERROR:
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
