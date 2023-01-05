import {
  CREATE_BASIC_TYPE,
  CREATE_BASIC_TYPE_SUCCESS,
  CREATE_BASIC_TYPE_ERROR,
  GET_ALL_BASIC_TYPE,
  GET_ALL_BASIC_TYPE_SUCCESS,
  GET_ALL_BASIC_TYPE_ERROR,
  GET_PARENT_BASIC_TYPE,
  GET_PARENT_BASIC_TYPE_SUCCESS,
  GET_PARENT_BASIC_TYPE_ERROR,
  UPDATE_BASIC_TYPE,
  UPDATE_BASIC_TYPE_SUCCESS,
  UPDATE_BASIC_TYPE_ERROR,
  DELETE_BASIC_TYPE,
  DELETE_BASIC_TYPE_SUCCESS,
  DELETE_BASIC_TYPE_ERROR,
  ORDER_BASIC_TYPE,
  ORDER_BASIC_TYPE_SUCCESS,
  ORDER_BASIC_TYPE_ERROR,
} from '../../types/options/basic-type';

const INIT_STATE = {
  loading: false,
  list: [],
  parentlist: [],
  singleBasicType: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_BASIC_TYPE:
      return { ...state, loading: true };

    case CREATE_BASIC_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload],
      };

    case CREATE_BASIC_TYPE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_ALL_BASIC_TYPE:
      return { ...state, loading: true };

    case GET_ALL_BASIC_TYPE_SUCCESS:
      return { ...state, loading: false, list: action.payload };

    case GET_ALL_BASIC_TYPE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_PARENT_BASIC_TYPE:
      return { ...state, loading: true };

    case GET_PARENT_BASIC_TYPE_SUCCESS:
      return { ...state, loading: false, parentlist: action.payload };

    case GET_PARENT_BASIC_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        parentlist: [],
        error: action.payload,
      };

    case DELETE_BASIC_TYPE:
      return { ...state, loading: true };

    case DELETE_BASIC_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((item) => item.id !== action.payload.payload),
      };
    case DELETE_BASIC_TYPE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_BASIC_TYPE:
      return { ...state, loading: true };

    case UPDATE_BASIC_TYPE_SUCCESS:
      /* eslint-disable */
      const foundIndex = state.list.findIndex(
        (x) => x.id === action.payload.id
      );
      state.list[foundIndex] = action.payload;
      /* eslint-enable */
      return {
        ...state,
        loading: false,
        list: state.list,
      };

    case UPDATE_BASIC_TYPE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ORDER_BASIC_TYPE:
      return { ...state, loading: true };

    case ORDER_BASIC_TYPE_SUCCESS:
      return { ...state, loading: false, list: action.payload.data };

    case ORDER_BASIC_TYPE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
