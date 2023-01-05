import {
  GET_ALL_TEAM,
  GET_ALL_TEAM_SUCCESS,
  GET_ALL_TEAM_ERROR,
  CREATE_TEAM,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_ERROR,
  UPDATE_TEAM,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_ERROR,
  DELETE_TEAM,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_ERROR,
} from '../../types/team/all-teams';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TEAM:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_TEAM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TEAM:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TEAM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TEAM:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_TEAM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TEAM:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TEAM_ERROR:
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
