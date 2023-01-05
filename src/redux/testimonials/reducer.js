import {
  GET_ALL_TESTIMONIALS,
  GET_ALL_TESTIMONIALS_SUCCESS,
  GET_ALL_TESTIMONIALS_ERROR,
  CREATE_TESTIMONIAL,
  CREATE_TESTIMONIAL_SUCCESS,
  CREATE_TESTIMONIAL_ERROR,
  UPDATE_TESTIMONIAL,
  UPDATE_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_ERROR,
  DELETE_TESTIMONIAL,
  DELETE_TESTIMONIAL_SUCCESS,
  DELETE_TESTIMONIAL_ERROR,
} from '../types/testimonials';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_TESTIMONIALS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TESTIMONIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_TESTIMONIALS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TESTIMONIAL:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TESTIMONIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TESTIMONIAL:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        updateJobCategory: action.payload,
      };
    case UPDATE_TESTIMONIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TESTIMONIAL:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TESTIMONIAL_ERROR:
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
