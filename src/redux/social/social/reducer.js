import {
  GET_ALL_SOCIAL,
  GET_ALL_SOCIAL_SUCCESS,
  GET_ALL_SOCIAL_ERROR,
  CREATE_SOCIAL,
  CREATE_SOCIAL_SUCCESS,
  CREATE_SOCIAL_ERROR,
  UPDATE_SOCIAL,
  UPDATE_SOCIAL_SUCCESS,
  UPDATE_SOCIAL_ERROR,
  DELETE_SOCIAL,
  DELETE_SOCIAL_SUCCESS,
  DELETE_SOCIAL_ERROR,
} from '../../types/social/social';

const INIT_STATE = {
  loading: false,
  socialList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SOCIAL:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        socialList: action.payload,
      };
    case GET_ALL_SOCIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_SOCIAL:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_SOCIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_SOCIAL:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_SOCIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SOCIAL:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SOCIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_SOCIAL_ERROR:
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
