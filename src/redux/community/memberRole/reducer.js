import {
  GET_ALL_MEMBER_ROLE,
  GET_ALL_MEMBER_ROLE_SUCCESS,
  GET_ALL_MEMBER_ROLE_ERROR,
} from '../../types/community/memberRole';

const INIT_STATE = {
  loading: false,
  list: [],
  // singleEvent: null,
  // newEvent: null,
  // updateEvent: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_MEMBER_ROLE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MEMBER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_MEMBER_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    // case GET_SINGLE_EVENT:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case GET_SINGLE_EVENT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     singleCommunity: action.payload,
    //   };
    // case GET_SINGLE_EVENT_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    // case CREATE_EVENT:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case CREATE_EVENT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     newCommunity: action.payload,
    //   };
    // case CREATE_EVENT_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    // case UPDATE_EVENT:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case UPDATE_EVENT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     updateCommunity: action.payload,
    //   };
    // case UPDATE_EVENT_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return {
        ...state,
      };
  }
};
