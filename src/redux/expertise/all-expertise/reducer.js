import {
  GET_ALL_EXPERTISE,
  GET_ALL_EXPERTISE_SUCCESS,
  GET_ALL_EXPERTISE_ERROR,
} from '../../types/expertise/all-expertises';

const INIT_STATE = {
  loading: false,
  expertiseList: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_EXPERTISE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_EXPERTISE_SUCCESS:
      return {
        ...state,
        loading: false,
        expertiseList: action.payload,
      };
    case GET_ALL_EXPERTISE_ERROR:
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
