import {
  GET_ALL_ADMIN,
  GET_ALL_ADMIN_SUCCESS,
  GET_ALL_ADMIN_ERROR,
  CREATE_ADMIN,
  CREATE_ADMIN_SUCCESS,
  CREATE_ADMIN_ERROR,
  UPDATE_ADMIN,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_ERROR,
  DELETE_ADMIN,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_ERROR,
} from '../types/admin';

const INIT_STATE = {
  loading: false,
  list: [],
  newAdmin: null,
  updateAdmin: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        newAdmin: action.payload,
      };
    case CREATE_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        updateAdmin: action.payload,
      };
    case UPDATE_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ADMIN_ERROR:
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
