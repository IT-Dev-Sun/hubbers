import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  CREATE_BASIC_TYPE,
  GET_ALL_BASIC_TYPE,
  GET_PARENT_BASIC_TYPE,
  UPDATE_BASIC_TYPE,
  DELETE_BASIC_TYPE,
  ORDER_BASIC_TYPE,
} from '../../types/options/basic-type';

import {
  createBasicTypeSuccess,
  createBasicTypeError,
  getAllBasicType,
  getAllBasicTypeSuccess,
  getAllBasicTypeError,
  getParentBasicTypeSuccess,
  getParentBasicTypeError,
  updateBasicTypeSuccess,
  updateBasicTypeError,
  deleteBasicTypeSuccess,
  deleteBasicTypeError,
  orderBasicTypeSuccess,
  orderBasicTypeError,
} from './actions';

const getAllBasicTypeAsync = async (payload) =>
  api
    .get(`/basic-type/${payload.payload}`)
    .then((res) => res.data)
    .catch((error) => error);

function* GetAllBasicType(payload) {
  try {
    const result = yield call(getAllBasicTypeAsync, payload);
    if (result.success) {
      yield put(getAllBasicTypeSuccess(result.data));
    } else {
      yield put(getAllBasicTypeError('Get All Users Response is not success!'));
    }
  } catch (error) {
    yield put(getAllBasicTypeError('Get All Users Error !'));
  }
}

const getParentBasicTypeAsync = async (payload) =>
  api
    .get(`/basic-type/${payload.payload}`)
    .then((res) => res.data)
    .catch((error) => error);

function* GetParentBasicType(payload) {
  try {
    const result = yield call(getParentBasicTypeAsync, payload);
    if (result.success) {
      yield put(getParentBasicTypeSuccess(result.data));
    } else {
      yield put(
        getParentBasicTypeError('Get All Users Response is not success!')
      );
    }
  } catch (error) {
    yield put(getParentBasicTypeError('Get All Users Error !'));
  }
}

const createBasicTypeAsync = async ({ payload }) => {
  return api
    .post(`/basic-type`, payload)
    .then((res) => res.data)
    .catch((error) => error);
};

function* CreateBasicType(data) {
  try {
    const result = yield call(createBasicTypeAsync, data);
    if (result.success) {
      yield put(createBasicTypeSuccess(result.data));
      yield put(getAllBasicType(data.payload.categoryId));
    } else {
      yield put(createBasicTypeError('Create Basic Type is not success!'));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const updateBasicTypeAsync = async ({ payload }) => {
  return api
    .put(`/basic-type/${payload.id}`, payload)
    .then((res) => res.data)
    .catch((error) => error);
};

function* UpdateBasicType(data) {
  try {
    const result = yield call(updateBasicTypeAsync, data);
    if (result.success) {
      yield put(updateBasicTypeSuccess(result.data));
      yield put(getAllBasicType(data.payload.categoryId));
    } else {
      yield put(updateBasicTypeError('Update Basic Type is not success!'));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const deleteBasicTypeAsync = async ({ payload }) => {
  return api
    .delete(`/basic-type/${payload.id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

function* DeleteBasicType(data) {
  try {
    const result = yield call(deleteBasicTypeAsync, data);
    if (result.success) {
      yield put(deleteBasicTypeSuccess(result));
      yield put(getAllBasicType(data.payload.currentCategoryId));
    } else {
      yield put(deleteBasicTypeError('Delete Basic Type is not success!'));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const orderBasicTypeAsync = async ({ payload }) => {
  return api
    .get(`/basic-type/${payload.id}/${payload.flag}`)
    .then((res) => res.data)
    .catch((error) => error);
};

function* OrderBasicType(data) {
  try {
    const result = yield call(orderBasicTypeAsync, data);
    if (result.success) {
      yield put(orderBasicTypeSuccess(result));
    } else {
      yield put(orderBasicTypeError('Order Basic Type is not success!'));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

export function* watchGetAllBasicType() {
  yield takeEvery(GET_ALL_BASIC_TYPE, GetAllBasicType);
}
export function* watchGetParentBasicType() {
  yield takeEvery(GET_PARENT_BASIC_TYPE, GetParentBasicType);
}
export function* watchCreateBasicType() {
  yield takeEvery(CREATE_BASIC_TYPE, CreateBasicType);
}
export function* watchUpdateBasicType() {
  yield takeEvery(UPDATE_BASIC_TYPE, UpdateBasicType);
}
export function* watchDeleteBasicType() {
  yield takeEvery(DELETE_BASIC_TYPE, DeleteBasicType);
}
export function* watchOrderBasicType() {
  yield takeEvery(ORDER_BASIC_TYPE, OrderBasicType);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllBasicType),
    fork(watchGetParentBasicType),
    fork(watchCreateBasicType),
    fork(watchUpdateBasicType),
    fork(watchDeleteBasicType),
    fork(watchOrderBasicType),
  ]);
}
