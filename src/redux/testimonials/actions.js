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

export const getAllTestimonials = () => ({
  type: GET_ALL_TESTIMONIALS,
});
export const getAllTestimonialsSuccess = (data) => ({
  type: GET_ALL_TESTIMONIALS_SUCCESS,
  payload: data,
});
export const getAllTestimonialsError = (data) => ({
  type: GET_ALL_TESTIMONIALS_ERROR,
  payload: data,
});

export const createTestimonial = (data) => ({
  type: CREATE_TESTIMONIAL,
  payload: data,
});
export const createTestimonialSuccess = (data) => ({
  type: CREATE_TESTIMONIAL_SUCCESS,
  payload: data,
});
export const createTestimonialError = (data) => ({
  type: CREATE_TESTIMONIAL_ERROR,
  payload: data,
});

export const updateTestimonial = (data) => ({
  type: UPDATE_TESTIMONIAL,
  payload: data,
});
export const updateTestimonialSuccess = (data) => ({
  type: UPDATE_TESTIMONIAL_SUCCESS,
  payload: data,
});
export const updateTestimonialError = (data) => ({
  type: UPDATE_TESTIMONIAL_ERROR,
  payload: data,
});

export const deleteTestimonial = (data) => ({
  type: DELETE_TESTIMONIAL,
  payload: data,
});
export const deleteTestimonialSuccess = (data) => ({
  type: DELETE_TESTIMONIAL_SUCCESS,
  payload: data,
});
export const deleteTestimonialError = (data) => ({
  type: DELETE_TESTIMONIAL_ERROR,
  payload: data,
});
