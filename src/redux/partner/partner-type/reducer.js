import {
  GET_ALL_PARTNER_TYPE,
  GET_ALL_PARTNER_TYPE_SUCCESS,
  GET_ALL_PARTNER_TYPE_ERROR,
  CREATE_PARTNER_TYPE,
  CREATE_PARTNER_TYPE_SUCCESS,
  CREATE_PARTNER_TYPE_ERROR,
  UPDATE_PARTNER_TYPE,
  UPDATE_PARTNER_TYPE_SUCCESS,
  UPDATE_PARTNER_TYPE_ERROR,
  DELETE_PARTNER_TYPE,
  DELETE_PARTNER_TYPE_SUCCESS,
  DELETE_PARTNER_TYPE_ERROR,
} from '../../types/partner/partner-type';

const INIT_STATE = {
  loading: false,
  partnerTypeList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PARTNER_TYPE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PARTNER_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        partnerTypeList: action.payload,
      };
    case GET_ALL_PARTNER_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_PARTNER_TYPE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PARTNER_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_PARTNER_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PARTNER_TYPE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PARTNER_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_PARTNER_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PARTNER_TYPE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PARTNER_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_PARTNER_TYPE_ERROR:
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
