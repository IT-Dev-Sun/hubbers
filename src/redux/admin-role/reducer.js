import {
  GET_ALL_ADMIN_ROLE,
  GET_ALL_ADMIN_ROLE_SUCCESS,
  GET_ALL_ADMIN_ROLE_ERROR,
  CREATE_ADMIN_ROLE,
  CREATE_ADMIN_ROLE_SUCCESS,
  CREATE_ADMIN_ROLE_ERROR,
  UPDATE_ADMIN_ROLE,
  UPDATE_ADMIN_ROLE_SUCCESS,
  UPDATE_ADMIN_ROLE_ERROR,
  DELETE_ADMIN_ROLE,
  DELETE_ADMIN_ROLE_SUCCESS,
  DELETE_ADMIN_ROLE_ERROR,
} from '../types/admin-role';

const INIT_STATE = {
  loading: false,
  list: [],
  newAdminRole: null,
  updateAdminRole: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ADMIN_ROLE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_ADMIN_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_ADMIN_ROLE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        newAdminRole: action.payload,
      };
    case CREATE_ADMIN_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ADMIN_ROLE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateAdminRole: action.payload,
      };
    case UPDATE_ADMIN_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ADMIN_ROLE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ADMIN_ROLE_ERROR:
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
