import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_COUNTRY,
  GET_SINGLE_COUNTRY,
  CREATE_COUNTRY,
  UPDATE_COUNTRY,
  DELETE_COUNTRY,
} from '../../types/options/country';

import {
  getAllCountry,
  getAllCountryError,
  getAllCountrySuccess,
  getSingleCountryError,
  getSingleCountrySuccess,
  createCountryError,
  createCountrySuccess,
  updateCountryError,
  updateCountrySuccess,
  deleteCountryError,
  deleteCountrySuccess,
} from './actions';

const getAllCountryAsync = async () => {
  return api
    .get(`/country/`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllCountry() {
  try {
    const result = yield call(getAllCountryAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCountrySuccess(result.data.data));
    } else {
      yield put(getAllCountryError('Get All Country Response is not success!'));
    }
  } catch (error) {
    yield put(getAllCountryError('Get All Country Error !'));
  }
}

const getSingleCountryAsync = async (payload) => {
  await api
    .get(`/country/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleCountry(payload) {
  try {
    const result = yield call(getSingleCountryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleCountrySuccess(result.data.data));
    } else {
      yield put(
        getSingleCountryError('Get Single Country Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleCountryError('Get Single Country Error !'));
  }
}

const createCountryAsync = async ({ payload }) => {
  return api
    .post(`/country`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateCountry(payload) {
  try {
    const result = yield call(createCountryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createCountrySuccess(result.data.data));
      yield put(getAllCountry());
    } else {
      yield put(createCountryError('Create Country Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(createCountryError('Create Country Error !'));
  }
}

const updateCountryAsync = async ({ payload }) => {
  return api
    .put(`/country/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateCountry(payload) {
  try {
    const result = yield call(updateCountryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateCountrySuccess(result.data.data));
      yield put(getAllCountry());
    } else {
      yield put(updateCountryError('Update Country Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(updateCountryError('Update Country Error !'));
  }
}

const deleteCountryAsync = async ({ payload }) => {
  return api
    .delete(`/country/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteCountry(payload) {
  try {
    const result = yield call(deleteCountryAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteCountrySuccess());
      yield put(getAllCountry());
    } else {
      yield put(deleteCountryError('Delete Country Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCountryError('Delete Country Error !'));
  }
}

export function* watchGetAllCountry() {
  yield takeEvery(GET_ALL_COUNTRY, GetAllCountry);
}
export function* watchCreateCountry() {
  yield takeEvery(CREATE_COUNTRY, CreateCountry);
}
export function* watchGetSingleCountry() {
  yield takeEvery(GET_SINGLE_COUNTRY, GetSingleCountry);
}
export function* watchUpdateCountry() {
  yield takeEvery(UPDATE_COUNTRY, UpdateCountry);
}
export function* watchDeleteCountry() {
  yield takeEvery(DELETE_COUNTRY, DeleteCountry);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCountry),
    fork(watchGetSingleCountry),
    fork(watchCreateCountry),
    fork(watchUpdateCountry),
    fork(watchDeleteCountry),
  ]);
}
