import {
  GET_ALL_GROUP_PRIVACY_OPTION,
  GET_ALL_GROUP_PRIVACY_OPTION_SUCCESS,
  GET_ALL_GROUP_PRIVACY_OPTION_ERROR,
  CREATE_GROUP_PRIVACY_OPTION,
  CREATE_GROUP_PRIVACY_OPTION_SUCCESS,
  CREATE_GROUP_PRIVACY_OPTION_ERROR,
  UPDATE_GROUP_PRIVACY_OPTION,
  UPDATE_GROUP_PRIVACY_OPTION_SUCCESS,
  UPDATE_GROUP_PRIVACY_OPTION_ERROR,
  DELETE_GROUP_PRIVACY_OPTION,
  DELETE_GROUP_PRIVACY_OPTION_SUCCESS,
  DELETE_GROUP_PRIVACY_OPTION_ERROR,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_SUCCESS,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_ERROR,
} from '../../types/community/groupPrivacyOption';

const INIT_STATE = {
  loading: false,
  groupPrivacyOptionList: [],
  newgroupPrivacyOption: null,
  updategroupPrivacyOption: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_GROUP_PRIVACY_OPTION:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_GROUP_PRIVACY_OPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        groupPrivacyOptionList: action.payload,
      };
    case GET_ALL_GROUP_PRIVACY_OPTION_ERROR:
      return {
        ...state,
        loading: false,
        groupPrivacyOptionList: [],
        error: action.payload,
      };
    case GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        groupPrivacyOptionList: action.payload,
      };
    case GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_ERROR:
      return {
        ...state,
        loading: false,
        groupPrivacyOptionList: [],
        error: action.payload,
      };
    case CREATE_GROUP_PRIVACY_OPTION:
      return {
        ...state,
        loading: true,
      };
    case CREATE_GROUP_PRIVACY_OPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        newgroupPrivacyOption: action.payload,
      };
    case CREATE_GROUP_PRIVACY_OPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_GROUP_PRIVACY_OPTION:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GROUP_PRIVACY_OPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        updategroupPrivacyOption: action.payload,
      };
    case UPDATE_GROUP_PRIVACY_OPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_GROUP_PRIVACY_OPTION:
      return {
        ...state,
        loading: true,
      };
    case DELETE_GROUP_PRIVACY_OPTION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_GROUP_PRIVACY_OPTION_ERROR:
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
