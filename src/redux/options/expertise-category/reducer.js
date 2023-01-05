import {
  GET_ALL_EXPERTISE_CATEGORY,
  GET_ALL_EXPERTISE_CATEGORY_SUCCESS,
  GET_ALL_EXPERTISE_CATEGORY_ERROR,
  GET_ALL_SKILL,
  GET_ALL_SKILL_SUCCESS,
  GET_ALL_SKILL_ERROR,
  CREATE_EXPERTISE_CATEGORY,
  CREATE_EXPERTISE_CATEGORY_SUCCESS,
  CREATE_EXPERTISE_CATEGORY_ERROR,
  UPDATE_EXPERTISE_CATEGORY,
  UPDATE_EXPERTISE_CATEGORY_SUCCESS,
  UPDATE_EXPERTISE_CATEGORY_ERROR,
  DELETE_EXPERTISE_CATEGORY,
  DELETE_EXPERTISE_CATEGORY_SUCCESS,
  DELETE_EXPERTISE_CATEGORY_ERROR,
  ORDER_EXPERTISE_CATEGORY,
  ORDER_EXPERTISE_CATEGORY_SUCCESS,
  ORDER_EXPERTISE_CATEGORY_ERROR,
} from '../../types/options/expertise-category';

const INIT_STATE = {
  loading: false,
  list: [],
  skills: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_EXPERTISE_CATEGORY:
      return { ...state, loading: true };

    case CREATE_EXPERTISE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload],
      };

    case CREATE_EXPERTISE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_ALL_EXPERTISE_CATEGORY:
      return { ...state, loading: true };

    case GET_ALL_EXPERTISE_CATEGORY_SUCCESS:
      return { ...state, loading: false, list: action.payload };

    case GET_ALL_EXPERTISE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_ALL_SKILL:
      return { ...state, loading: true };

    case GET_ALL_SKILL_SUCCESS:
      return { ...state, loading: false, skills: action.payload };

    case GET_ALL_SKILL_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_EXPERTISE_CATEGORY:
      return { ...state, loading: true };

    case DELETE_EXPERTISE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((item) => item.id !== action.payload.payload),
      };
    case DELETE_EXPERTISE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_EXPERTISE_CATEGORY:
      return { ...state, loading: true };

    case UPDATE_EXPERTISE_CATEGORY_SUCCESS:
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

    case UPDATE_EXPERTISE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ORDER_EXPERTISE_CATEGORY:
      return { ...state, loading: true };

    case ORDER_EXPERTISE_CATEGORY_SUCCESS:
      return { ...state, loading: false, list: action.payload.data };

    case ORDER_EXPERTISE_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
