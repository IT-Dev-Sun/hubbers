import {
  GET_ALL_TOPIC_TYPE,
  GET_ALL_TOPIC_TYPE_SUCCESS,
  GET_ALL_TOPIC_TYPE_ERROR,
} from '../../types/community/topicType';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TOPIC_TYPE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TOPIC_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_TOPIC_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
