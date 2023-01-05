import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../../ApiConfig';

import {
  GET_ALL_COURSE,
  CREATE_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  GET_DETAIL_COURSE,
  ADD_UNIT,
  GET_UNIT_DETAIL,
  UPDATE_UNIT,
} from '../../../types/community/course/main';

import {
  getAllCourse,
  getAllCourseSuccess,
  getAllCourseError,
  createCourseSuccess,
  createCourseError,
  updateCourseSuccess,
  updateCourseError,
  deleteCourseSuccess,
  deleteCourseError,
  getDetailCourseSuccess,
  getDetailCourseError,
  addUnitSuccess,
  addUnitError,
  getDetailCourse,
  getUnitDetailSuccess,
  getUnitDetailError,
  updateUnitSuccess,
  updateUnitError,
} from './actions';

const getAllCourseAsync = async () => {
  return api
    .get(`/community/course`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllCourse() {
  try {
    const result = yield call(getAllCourseAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCourseSuccess(result.data.data));
    } else {
      yield put(getAllCourseError('Faild to get all courses!'));
    }
  } catch (error) {
    yield put(getAllCourseError('Faild to get all courses!'));
  }
}

const getDetailCourseAsync = async (data) => {
  return api
    .get(`/community/course/${data.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetDetailCourse(data) {
  try {
    const result = yield call(getDetailCourseAsync, data);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getDetailCourseSuccess(result.data.data));
    } else {
      yield put(getDetailCourseError('Faild to get a course detail!'));
    }
  } catch (error) {
    yield put(getDetailCourseError('Faild to get a course detail!'));
  }
}

const createCourseAsync = async ({ payload }) => {
  return api
    .post(`/community/course`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateCourse(payload) {
  try {
    const result = yield call(createCourseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      if (result.data.errors) {
        yield put(createCourseError(result.data.errors));
      }
      if (result.data.result) {
        yield put(createCourseSuccess(result.data.result));
      }
      yield put(getAllCourse());
    } else {
      yield put(createCourseError('Faild to create course!'));
    }
  } catch (error) {
    yield put(createCourseError('Faild to create course!'));
  }
}

const updateCourseAsync = async ({ payload }) => {
  return api
    .put(`/community/course/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateCourse(payload) {
  try {
    const result = yield call(updateCourseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateCourseSuccess(result.data.result));
      yield put(getAllCourse());
    } else {
      yield put(updateCourseError('Faild to update course!'));
    }
  } catch (error) {
    yield put(updateCourseError('Faild to update course!'));
  }
}

const deleteCourseAsync = async (payload) => {
  return api
    .delete(`/community/course/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteCourse(payload) {
  try {
    const result = yield call(deleteCourseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteCourseSuccess(result.data.result));
      yield put(getAllCourse());
    } else {
      yield put(deleteCourseError('Faild to delete course!'));
    }
  } catch (error) {
    yield put(deleteCourseError('Faild to delete course!'));
  }
}

const addUnitAsync = async (payload) => {
  return api
    .post(`/community/course/${payload.payload.unit}`, {
      ...payload.payload.data,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* AddUnit(payload) {
  try {
    const result = yield call(addUnitAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(addUnitSuccess(result.data.result));
      yield put(getDetailCourse(payload.payload.courseId));
    } else {
      yield put(addUnitError('Faild to add unit!'));
    }
  } catch (error) {
    yield put(addUnitError('Faild to add unit!'));
  }
}

const getUnitDetailAsync = async (payload) => {
  return api
    .get(`/community/course/${payload.payload?.t}/${payload.payload?.id}`, {
      ...payload.payload.data,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* GetUnitDetail(payload) {
  try {
    const result = yield call(getUnitDetailAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getUnitDetailSuccess(result.data.data));
    } else {
      yield put(getUnitDetailError('Faild to add unit!'));
    }
  } catch (error) {
    yield put(getUnitDetailError('Faild to add unit!'));
  }
}

const updateUnitAsync = async (payload) => {
  return api
    .put(`/community/course/${payload.payload?.t}/${payload.payload?.id}`, {
      ...payload.payload.data,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateUnit(payload) {
  try {
    const result = yield call(updateUnitAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateUnitSuccess(result.data.result));
      yield put(getDetailCourse(payload.payload.courseId));
    } else {
      yield put(updateUnitError('Faild to add unit!'));
    }
  } catch (error) {
    yield put(updateUnitError('Faild to add unit!'));
  }
}

export function* watchGetAllCourse() {
  yield takeEvery(GET_ALL_COURSE, GetAllCourse);
}
export function* watchGetDetailAllCourse() {
  yield takeEvery(GET_DETAIL_COURSE, GetDetailCourse);
}
export function* watchCreateCourse() {
  yield takeEvery(CREATE_COURSE, CreateCourse);
}
export function* watchUpdateCourse() {
  yield takeEvery(UPDATE_COURSE, UpdateCourse);
}
export function* watchDeleteCourse() {
  yield takeEvery(DELETE_COURSE, DeleteCourse);
}
export function* watchAddUnit() {
  yield takeEvery(ADD_UNIT, AddUnit);
}
export function* watchGetUnitDetail() {
  yield takeEvery(GET_UNIT_DETAIL, GetUnitDetail);
}
export function* watchUpdateUnit() {
  yield takeEvery(UPDATE_UNIT, UpdateUnit);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCourse),
    fork(watchGetDetailAllCourse),
    fork(watchCreateCourse),
    fork(watchUpdateCourse),
    fork(watchDeleteCourse),
    fork(watchAddUnit),
    fork(watchGetUnitDetail),
    fork(watchUpdateUnit),
  ]);
}
