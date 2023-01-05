import { GET_ALL_PRODUCT_TAGS, GET_ALL_PRODUCT_TAGS_SUCCESS, CREATE_PRODUCT_TAG, CREATE_PRODUCT_TAG_SUCCESS, UPDATE_PRODUCT_TAG, UPDATE_PRODUCT_TAG_SUCCESS, DELETE_PRODUCT_TAG, DELETE_PRODUCT_TAG_SUCCESS } from './actionTypes';

const INIT_STATE = {
  loading: false,
  productTags: [],
  singleProductTag: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_TAGS:
      return { ...state, loading: true };

    case GET_ALL_PRODUCT_TAGS_SUCCESS:
      return { ...state, loading: false, productTags: action.payload };

    case CREATE_PRODUCT_TAG: 
      return {...state, loading: true}

    case CREATE_PRODUCT_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        productTags: [...state.productTags, action.payload]
      }
    
    case UPDATE_PRODUCT_TAG: 
      return {
        ...state,
        loading: true
      }
    
    case UPDATE_PRODUCT_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        productTags: state.productTags.map((item, index) => item.id === action.payload.id ? {...item, name: action.payload.name} : item)
      }
    
    case DELETE_PRODUCT_TAG: 
     return {
      ...state,
      loading: true
     }
    
     case DELETE_PRODUCT_TAG_SUCCESS: 
      return {
        ...state,
        productTags: state.productTags.filter((item, index) => item.id !== action.payload)
      }
    default:
      return { ...state };
  }
};
