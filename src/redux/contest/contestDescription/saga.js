import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_CONTEST_DESCRIPTION,
  CREATE_CONTEST_DESCRIPTION,
  UPDATE_CONTEST_DESCRIPTION,
  DELETE_CONTEST_DESCRIPTION,
  // UPDATE_PARTNER,
  // DELETE_PARTNER,
} from '../../types/contest/contestType';

import {
  getAllDescription,
  getAllDescriptionSuccess,
  getAllDescriptionError,
  createDescriptionSuccess,
  createDescriptionError,
  updateDescriptionSuccess,
  updateDescriptionError,
  deleteDescriptionSuccess,
  deleteDescriptionError,
} from './actions';

const getAllDescriptionAsync = async () => {
  return api
    .get(`/contest/contest-description`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllDescription() {
  try {
    const result = yield call(getAllDescriptionAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllDescriptionSuccess(result.data));
    } else {
      yield put(
        getAllDescriptionError('Get All Description Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllDescriptionError('Get All Description Error !'));
  }
}

const createDescriptionAsync = async (payload) => {
  return api
    .post('/contest/contest-description', {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateDescription(payload) {
  try {
    const result = yield call(createDescriptionAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createDescriptionSuccess(result.data.data));
      yield put(getAllDescription());
    } else {
      yield put(
        createDescriptionError('Create Description Response is not success!')
      );
    }
  } catch (error) {
    yield put(createDescriptionError('Create Description Error !'));
  }
}

const updateDescriptionAsync = async (payload) => {
  return api
    .put(`/contest/contest-description/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateDescription(payload) {
  try {
    const result = yield call(updateDescriptionAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateDescriptionSuccess(result.data.data));
      yield put(getAllDescription());
    } else {
      yield put(
        updateDescriptionError('Update Description Response is not success!')
      );
    }
  } catch (error) {
    yield put(updateDescriptionError('Update Description Error !'));
  }
}

const deleteDescriptionAsync = async (id) => {
  return api
    .delete(`/contest/contest-description/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteDescription(payload) {
  try {
    const result = yield call(deleteDescriptionAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteDescriptionSuccess(result.data.data));
      yield put(getAllDescription());
    } else {
      yield put(
        deleteDescriptionError('Delete Description Response is not success!')
      );
    }
  } catch (error) {
    yield put(deleteDescriptionError('Delete Description Error !'));
  }
}

export function* watchGetAllDescription() {
  yield takeEvery(GET_ALL_CONTEST_DESCRIPTION, GetAllDescription);
}

export function* watchCreateDescription() {
  yield takeEvery(CREATE_CONTEST_DESCRIPTION, CreateDescription);
}

export function* watchUpdateDescription() {
  yield takeEvery(UPDATE_CONTEST_DESCRIPTION, UpdateDescription);
}

export function* watchDeleteDescription() {
  yield takeEvery(DELETE_CONTEST_DESCRIPTION, DeleteDescription);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllDescription),
    fork(watchCreateDescription),
    fork(watchUpdateDescription),
    fork(watchDeleteDescription),
  ]);
}
