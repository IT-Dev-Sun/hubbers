import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_CURRENCY,
  GET_SINGLE_CURRENCY,
  CREATE_CURRENCY,
  UPDATE_CURRENCY,
  DELETE_CURRENCY,
} from '../../types/options/currency';

import {
  getAllCurrency,
  getAllCurrencyError,
  getAllCurrencySuccess,
  getSingleCurrencyError,
  getSingleCurrencySuccess,
  createCurrencyError,
  createCurrencySuccess,
  updateCurrencyError,
  updateCurrencySuccess,
  deleteCurrencyError,
  deleteCurrencySuccess,
} from './actions';

const getAllCurrencyAsync = async () => {
  return api
    .get(`/payment/currency/`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllCurrency() {
  try {
    const result = yield call(getAllCurrencyAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCurrencySuccess(result.data.result));
    } else {
      yield put(
        getAllCurrencyError('Get All Currency Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllCurrencyError('Get All Currency Error !'));
  }
}

const getSingleCurrencyAsync = async (payload) => {
  await api
    .get(`/payment/currency/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleCurrency(payload) {
  try {
    const result = yield call(getSingleCurrencyAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleCurrencySuccess(result.data.result));
    } else {
      yield put(
        getSingleCurrencyError('Get Single Currency Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleCurrencyError('Get Single Currency Error !'));
  }
}

const createCurrencyAsync = async ({ payload }) => {
  return api
    .post(`/payment/currency`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateCurrency(payload) {
  try {
    const result = yield call(createCurrencyAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createCurrencySuccess(result.data.result));
      yield put(getAllCurrency());
    } else {
      yield put(
        createCurrencyError('Create Currency Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(createCurrencyError('Create Currency Error !'));
  }
}

const updateCurrencyAsync = async ({ payload }) => {
  console.log(payload);
  return api
    .put(`/payment/currency/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateCurrency(payload) {
  try {
    const result = yield call(updateCurrencyAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateCurrencySuccess(result.data.result));
      yield put(getAllCurrency());
    } else {
      yield put(
        updateCurrencyError('Update Currency Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(updateCurrencyError('Update Currency Error !'));
  }
}

const deleteCurrencyAsync = async ({ payload }) => {
  return api
    .delete(`/payment/currency/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteCurrency(payload) {
  try {
    const result = yield call(deleteCurrencyAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteCurrencySuccess());
      yield put(getAllCurrency());
    } else {
      yield put(
        deleteCurrencyError('Delete Currency Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCurrencyError('Delete Currency Error !'));
  }
}

export function* watchGetAllCurrency() {
  yield takeEvery(GET_ALL_CURRENCY, GetAllCurrency);
}
export function* watchCreateCurrency() {
  yield takeEvery(CREATE_CURRENCY, CreateCurrency);
}
export function* watchGetSingleCurrency() {
  yield takeEvery(GET_SINGLE_CURRENCY, GetSingleCurrency);
}
export function* watchUpdateCurrency() {
  yield takeEvery(UPDATE_CURRENCY, UpdateCurrency);
}
export function* watchDeleteCurrency() {
  yield takeEvery(DELETE_CURRENCY, DeleteCurrency);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCurrency),
    fork(watchGetSingleCurrency),
    fork(watchCreateCurrency),
    fork(watchUpdateCurrency),
    fork(watchDeleteCurrency),
  ]);
}
