import {
  CREATE_USER,
  GET_ALL_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from '../types/user';

const INIT_STATE = {
  loading: false,
  users: [],
  singleUser: null,
  createUser: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return { ...state, loading: true };
    case GET_ALL_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case GET_ALL_USER_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, singleUser: action.payload };
    case GET_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_USER:
      return { ...state, loading: true };
    case CREATE_USER:
      return { ...state, loading: true };
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
