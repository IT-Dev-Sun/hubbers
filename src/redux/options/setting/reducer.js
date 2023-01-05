import {
  GET_ALL_SETTING,
  GET_ALL_SETTING_SUCCESS,
  GET_ALL_SETTING_ERROR,
  CREATE_SETTING,
  CREATE_SETTING_SUCCESS,
  CREATE_SETTING_ERROR,
  UPDATE_SETTING,
  UPDATE_SETTING_SUCCESS,
  UPDATE_SETTING_ERROR,
  DELETE_SETTING,
  DELETE_SETTING_SUCCESS,
  DELETE_SETTING_ERROR,
} from '../../types/options/setting';

const INIT_STATE = {
  loading: false,
  list: [],
  newSetting: null,
  updateSetting: null,
  deleteSetting: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SETTING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_SETTING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_SETTING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        newSetting: action.payload,
      };
    case CREATE_SETTING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_SETTING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        updateSetting: action.payload,
      };
    case UPDATE_SETTING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_SETTING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteSetting: action.payload,
      };
    case DELETE_SETTING_ERROR:
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
