import {
  GET_ALL_TOPIC,
  GET_ALL_TOPIC_SUCCESS,
  GET_ALL_TOPIC_ERROR,
  GET_SINGLE_TOPIC,
  GET_SINGLE_TOPIC_SUCCESS,
  GET_SINGLE_TOPIC_ERROR,
  CREATE_TOPIC,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_ERROR,
  UPDATE_TOPIC,
  UPDATE_TOPIC_SUCCESS,
  UPDATE_TOPIC_ERROR,
  DELETE_TOPIC,
  DELETE_TOPIC_SUCCESS,
  DELETE_TOPIC_ERROR,
} from '../../types/community/topic';

const INIT_STATE = {
  loading: false,
  list: [],
  singleTopic: null,
  newTopic: null,
  updateTopic: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TOPIC:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case GET_SINGLE_TOPIC:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        singleCommunity: action.payload,
      };
    case GET_SINGLE_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TOPIC:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        newCommunity: action.payload,
      };
    case CREATE_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TOPIC:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCommunity: action.payload,
      };
    case UPDATE_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TOPIC:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TOPIC_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TOPIC_ERROR:
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
