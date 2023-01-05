import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_LANGUAGE_LEVEL,
  GET_SINGLE_LANGUAGE_LEVEL,
  CREATE_LANGUAGE_LEVEL,
  UPDATE_LANGUAGE_LEVEL,
  DELETE_LANGUAGE_LEVEL,
} from '../../types/options/language-level';

import {
  getAllLanguageLevel,
  getAllLanguageLevelError,
  getAllLanguageLevelSuccess,
  getSingleLanguageLevelError,
  getSingleLanguageLevelSuccess,
  createLanguageLevelError,
  createLanguageLevelSuccess,
  updateLanguageLevelError,
  updateLanguageLevelSuccess,
  deleteLanguageLevelError,
  deleteLanguageLevelSuccess,
} from './actions';

const getAllLanguageLevelAsync = async () => {
  return api
    .get(`/language-level`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllLanguageLevel() {
  try {
    const result = yield call(getAllLanguageLevelAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllLanguageLevelSuccess(result.data.data));
    } else {
      yield put(
        getAllLanguageLevelError(
          'Get All LanguageLevel Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllLanguageLevelError('Get All LanguageLevel Error !'));
  }
}

const getSingleLanguageLevelAsync = async (payload) => {
  await api
    .get(`/language-level/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleLanguageLevel(payload) {
  try {
    const result = yield call(getSingleLanguageLevelAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleLanguageLevelSuccess(result.data.data));
    } else {
      yield put(
        getSingleLanguageLevelError(
          'Get Single LanguageLevel Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getSingleLanguageLevelError('Get Single LanguageLevel Error !'));
  }
}

const createLanguageLevelAsync = async ({ payload }) => {
  return api
    .post(`/language-level`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateLanguageLevel(payload) {
  try {
    const result = yield call(createLanguageLevelAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createLanguageLevelSuccess(result.data.data));
      yield put(getAllLanguageLevel());
    } else {
      yield put(
        createLanguageLevelError(
          'Create LanguageLevel Response is not success!'
        )
      );
    }
  } catch (error) {
    console.log(error);
    yield put(createLanguageLevelError('Create LanguageLevel Error !'));
  }
}

const updateLanguageLevelAsync = async ({ payload }) => {
  console.log(payload);
  return api
    .put(`/language-level/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateLanguageLevel(payload) {
  try {
    const result = yield call(updateLanguageLevelAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateLanguageLevelSuccess(result.data.data));
      yield put(getAllLanguageLevel());
    } else {
      yield put(
        updateLanguageLevelError(
          'Update LanguageLevel Response is not success!'
        )
      );
    }
  } catch (error) {
    console.log(error);
    yield put(updateLanguageLevelError('Update LanguageLevel Error !'));
  }
}

const deleteLanguageLevelAsync = async ({ payload }) => {
  return api
    .delete(`/language-level/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteLanguageLevel(payload) {
  try {
    const result = yield call(deleteLanguageLevelAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteLanguageLevelSuccess());
      yield put(getAllLanguageLevel());
    } else {
      yield put(
        deleteLanguageLevelError(
          'Delete LanguageLevel Response is not success!'
        )
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteLanguageLevelError('Delete LanguageLevel Error !'));
  }
}

export function* watchGetAllLanguageLevel() {
  yield takeEvery(GET_ALL_LANGUAGE_LEVEL, GetAllLanguageLevel);
}
export function* watchCreateLanguageLevel() {
  yield takeEvery(CREATE_LANGUAGE_LEVEL, CreateLanguageLevel);
}
export function* watchGetSingleLanguageLevel() {
  yield takeEvery(GET_SINGLE_LANGUAGE_LEVEL, GetSingleLanguageLevel);
}
export function* watchUpdateLanguageLevel() {
  yield takeEvery(UPDATE_LANGUAGE_LEVEL, UpdateLanguageLevel);
}
export function* watchDeleteLanguageLevel() {
  yield takeEvery(DELETE_LANGUAGE_LEVEL, DeleteLanguageLevel);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllLanguageLevel),
    fork(watchGetSingleLanguageLevel),
    fork(watchCreateLanguageLevel),
    fork(watchUpdateLanguageLevel),
    fork(watchDeleteLanguageLevel),
  ]);
}
