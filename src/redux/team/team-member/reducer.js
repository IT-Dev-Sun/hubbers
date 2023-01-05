import {
  GET_ALL_TEAM_MEMBER,
  GET_ALL_TEAM_MEMBER_SUCCESS,
  GET_ALL_TEAM_MEMBER_ERROR,
  CREATE_TEAM_MEMBER,
  CREATE_TEAM_MEMBER_SUCCESS,
  CREATE_TEAM_MEMBER_ERROR,
  UPDATE_TEAM_MEMBER,
  UPDATE_TEAM_MEMBER_SUCCESS,
  UPDATE_TEAM_MEMBER_ERROR,
  CHANGE_TEAM_MEMBER,
  CHANGE_TEAM_MEMBER_SUCCESS,
  CHANGE_TEAM_MEMBER_ERROR,
  DELETE_TEAM_MEMBER,
  DELETE_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_ERROR,
} from '../../types/team/team-member';

const INIT_STATE = {
  loading: false,
  memberList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TEAM_MEMBER:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        memberList: action.payload,
      };
    case GET_ALL_TEAM_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TEAM_MEMBER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TEAM_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TEAM_MEMBER:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_TEAM_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHANGE_TEAM_MEMBER:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CHANGE_TEAM_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TEAM_MEMBER:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TEAM_MEMBER_ERROR:
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
