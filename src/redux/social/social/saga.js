import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';
import { createSocialSuccess } from '../../actions';

import {
  CREATE_SOCIAL,
  DELETE_SOCIAL,
  GET_ALL_SOCIAL,
  UPDATE_SOCIAL,
} from '../../types/social/social';

import {
  getAllSocialSuccess,
  getAllSocialError,
  getAllSocial,
  createSocialError,
  updateSocialSuccess,
  updateSocialError,
  deleteSocialSuccess,
  deleteSocialError,
} from './actions';

const getAllSocialAsync = async () => {
  return api
    .get(`/social`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllSocial() {
  try {
    const result = yield call(getAllSocialAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllSocialSuccess(result.data.data));
    } else {
      yield put(getAllSocialError('Faild to get all social!'));
    }
  } catch (error) {
    yield put(getAllSocialError('Faild to get all social!'));
  }
}

export function* watchGetAllSocial() {
  yield takeEvery(GET_ALL_SOCIAL, GetAllSocial);
}
const createSocialAsync = async ({ payload }) => {
  return api
    .post(`/social`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateSocial(payload) {
  console.log(payload);
  try {
    const result = yield call(createSocialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createSocialSuccess(result.data.data));
      yield put(getAllSocial());
    } else {
      yield put(createSocialError('Create Social Response is not success!'));
    }
  } catch (error) {
    yield put(createSocialError('Create Social Error !'));
  }
}

const updateSocialAsync = async ({ payload }) => {
  return api
    .put(`/social/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateSocial(payload) {
  try {
    const result = yield call(updateSocialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateSocialSuccess(result.data.data));
      yield put(getAllSocial());
    } else {
      yield put(updateSocialError('Update Social Response is not success!'));
    }
  } catch (error) {
    yield put(updateSocialError('Update Social Error !'));
  }
}

const deleteSocialAsync = async ({ payload }) => {
  return api
    .delete(`/social/${payload}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteSocial(payload) {
  try {
    const result = yield call(deleteSocialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteSocialSuccess());
      yield put(getAllSocial());
    } else {
      yield put(deleteSocialError('Delete Social Response is not success!'));
    }
  } catch (error) {
    yield put(deleteSocialError('Delete Social Error !'));
  }
}

export function* watchCreateSocial() {
  yield takeEvery(CREATE_SOCIAL, CreateSocial);
}
export function* watchUpdateSocial() {
  yield takeEvery(UPDATE_SOCIAL, UpdateSocial);
}
export function* watchDeleteSocial() {
  yield takeEvery(DELETE_SOCIAL, DeleteSocial);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllSocial)]);
  yield all([fork(watchCreateSocial)]);
  yield all([fork(watchUpdateSocial)]);
  yield all([fork(watchDeleteSocial)]);
}
