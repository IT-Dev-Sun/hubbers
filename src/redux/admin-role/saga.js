import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../ApiConfig';

import {
  GET_ALL_ADMIN_ROLE,
  CREATE_ADMIN_ROLE,
  UPDATE_ADMIN_ROLE,
  DELETE_ADMIN_ROLE,
} from '../types/admin-role';

import {
  getAllAdminRole,
  getAllAdminRoleSuccess,
  getAllAdminRoleError,
  createAdminRoleSuccess,
  createAdminRoleError,
  updateAdminRoleSuccess,
  updateAdminRoleError,
  deleteAdminRoleSuccess,
  deleteAdminRoleError,
} from './actions';

const getAllAdminRoleAsync = async () => {
  return api
    .get(`/admin-role`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllAdminRole() {
  try {
    const result = yield call(getAllAdminRoleAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllAdminRoleSuccess(result.data));
    } else {
      yield put(
        getAllAdminRoleError('Get All AdminRole Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllAdminRoleError('Get All AdminRole Error !'));
  }
}

const createAdminRoleAsync = async ({ payload }) => {
  return api
    .post(`/admin-role`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateAdminRole(payload) {
  try {
    const result = yield call(createAdminRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createAdminRoleSuccess(result.data.data));
      yield put(getAllAdminRole());
    } else {
      yield put(
        createAdminRoleError('Create AdminRole Response is not success!')
      );
    }
  } catch (error) {
    yield put(createAdminRoleError('Create AdminRole Error !'));
  }
}

const updateAdminRoleAsync = async ({ payload }) => {
  return api
    .put(`/admin-role/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateAdminRole(payload) {
  try {
    const result = yield call(updateAdminRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateAdminRoleSuccess(result.data.data));
      yield put(getAllAdminRole());
    } else {
      yield put(
        updateAdminRoleError('Update AdminRole Response is not success!')
      );
    }
  } catch (error) {
    yield put(updateAdminRoleError('Update AdminRole Error !'));
  }
}

const deleteAdminRoleAsync = async (payload) => {
  return api
    .delete(`/admin/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteAdminRole(payload) {
  try {
    const result = yield call(deleteAdminRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteAdminRoleSuccess(result.data.data));
      yield put(getAllAdminRole());
    } else {
      yield put(
        deleteAdminRoleError('Delete AdminRole Response is not success!')
      );
    }
  } catch (error) {
    yield put(deleteAdminRoleError('Delete AdminRole Error !'));
  }
}

export function* watchGetAllAdminRole() {
  yield takeEvery(GET_ALL_ADMIN_ROLE, GetAllAdminRole);
}
export function* watchCreateAdminRole() {
  yield takeEvery(CREATE_ADMIN_ROLE, CreateAdminRole);
}
export function* watchUpdateAdminRole() {
  yield takeEvery(UPDATE_ADMIN_ROLE, UpdateAdminRole);
}
export function* watchDeleteAdminRole() {
  yield takeEvery(DELETE_ADMIN_ROLE, DeleteAdminRole);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllAdminRole),
    fork(watchCreateAdminRole),
    fork(watchUpdateAdminRole),
    fork(watchDeleteAdminRole),
  ]);
}
