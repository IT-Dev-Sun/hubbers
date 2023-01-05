import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
} from '../../types/product/all-products';

const INIT_STATE = {
  loading: false,
  productList: [],
  single: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case GET_ALL_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        single: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_PRODUCT_ERROR:
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
