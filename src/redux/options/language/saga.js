import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_LANGUAGE,
  GET_SINGLE_LANGUAGE,
  CREATE_LANGUAGE,
  UPDATE_LANGUAGE,
  DELETE_LANGUAGE,
} from '../../types/options/language';

import {
  getAllLanguage,
  getAllLanguageError,
  getAllLanguageSuccess,
  getSingleLanguageError,
  getSingleLanguageSuccess,
  createLanguageError,
  createLanguageSuccess,
  updateLanguageError,
  updateLanguageSuccess,
  deleteLanguageError,
  deleteLanguageSuccess,
} from './actions';

const getAllLanguageAsync = async () => {
  return api
    .get(`/language`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllLanguage() {
  try {
    const result = yield call(getAllLanguageAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllLanguageSuccess(result.data.data));
    } else {
      yield put(
        getAllLanguageError('Get All Language Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllLanguageError('Get All Language Error !'));
  }
}

const getSingleLanguageAsync = async (payload) => {
  await api
    .get(`Language/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleLanguage(payload) {
  try {
    const result = yield call(getSingleLanguageAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleLanguageSuccess(result.data.data));
    } else {
      yield put(
        getSingleLanguageError('Get Single Language Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleLanguageError('Get Single Language Error !'));
  }
}

const createLanguageAsync = async ({ payload }) => {
  return api
    .post(`/language`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateLanguage(payload) {
  try {
    const result = yield call(createLanguageAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createLanguageSuccess(result.data.data));
      yield put(getAllLanguage());
    } else {
      yield put(
        createLanguageError('Create Language Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(createLanguageError('Create Language Error !'));
  }
}

const updateLanguageAsync = async ({ payload }) => {
  console.log(payload);
  return api
    .put(`/language/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateLanguage(payload) {
  try {
    const result = yield call(updateLanguageAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateLanguageSuccess(result.data.data));
      yield put(getAllLanguage());
    } else {
      yield put(
        updateLanguageError('Update Language Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(updateLanguageError('Update Language Error !'));
  }
}

const deleteLanguageAsync = async ({ payload }) => {
  return api
    .delete(`/language/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteLanguage(payload) {
  try {
    const result = yield call(deleteLanguageAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteLanguageSuccess());
      yield put(getAllLanguage());
    } else {
      yield put(
        deleteLanguageError('Delete Language Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteLanguageError('Delete Language Error !'));
  }
}

export function* watchGetAllLanguage() {
  yield takeEvery(GET_ALL_LANGUAGE, GetAllLanguage);
}
export function* watchCreateLanguage() {
  yield takeEvery(CREATE_LANGUAGE, CreateLanguage);
}
export function* watchGetSingleLanguage() {
  yield takeEvery(GET_SINGLE_LANGUAGE, GetSingleLanguage);
}
export function* watchUpdateLanguage() {
  yield takeEvery(UPDATE_LANGUAGE, UpdateLanguage);
}
export function* watchDeleteLanguage() {
  yield takeEvery(DELETE_LANGUAGE, DeleteLanguage);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllLanguage),
    fork(watchGetSingleLanguage),
    fork(watchCreateLanguage),
    fork(watchUpdateLanguage),
    fork(watchDeleteLanguage),
  ]);
}
