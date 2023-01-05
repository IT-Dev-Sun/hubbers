import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../ApiConfig';

import {
  GET_ALL_TESTIMONIALS,
  CREATE_TESTIMONIAL,
  UPDATE_TESTIMONIAL,
  DELETE_TESTIMONIAL,
} from '../types/testimonials';

import {
  getAllTestimonials,
  getAllTestimonialsSuccess,
  getAllTestimonialsError,
  createTestimonialSuccess,
  createTestimonialError,
  updateTestimonialSuccess,
  updateTestimonialError,
  deleteTestimonialSuccess,
  deleteTestimonialError,
} from './actions';

const getAllTestimonialsAsync = async () => {
  return api
    .get(`/testimonials`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllTestimonials() {
  try {
    const result = yield call(getAllTestimonialsAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTestimonialsSuccess(result.data.data));
    } else {
      yield put(getAllTestimonialsError('Failed to get all testimonials!'));
    }
  } catch (error) {
    yield put(getAllTestimonialsError('Failed to get all testimonials!'));
  }
}

const createTestimonialAsync = async ({ payload }) => {
  return api
    .post(`/testimonials`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateTestimonial(payload) {
  try {
    const result = yield call(createTestimonialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createTestimonialSuccess(result.data.data));
      yield put(getAllTestimonials());
    } else {
      yield put(createTestimonialError('Failed to create testimonial!'));
    }
  } catch (error) {
    yield put(createTestimonialError('Failed to create testimonial!'));
  }
}

const updateTestimonialAsync = async ({ payload }) => {
  return api
    .put(`/testimonials/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateTestimonial(payload) {
  try {
    const result = yield call(updateTestimonialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateTestimonialSuccess(result.data.data));
      yield put(getAllTestimonials());
    } else {
      yield put(updateTestimonialError('Failed to update testimonial!'));
    }
  } catch (error) {
    yield put(updateTestimonialError('Failed to update testimonial!'));
  }
}

const deleteTestimonialAsync = async (payload) => {
  return api
    .delete(`/testimonials/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteTestimonial(payload) {
  try {
    const result = yield call(deleteTestimonialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTestimonialSuccess(result.data.data));
      yield put(getAllTestimonials());
    } else {
      yield put(deleteTestimonialError('Failed to delete testimonial!'));
    }
  } catch (error) {
    yield put(deleteTestimonialError('Failed to delete testimonial!'));
  }
}

export function* watchGetAllTestimonials() {
  yield takeEvery(GET_ALL_TESTIMONIALS, GetAllTestimonials);
}
export function* watchCreateTestimonial() {
  yield takeEvery(CREATE_TESTIMONIAL, CreateTestimonial);
}
export function* watchUpdateTestimonial() {
  yield takeEvery(UPDATE_TESTIMONIAL, UpdateTestimonial);
}
export function* watchDeleteTestimonial() {
  yield takeEvery(DELETE_TESTIMONIAL, DeleteTestimonial);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTestimonials),
    fork(watchCreateTestimonial),
    fork(watchUpdateTestimonial),
    fork(watchDeleteTestimonial),
  ]);
}
