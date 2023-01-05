import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_TIMEZONE,
  GET_SINGLE_TIMEZONE,
  CREATE_TIMEZONE,
  UPDATE_TIMEZONE,
  DELETE_TIMEZONE,
} from '../../types/options/timezone';

import {
  getAllTimezone,
  getAllTimezoneError,
  getAllTimezoneSuccess,
  getSingleTimezoneError,
  getSingleTimezoneSuccess,
  createTimezoneError,
  createTimezoneSuccess,
  updateTimezoneError,
  updateTimezoneSuccess,
  deleteTimezoneError,
  deleteTimezoneSuccess,
} from './actions';

const getAllTimezoneAsync = async () => {
  return api
    .get(`/timezone/`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllTimezone() {
  try {
    const result = yield call(getAllTimezoneAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTimezoneSuccess(result.data.data));
    } else {
      yield put(
        getAllTimezoneError('Get All Timezone Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllTimezoneError('Get All Timezone Error !'));
  }
}

const getSingleTimezoneAsync = async (payload) => {
  await api
    .get(`/timezone/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleTimezone(payload) {
  try {
    const result = yield call(getSingleTimezoneAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleTimezoneSuccess(result.data.data));
    } else {
      yield put(
        getSingleTimezoneError('Get Single Timezone Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleTimezoneError('Get Single Timezone Error !'));
  }
}

const createTimezoneAsync = async ({ payload }) => {
  return api
    .post(`/timezone`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateTimezone(payload) {
  try {
    const result = yield call(createTimezoneAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createTimezoneSuccess(result.data.data));
      yield put(getAllTimezone());
    } else {
      yield put(
        createTimezoneError('Create Timezone Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(createTimezoneError('Create Timezone Error !'));
  }
}

const updateTimezoneAsync = async ({ payload }) => {
  console.log(payload);
  return api
    .put(`/timezone/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateTimezone(payload) {
  try {
    const result = yield call(updateTimezoneAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateTimezoneSuccess(result.data.data));
      yield put(getAllTimezone());
    } else {
      yield put(
        updateTimezoneError('Update Timezone Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(updateTimezoneError('Update Timezone Error !'));
  }
}

const deleteTimezoneAsync = async ({ payload }) => {
  return api
    .delete(`/timezone/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteTimezone(payload) {
  try {
    const result = yield call(deleteTimezoneAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTimezoneSuccess());
      yield put(getAllTimezone());
    } else {
      yield put(
        deleteTimezoneError('Delete Timezone Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteTimezoneError('Delete Timezone Error !'));
  }
}

export function* watchGetAllTimezone() {
  yield takeEvery(GET_ALL_TIMEZONE, GetAllTimezone);
}
export function* watchCreateTimezone() {
  yield takeEvery(CREATE_TIMEZONE, CreateTimezone);
}
export function* watchGetSingleTimezone() {
  yield takeEvery(GET_SINGLE_TIMEZONE, GetSingleTimezone);
}
export function* watchUpdateTimezone() {
  yield takeEvery(UPDATE_TIMEZONE, UpdateTimezone);
}
export function* watchDeleteTimezone() {
  yield takeEvery(DELETE_TIMEZONE, DeleteTimezone);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTimezone),
    fork(watchGetSingleTimezone),
    fork(watchCreateTimezone),
    fork(watchUpdateTimezone),
    fork(watchDeleteTimezone),
  ]);
}
