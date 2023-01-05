import {
  GET_ALL_TEAM_MEMBER_ROLE,
  GET_ALL_TEAM_MEMBER_ROLE_SUCCESS,
  GET_ALL_TEAM_MEMBER_ROLE_ERROR,
  CREATE_TEAM_MEMBER_ROLE,
  CREATE_TEAM_MEMBER_ROLE_SUCCESS,
  CREATE_TEAM_MEMBER_ROLE_ERROR,
  UPDATE_TEAM_MEMBER_ROLE,
  UPDATE_TEAM_MEMBER_ROLE_SUCCESS,
  UPDATE_TEAM_MEMBER_ROLE_ERROR,
  DELETE_TEAM_MEMBER_ROLE,
  DELETE_TEAM_MEMBER_ROLE_SUCCESS,
  DELETE_TEAM_MEMBER_ROLE_ERROR,
} from '../../types/team/team-member-role';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TEAM_MEMBER_ROLE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TEAM_MEMBER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_TEAM_MEMBER_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TEAM_MEMBER_ROLE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TEAM_MEMBER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TEAM_MEMBER_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TEAM_MEMBER_ROLE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TEAM_MEMBER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_TEAM_MEMBER_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TEAM_MEMBER_ROLE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TEAM_MEMBER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TEAM_MEMBER_ROLE_ERROR:
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
