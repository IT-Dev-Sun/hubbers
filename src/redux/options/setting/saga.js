import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_SETTING,
  CREATE_SETTING,
  UPDATE_SETTING,
  DELETE_SETTING,
} from '../../types/options/setting';

import {
  getAllSetting,
  getAllSettingError,
  getAllSettingSuccess,
  createSettingError,
  createSettingSuccess,
  updateSettingError,
  updateSettingSuccess,
  deleteSettingError,
  deleteSettingSuccess,
} from './actions';

const getAllSettingAsync = async () => {
  return api
    .get(`/setting`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllSetting() {
  try {
    const result = yield call(getAllSettingAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllSettingSuccess(result.data.data));
    } else {
      yield put(getAllSettingError('Faild to get all setting!'));
    }
  } catch (error) {
    yield put(getAllSettingError('Faild to get all setting!'));
  }
}

const createSettingAsync = async ({ payload }) => {
  return api
    .post(`/setting`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateSetting(payload) {
  try {
    const result = yield call(createSettingAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createSettingSuccess(result.data.data));
      yield put(getAllSetting());
    } else {
      yield put(createSettingError('Faild to create setting!'));
    }
  } catch (error) {
    yield put(createSettingError('Faild to create setting!'));
  }
}

const updateSettingAsync = async ({ payload }) => {
  console.log(payload);
  return api
    .put(`/setting/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateSetting(payload) {
  try {
    const result = yield call(updateSettingAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateSettingSuccess(result.data.data));
      yield put(getAllSetting());
    } else {
      yield put(updateSettingError('Faild to update setting!'));
    }
  } catch (error) {
    yield put(updateSettingError('Faild to update setting!'));
  }
}

const deleteSettingAsync = async ({ payload }) => {
  return api
    .delete(`/setting/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteSetting(payload) {
  try {
    const result = yield call(deleteSettingAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteSettingSuccess());
      yield put(getAllSetting());
    } else {
      yield put(deleteSettingError('Faild to delete setting!'));
    }
  } catch (error) {
    yield put(deleteSettingError('Faild to delete setting!'));
  }
}

export function* watchGetAllSetting() {
  yield takeEvery(GET_ALL_SETTING, GetAllSetting);
}
export function* watchCreateSetting() {
  yield takeEvery(CREATE_SETTING, CreateSetting);
}
export function* watchUpdateSetting() {
  yield takeEvery(UPDATE_SETTING, UpdateSetting);
}
export function* watchDeleteSetting() {
  yield takeEvery(DELETE_SETTING, DeleteSetting);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllSetting),
    fork(watchCreateSetting),
    fork(watchUpdateSetting),
    fork(watchDeleteSetting),
  ]);
}
