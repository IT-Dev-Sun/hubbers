import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_JOB_CATEGORY,
  CREATE_JOB_CATEGORY,
  UPDATE_JOB_CATEGORY,
  DELETE_JOB_CATEGORY,
} from '../../types/job/job-category';

import {
  getAllJobCategory,
  getAllJobCategorySuccess,
  getAllJobCategoryError,
  createJobCategorySuccess,
  createJobCategoryError,
  updateJobCategorySuccess,
  updateJobCategoryError,
  deleteJobCategorySuccess,
  deleteJobCategoryError,
} from './actions';

const getAllJobCategoryAsync = async () => {
  return api
    .get(`/job-category`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllJobCategory() {
  try {
    const result = yield call(getAllJobCategoryAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllJobCategorySuccess(result.data));
    } else {
      yield put(
        getAllJobCategoryError('Get All Job Category Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllJobCategoryError('Get All Job Category Error !'));
  }
}

const createJobCategoryAsync = async ({ payload }) => {
  return api
    .post(`/job-category`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateJobCategory(payload) {
  try {
    const result = yield call(createJobCategoryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createJobCategorySuccess(result.data.data));
      yield put(getAllJobCategory());
    } else {
      yield put(
        createJobCategoryError('Create Job Category Response is not success!')
      );
    }
  } catch (error) {
    yield put(createJobCategoryError('Create Job Category Error !'));
  }
}

const updateJobCategoryAsync = async ({ payload }) => {
  return api
    .put(`/job-category/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateJobCategory(payload) {
  try {
    const result = yield call(updateJobCategoryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateJobCategorySuccess(result.data.data));
      yield put(getAllJobCategory());
    } else {
      yield put(
        updateJobCategoryError('Update Job Category Response is not success!')
      );
    }
  } catch (error) {
    yield put(updateJobCategoryError('Update Job Category Error !'));
  }
}

const deleteJobCategoryAsync = async (payload) => {
  return api
    .delete(`/job-category/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteJobCategory(payload) {
  try {
    const result = yield call(deleteJobCategoryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteJobCategorySuccess(result.data.data));
      yield put(getAllJobCategory());
    } else {
      yield put(
        deleteJobCategoryError('Delete Job Category Response is not success!')
      );
    }
  } catch (error) {
    yield put(deleteJobCategoryError('Delete Job Category Error !'));
  }
}

export function* watchGetAllJobCategory() {
  yield takeEvery(GET_ALL_JOB_CATEGORY, GetAllJobCategory);
}
export function* watchCreateJobCategory() {
  yield takeEvery(CREATE_JOB_CATEGORY, CreateJobCategory);
}
export function* watchUpdateJobCategory() {
  yield takeEvery(UPDATE_JOB_CATEGORY, UpdateJobCategory);
}
export function* watchDeleteJobCategory() {
  yield takeEvery(DELETE_JOB_CATEGORY, DeleteJobCategory);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllJobCategory),
    fork(watchCreateJobCategory),
    fork(watchUpdateJobCategory),
    fork(watchDeleteJobCategory),
  ]);
}
