import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_JOB,
  CREATE_JOB,
  UPDATE_JOB,
  DELETE_JOB,
} from '../../types/job/job';

import {
  getAllJob,
  getAllJobSuccess,
  getAllJobError,
  createJobSuccess,
  createJobError,
  updateJobSuccess,
  updateJobError,
  deleteJobSuccess,
  deleteJobError,
} from './actions';

const getAllJobAsync = async () => {
  return api
    .get(`/job`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllJob() {
  try {
    const result = yield call(getAllJobAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllJobSuccess(result.data));
    } else {
      yield put(getAllJobError('Get All Job Response is not success!'));
    }
  } catch (error) {
    yield put(getAllJobError('Get All Job Error !'));
  }
}

const createJobAsync = async ({ payload }) => {
  return api
    .post(`/job`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateJob(payload) {
  try {
    const result = yield call(createJobAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createJobSuccess(result.data.data));
      yield put(getAllJob());
    } else {
      yield put(createJobError('Create Job Response is not success!'));
    }
  } catch (error) {
    yield put(createJobError('Create Job Error !'));
  }
}

const updateJobAsync = async ({ payload }) => {
  return api
    .put(`/job/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateJob(payload) {
  try {
    const result = yield call(updateJobAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateJobSuccess(result.data.data));
      yield put(getAllJob());
    } else {
      yield put(updateJobError('Update Job Response is not success!'));
    }
  } catch (error) {
    yield put(updateJobError('Update Job Error !'));
  }
}

const deleteJobAsync = async (payload) => {
  return api
    .delete(`/job/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteJob(payload) {
  try {
    const result = yield call(deleteJobAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteJobSuccess(result.data.data));
      yield put(getAllJob());
    } else {
      yield put(deleteJobError('Delete Job Response is not success!'));
    }
  } catch (error) {
    yield put(deleteJobError('Delete Job Error !'));
  }
}

export function* watchGetAllJob() {
  yield takeEvery(GET_ALL_JOB, GetAllJob);
}
export function* watchCreateJob() {
  yield takeEvery(CREATE_JOB, CreateJob);
}
export function* watchUpdateJob() {
  yield takeEvery(UPDATE_JOB, UpdateJob);
}
export function* watchDeleteJob() {
  yield takeEvery(DELETE_JOB, DeleteJob);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllJob),
    fork(watchCreateJob),
    fork(watchUpdateJob),
    fork(watchDeleteJob),
  ]);
}
