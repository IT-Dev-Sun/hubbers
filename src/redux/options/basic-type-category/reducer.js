import {
  CREATE_BASIC_TYPE_CATEGORY,
  CREATE_BASIC_TYPE_CATEGORY_SUCCESS,
  CREATE_BASIC_TYPE_CATEGORY_ERROR,
  GET_ALL_BASIC_TYPE_CATEGORY,
  GET_ALL_BASIC_TYPE_CATEGORY_SUCCESS,
  GET_ALL_BASIC_TYPE_CATEGORY_ERROR,
  UPDATE_BASIC_TYPE_CATEGORY,
  UPDATE_BASIC_TYPE_CATEGORY_SUCCESS,
  UPDATE_BASIC_TYPE_CATEGORY_ERROR,
  DELETE_BASIC_TYPE_CATEGORY,
  DELETE_BASIC_TYPE_CATEGORY_SUCCESS,
} from '../../types/options/basic-type-category';

const INIT_STATE = {
  loading: false,
  typeList: [],
  singleInnovationType: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_BASIC_TYPE_CATEGORY:
      return { ...state, loading: true };

    case CREATE_BASIC_TYPE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        typeList: [...state.typeList, action.payload],
      };

    case CREATE_BASIC_TYPE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_ALL_BASIC_TYPE_CATEGORY:
      return { ...state, loading: true };

    case GET_ALL_BASIC_TYPE_CATEGORY_SUCCESS:
      return { ...state, loading: false, typeList: action.payload };

    case GET_ALL_BASIC_TYPE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_BASIC_TYPE_CATEGORY:
      return { ...state, loading: true };

    case DELETE_BASIC_TYPE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        typeList: state.typeList.filter(
          (item) => item.id !== action.payload.payload
        ),
      };

    case UPDATE_BASIC_TYPE_CATEGORY:
      return { ...state, loading: true };

    case UPDATE_BASIC_TYPE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_BASIC_TYPE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
