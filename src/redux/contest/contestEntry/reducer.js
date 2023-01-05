import {
  DELETE_CONTEST_ENTRY,
  DELETE_CONTEST_ENTRY_ERROR,
  DELETE_CONTEST_ENTRY_SUCCESS,
  GET_ALL_CONTEST_ENTRY,
  GET_ALL_CONTEST_ENTRY_SUCCESS,
  GET_ALL_CONTEST_LIST_ERROR,
} from '../../types/contest/contestType';

const INIT_STATE = {
  loading: false,
  contestEntryList: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CONTEST_ENTRY:
      return {
        ...state,
        loading: false,
      };
    case GET_ALL_CONTEST_ENTRY_SUCCESS:
      return {
        ...state,
        contestEntryList: action.payload,
      };
    case GET_ALL_CONTEST_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTEST_ENTRY:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CONTEST_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_CONTEST_ENTRY_ERROR:
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
