import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../ApiConfig';

import {
  GET_ALL_ADMIN,
  CREATE_ADMIN,
  UPDATE_ADMIN,
  DELETE_ADMIN,
} from '../types/admin';

import {
  getAllAdmin,
  getAllAdminSuccess,
  getAllAdminError,
  createAdminSuccess,
  createAdminError,
  updateAdminSuccess,
  updateAdminError,
  deleteAdminSuccess,
  deleteAdminError,
} from './actions';

const getAllAdminAsync = async () => {
  return api
    .get(`/admin`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllAdmin() {
  try {
    const result = yield call(getAllAdminAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllAdminSuccess(result.data));
    } else {
      yield put(getAllAdminError('Get All Admin Response is not success!'));
    }
  } catch (error) {
    yield put(getAllAdminError('Get All Admin Error !'));
  }
}

const createAdminAsync = async ({ payload }) => {
  return api
    .post(`/admin`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateAdmin(payload) {
  try {
    const result = yield call(createAdminAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createAdminSuccess(result.data.data));
      yield put(getAllAdmin());
    } else {
      yield put(createAdminError('Create Admin Response is not success!'));
    }
  } catch (error) {
    yield put(createAdminError('Create Admin Error !'));
  }
}

const updateAdminAsync = async ({ payload }) => {
  return api
    .put(`/admin/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateAdmin(payload) {
  try {
    const result = yield call(updateAdminAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateAdminSuccess(result.data.data));
      yield put(getAllAdmin());
    } else {
      yield put(updateAdminError('Update Admin Response is not success!'));
    }
  } catch (error) {
    yield put(updateAdminError('Update Admin Error !'));
  }
}

const deleteAdminAsync = async (payload) => {
  return api
    .delete(`/admin/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteAdmin(payload) {
  try {
    const result = yield call(deleteAdminAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteAdminSuccess(result.data.data));
      yield put(getAllAdmin());
    } else {
      yield put(deleteAdminError('Delete Admin Response is not success!'));
    }
  } catch (error) {
    yield put(deleteAdminError('Delete Admin Error !'));
  }
}

export function* watchGetAllAdmin() {
  yield takeEvery(GET_ALL_ADMIN, GetAllAdmin);
}
export function* watchCreateAdmin() {
  yield takeEvery(CREATE_ADMIN, CreateAdmin);
}
export function* watchUpdateAdmin() {
  yield takeEvery(UPDATE_ADMIN, UpdateAdmin);
}
export function* watchDeleteAdmin() {
  yield takeEvery(DELETE_ADMIN, DeleteAdmin);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllAdmin),
    fork(watchCreateAdmin),
    fork(watchUpdateAdmin),
    fork(watchDeleteAdmin),
  ]);
}
