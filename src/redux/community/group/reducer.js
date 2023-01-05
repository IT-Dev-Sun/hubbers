import {
  CREATE_GROUP,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
  GET_ALL_GROUP,
  GET_ALL_GROUP_ERROR,
  GET_ALL_GROUP_SUCCESS,
  UPDATE_GROUP,
  UPDATE_GROUP_ERROR,
  UPDATE_GROUP_SUCCESS,
} from '../../types/community/group';
import {} from '../../types/community/topic';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_GROUP:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_GROUP_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case CREATE_GROUP:
      return {
        ...state,
        loading: true,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_GROUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_GROUP:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_GROUP_ERROR:
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
