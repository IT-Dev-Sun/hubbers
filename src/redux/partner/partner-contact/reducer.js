import {
  GET_ALL_PARTNER_CONTACT,
  GET_ALL_PARTNER_CONTACT_SUCCESS,
  GET_ALL_PARTNER_CONTACT_ERROR,
  CREATE_PARTNER_CONTACT,
  CREATE_PARTNER_CONTACT_SUCCESS,
  CREATE_PARTNER_CONTACT_ERROR,
  UPDATE_PARTNER_CONTACT,
  UPDATE_PARTNER_CONTACT_SUCCESS,
  UPDATE_PARTNER_CONTACT_ERROR,
  DELETE_PARTNER_CONTACT,
  DELETE_PARTNER_CONTACT_SUCCESS,
  DELETE_PARTNER_CONTACT_ERROR,
} from '../../types/partner/partner-contact';

const INIT_STATE = {
  loading: false,
  partnerContactList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PARTNER_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PARTNER_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        partnerContactList: action.payload,
      };
    case GET_ALL_PARTNER_CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_PARTNER_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PARTNER_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_PARTNER_CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PARTNER_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PARTNER_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_PARTNER_CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PARTNER_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PARTNER_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_PARTNER_CONTACT_ERROR:
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
