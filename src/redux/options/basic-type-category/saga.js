import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  CREATE_BASIC_TYPE_CATEGORY,
  GET_ALL_BASIC_TYPE_CATEGORY,
  UPDATE_BASIC_TYPE_CATEGORY,
  DELETE_BASIC_TYPE_CATEGORY,
} from '../../types/options/basic-type-category';

import {
  createBasicTypeCategorySuccess,
  createBasicTypeCategoryError,
  getAllBasicTypeCategory,
  getAllBasicTypeCategorySuccess,
  getAllBasicTypeCategoryError,
  deleteBasicTypeCategorySuccess,
  deleteBasicTypeCategoryError,
  updateBasicTypeCategorySuccess,
  updateBasicTypeCategoryError,
} from './actions';

const getAllBasicTypeCategoryAsync = async () =>
  api
    .get(`/basic-type-category/`)
    .then((res) => res.data)
    .catch((error) => error);

function* GetAllBasicTypeCategory() {
  try {
    const result = yield call(getAllBasicTypeCategoryAsync);
    if (result.success) {
      yield put(getAllBasicTypeCategorySuccess(result.data));
    } else {
      yield put(
        getAllBasicTypeCategoryError('Get All Users Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllBasicTypeCategoryError('Get All Users Error !'));
  }
}

const createBasicTypeCategoryAsync = async ({ payload }) => {
  return api
    .post(`/basic-type-category`, payload)
    .then((res) => res.data)
    .catch((error) => error);
};

function* CreateBasicTypeCategory(data) {
  try {
    const result = yield call(createBasicTypeCategoryAsync, data);
    if (result.success) {
      yield put(createBasicTypeCategorySuccess(result.data));
      yield put(getAllBasicTypeCategory());
    } else {
      yield put(
        createBasicTypeCategoryError(
          'Create Basic TypCategorye is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      createBasicTypeCategoryError('Create Basic TypCategorye is Error!')
    );
  }
}

const deleteBasicTypeCategoryAsync = async ({ payload }) => {
  return api
    .delete(`/basic-type-category/${payload}`)
    .then((res) => res.data)
    .catch((error) => error);
};

function* DeleteBasicTypeCategory(id) {
  try {
    const result = yield call(deleteBasicTypeCategoryAsync, id);
    if (result.success) {
      yield put(deleteBasicTypeCategorySuccess(id));
      yield put(getAllBasicTypeCategory());
    } else {
      yield put(deleteBasicTypeCategoryError(result.message));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const updateBasicTypeCategoryAsync = async ({ payload }) => {
  return api
    .put(`/basic-type-category/${payload.id}`, payload)
    .then((res) => res.data)
    .catch((error) => error);
};

function* UpdateBasicTypeCategory(data) {
  try {
    const result = yield call(updateBasicTypeCategoryAsync, data);
    if (result.success) {
      yield put(updateBasicTypeCategorySuccess(result.data));
      yield put(getAllBasicTypeCategory());
    } else {
      yield put(updateBasicTypeCategoryError(result.message));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

// get all
export function* watchGetAllBasicTypeCategory() {
  yield takeEvery(GET_ALL_BASIC_TYPE_CATEGORY, GetAllBasicTypeCategory);
}

// create
export function* watchCreateBasicTypeCategory() {
  yield takeEvery(CREATE_BASIC_TYPE_CATEGORY, CreateBasicTypeCategory);
}

// delete
export function* watchDeleteBasicTypeCategory() {
  yield takeEvery(DELETE_BASIC_TYPE_CATEGORY, DeleteBasicTypeCategory);
}

// update
export function* watchUpdateBasicTypeCategory() {
  yield takeEvery(UPDATE_BASIC_TYPE_CATEGORY, UpdateBasicTypeCategory);
}

export default function* rootSaga() {
  yield all([
    fork(watchCreateBasicTypeCategory),
    fork(watchGetAllBasicTypeCategory),
    fork(watchDeleteBasicTypeCategory),
    fork(watchUpdateBasicTypeCategory),
  ]);
}
