import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_PARTNER,
  CREATE_PARTNER,
  UPDATE_PARTNER,
  DELETE_PARTNER,
} from '../../types/partner/partner';

import {
  getAllPartner,
  getAllPartnerSuccess,
  getAllPartnerError,
  createPartnerSuccess,
  createPartnerError,
  updatePartnerSuccess,
  updatePartnerError,
  deletePartnerSuccess,
  deletePartnerError,
} from './actions';

const getAllPartnerAsync = async () => {
  return api
    .get(`/partner`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllPartner() {
  try {
    const result = yield call(getAllPartnerAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllPartnerSuccess(result.data));
    } else {
      yield put(getAllPartnerError('Get All Partner Response is not success!'));
    }
  } catch (error) {
    yield put(getAllPartnerError('Get All Partner Error !'));
  }
}

const createPartnerAsync = async ({ payload }) => {
  return api
    .post(`/partner`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreatePartner(payload) {
  try {
    const result = yield call(createPartnerAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createPartnerSuccess(result.data.data));
      yield put(getAllPartner());
    } else {
      yield put(createPartnerError('Create Partner Response is not success!'));
    }
  } catch (error) {
    yield put(createPartnerError('Create Partner Error !'));
  }
}

const updatePartnerAsync = async ({ payload }) => {
  return api
    .put(`/partner/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdatePartner(payload) {
  try {
    const result = yield call(updatePartnerAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updatePartnerSuccess(result.data.data));
      yield put(getAllPartner());
    } else {
      yield put(updatePartnerError('Update Partner Response is not success!'));
    }
  } catch (error) {
    yield put(updatePartnerError('Update Partner Error !'));
  }
}

const deletePartnerAsync = async (payload) => {
  return api
    .delete(`/partner/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeletePartner(payload) {
  try {
    const result = yield call(deletePartnerAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deletePartnerSuccess(result.data.data));
      yield put(getAllPartner());
    } else {
      yield put(deletePartnerError('Delete Partner Response is not success!'));
    }
  } catch (error) {
    yield put(deletePartnerError('Delete Partner Error !'));
  }
}

export function* watchGetAllPartner() {
  yield takeEvery(GET_ALL_PARTNER, GetAllPartner);
}
export function* watchCreatePartner() {
  yield takeEvery(CREATE_PARTNER, CreatePartner);
}
export function* watchUpdatePartner() {
  yield takeEvery(UPDATE_PARTNER, UpdatePartner);
}
export function* watchDeletePartner() {
  yield takeEvery(DELETE_PARTNER, DeletePartner);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllPartner),
    fork(watchCreatePartner),
    fork(watchUpdatePartner),
    fork(watchDeletePartner),
  ]);
}
