import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../ApiConfig';

import {
  GET_ALL_USER,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../types/user';

import {
  getAllUsersSuccess,
  getAllUsersError,
  getUsersSuccess,
  getUsersError,
  createUserSuccess,
  createUserError,
  getAllUsers,
  deleteUserSuccess,
  deleteUserError,
} from './actions';

const getAllUsersAsync = async () =>
  api
    .get(`/user`)
    .then((res) => res)
    .catch((error) => error);

function* GetAllUsers() {
  try {
    const result = yield call(getAllUsersAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllUsersSuccess(result.data));
    } else {
      yield put(getAllUsersError('Get All Users Response is not success!'));
    }
  } catch (error) {
    yield put(getAllUsersError('Get All Users Error !'));
  }
}

export function* watchGetAllUsers() {
  yield takeEvery(GET_ALL_USER, GetAllUsers);
}

const getUsersAsync = async ({ payload }) =>
  api
    .get(`/user/${payload}`)
    .then((res) => res)
    .catch((error) => error);

function* getUser(userId) {
  try {
    const result = yield call(getUsersAsync, userId);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getUsersSuccess(result.data.result));
    } else {
      yield put(getUsersError('Get User Response is not success!'));
    }
  } catch (error) {
    yield put(getUsersError('Get User Error !'));
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER, getUser);
}

const updateUserAsync = async ({ payload }) =>
  api
    .put(`/user/detail/${payload.id}`, { ...payload.data })
    .then((res) => res)
    .catch((error) => error);

function* updateUser(user) {
  try {
    const result = yield call(updateUserAsync, user);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getUsersSuccess(result.data.result));
      yield put(getAllUsers());
    } else {
      yield put(getUsersError('Get User Response is not success!'));
    }
  } catch (error) {
    yield put(getUsersError('Get User Error !'));
  }
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUser);
}

const createUserAsync = async ({ payload }) =>
  api
    .post(`/user`, { ...payload })
    .then((res) => res)
    .catch((error) => error);

function* createUser(user) {
  try {
    const result = yield call(createUserAsync, user);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createUserSuccess(result.data.result));
      yield put(getAllUsers());
    } else {
      yield put(createUserError('Get User Response is not success!'));
    }
  } catch (error) {
    yield put(createUserError('Get User Error !'));
  }
}

export function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUser);
}

const deleteUserAsync = async (payload) => {
  return api
    .delete(`/user/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteUser(payload) {
  try {
    const result = yield call(deleteUserAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      console.log(result.data);
      yield put(deleteUserSuccess(result.data.result));
      yield put(getAllUsers());
    } else {
      yield put(deleteUserError('Delete User Response is not success!'));
    }
  } catch (error) {
    yield put(deleteUserError('Delete User Error !'));
  }
}

export function* watchdeleteUser() {
  yield takeEvery(DELETE_USER, DeleteUser);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllUsers),
    fork(watchGetUser),
    fork(watchUpdateUser),
    fork(watchCreateUser),
    fork(watchdeleteUser),
  ]);
}
