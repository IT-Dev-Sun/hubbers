import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../../ApiConfig';

import {
  GET_ALL_COURSE_STRUCTURE,
  CREATE_COURSE_STRUCTURE,
  UPDATE_COURSE_STRUCTURE,
  DELETE_COURSE_STRUCTURE,
} from '../../../types/community/course/structure';

import {
  getAllCourseStructure,
  getAllCourseStructureSuccess,
  getAllCourseStructureError,
  createCourseStructureSuccess,
  createCourseStructureError,
  updateCourseStructureSuccess,
  updateCourseStructureError,
  deleteCourseStructureSuccess,
  deleteCourseStructureError,
} from './actions';

const getAllCourseStructureAsync = async () => {
  return api
    .get(`/community/course/course-structure`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllCourseStructure() {
  try {
    const result = yield call(getAllCourseStructureAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCourseStructureSuccess(result.data.result));
    } else {
      yield put(
        getAllCourseStructureError(
          'Get All CourseStructure Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllCourseStructureError('Get All CourseStructure Error !'));
  }
}

const createCourseStructureAsync = async ({ payload }) => {
  return api
    .post(`/community/course/course-structure`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateCourseStructure(payload) {
  try {
    const result = yield call(createCourseStructureAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      if (result.data.errors) {
        yield put(createCourseStructureError(result.data.errors));
      }
      if (result.data.result) {
        yield put(createCourseStructureSuccess(result.data.result));
      }
      yield put(getAllCourseStructure());
    } else {
      yield put(
        createCourseStructureError(
          'Create CourseStructure Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(createCourseStructureError('Create CourseStructure Error !'));
  }
}

const updateCourseStructureAsync = async ({ payload }) => {
  return api
    .put(`/community/course/course-structure/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateCourseStructure(payload) {
  try {
    const result = yield call(updateCourseStructureAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateCourseStructureSuccess(result.data.result));
      yield put(getAllCourseStructure());
    } else {
      yield put(
        updateCourseStructureError(
          'Update CourseStructure Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(updateCourseStructureError('Update CourseStructure Error !'));
  }
}

const deleteCourseStructureAsync = async (payload) => {
  return api
    .delete(`/community/course/course-structure/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteCourseStructure(payload) {
  try {
    const result = yield call(deleteCourseStructureAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteCourseStructureSuccess(result.data.result));
      yield put(getAllCourseStructure());
    } else {
      yield put(
        deleteCourseStructureError(
          'Delete CourseStructure Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(deleteCourseStructureError('Delete CourseStructure Error !'));
  }
}

export function* watchGetAllCourseStructure() {
  yield takeEvery(GET_ALL_COURSE_STRUCTURE, GetAllCourseStructure);
}
export function* watchCreateCourseStructure() {
  yield takeEvery(CREATE_COURSE_STRUCTURE, CreateCourseStructure);
}
export function* watchUpdateCourseStructure() {
  yield takeEvery(UPDATE_COURSE_STRUCTURE, UpdateCourseStructure);
}
export function* watchDeleteCourseStructure() {
  yield takeEvery(DELETE_COURSE_STRUCTURE, DeleteCourseStructure);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCourseStructure),
    fork(watchCreateCourseStructure),
    fork(watchUpdateCourseStructure),
    fork(watchDeleteCourseStructure),
  ]);
}
