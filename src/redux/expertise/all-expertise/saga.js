import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  CREATE_EXPERTISE,
  DELETE_EXPERTISE,
  GET_ALL_EXPERTISE,
  UPDATE_EXPERTISE,
} from '../../types/expertise/all-expertises';

import {
  getAllExpertisesSuccess,
  getAllExpertisesError,
  createExpertiseSuccess,
  createExpertiseError,
  updateExpertiseSuccess,
  updateExpertiseError,
  getAllExpertises,
  deleteExpertiseSuccess,
  deleteExpertiseError,
} from './actions';

const getAllExpertiseAsync = async () => {
  return api
    .get(`/expertise`)
    .then((res) => res)
    .catch((error) => error);
};

const CreateExpertiseAsync = async ({ payload }) => {
  return api
    .put(`/expertise`, { ...payload })
    .then((res) => res)
    .catch((error) => error);
};

const UpdateExpertiseAsync = async ({ payload }) => {
  return api
    .patch(`/expertise/${payload.id}`, { ...payload.data })
    .then((res) => res)
    .catch((error) => error);
};

const DeleteExpertiseAsync = async ({ payload }) => {
  return api
    .delete(`/expertise/draft/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllExpertise() {
  try {
    const result = yield call(getAllExpertiseAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllExpertisesSuccess(result.data.result));
    } else {
      yield put(getAllExpertisesError('Failed to get all expertise!'));
    }
  } catch (error) {
    yield put(getAllExpertisesError('Failed to get all expertise!'));
  }
}

function* CreateExpertise(payload) {
  try {
    const result = yield call(CreateExpertiseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllExpertises());
      yield put(createExpertiseSuccess(result.data.data));
    } else {
      yield put(createExpertiseError('Failed to create expertise!'));
    }
  } catch (error) {
    yield put(createExpertiseError('Failed to create expertise!'));
  }
}

function* UpdateExpertise(payload) {
  try {
    const result = yield call(UpdateExpertiseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateExpertiseSuccess(result.data.data));
      yield put(getAllExpertises());
    } else {
      yield put(updateExpertiseError('Failed to update expertise!'));
    }
  } catch (error) {
    yield put(updateExpertiseError('Failed to update expertise!'));
  }
}

function* DeleteExpertise(payload) {
  try {
    const result = yield call(DeleteExpertiseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteExpertiseSuccess(result.data.data));
      yield put(getAllExpertises());
    } else {
      yield put(deleteExpertiseError('Failed to delete expertise!'));
    }
  } catch (error) {
    yield put(deleteExpertiseError('Failed to delete expertise!'));
  }
}

export function* watchGetAllExpertise() {
  yield takeEvery(GET_ALL_EXPERTISE, GetAllExpertise);
}

export function* watchCreateExpertise() {
  yield takeEvery(CREATE_EXPERTISE, CreateExpertise);
}

export function* watchUpdateExpertise() {
  yield takeEvery(UPDATE_EXPERTISE, UpdateExpertise);
}

export function* watchDeleteExpertise() {
  yield takeEvery(DELETE_EXPERTISE, DeleteExpertise);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllExpertise)]);
  yield all([fork(watchCreateExpertise)]);
  yield all([fork(watchUpdateExpertise)]);
  yield all([fork(watchDeleteExpertise)]);
}
