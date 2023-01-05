import {
  CREATE_EVENT,
  CREATE_EVENT_ERROR,
  CREATE_EVENT_SUCCESS,
  GET_ALL_EVENT,
  GET_ALL_EVENT_ERROR,
  GET_ALL_EVENT_SUCCESS,
  GET_SINGLE_EVENT,
  GET_SINGLE_EVENT_ERROR,
  GET_SINGLE_EVENT_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  UPDATE_EVENT_SUCCESS,
} from '../../types/community/event';

const INIT_STATE = {
  loading: false,
  list: [],
  singleEvent: null,
  newEvent: null,
  updateEvent: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_EVENT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case GET_SINGLE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        singleCommunity: action.payload,
      };
    case GET_SINGLE_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        newCommunity: action.payload,
      };
    case CREATE_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCommunity: action.payload,
      };
    case UPDATE_EVENT_ERROR:
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
