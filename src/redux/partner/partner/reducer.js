import {
  GET_ALL_PARTNER,
  GET_ALL_PARTNER_SUCCESS,
  GET_ALL_PARTNER_ERROR,
  CREATE_PARTNER,
  CREATE_PARTNER_SUCCESS,
  CREATE_PARTNER_ERROR,
  UPDATE_PARTNER,
  UPDATE_PARTNER_SUCCESS,
  UPDATE_PARTNER_ERROR,
  DELETE_PARTNER,
  DELETE_PARTNER_SUCCESS,
  DELETE_PARTNER_ERROR,
} from '../../types/partner/partner';

const INIT_STATE = {
  loading: false,
  partnerList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PARTNER:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
        partnerList: action.payload,
      };
    case GET_ALL_PARTNER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_PARTNER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_PARTNER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PARTNER:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_PARTNER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PARTNER:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_PARTNER_ERROR:
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
