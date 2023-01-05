import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_PARTNER_CONTACT,
  CREATE_PARTNER_CONTACT,
  UPDATE_PARTNER_CONTACT,
  DELETE_PARTNER_CONTACT,
} from '../../types/partner/partner-contact';

import {
  getAllPartnerContact,
  getAllPartnerContactSuccess,
  getAllPartnerContactError,
  createPartnerContactSuccess,
  createPartnerContactError,
  updatePartnerContactSuccess,
  updatePartnerContactError,
  deletePartnerContactSuccess,
  deletePartnerContactError,
} from './actions';

const getAllPartnerContactAsync = async ({ payload }) => {
  return api
    .get(`/partner-contact/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllPartnerContact(payload) {
  try {
    const result = yield call(getAllPartnerContactAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllPartnerContactSuccess(result.data));
    } else {
      yield put(
        getAllPartnerContactError(
          'Get All PartnerContact Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllPartnerContactError('Get All PartnerContact Error !'));
  }
}

const createPartnerContactAsync = async ({ payload }) => {
  return api
    .post(`/partner-contact`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreatePartnerContact(payload) {
  try {
    const result = yield call(createPartnerContactAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createPartnerContactSuccess(result.data.data));
      yield put(getAllPartnerContact());
    } else {
      yield put(
        createPartnerContactError(
          'Create PartnerContact Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(createPartnerContactError('Create PartnerContact Error !'));
  }
}

const updatePartnerContactAsync = async ({ payload }) => {
  return api
    .put(`/partner-contact/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdatePartnerContact(payload) {
  try {
    const result = yield call(updatePartnerContactAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updatePartnerContactSuccess(result.data.data));
      yield put(getAllPartnerContact());
    } else {
      yield put(
        updatePartnerContactError(
          'Update PartnerContact Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(updatePartnerContactError('Update PartnerContact Error !'));
  }
}

const deletePartnerContactAsync = async (payload) => {
  return api
    .delete(`/partner-contact/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeletePartnerContact(payload) {
  try {
    const result = yield call(deletePartnerContactAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deletePartnerContactSuccess(result.data.data));
      yield put(getAllPartnerContact());
    } else {
      yield put(
        deletePartnerContactError(
          'Delete PartnerContact Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(deletePartnerContactError('Delete PartnerContact Error !'));
  }
}

export function* watchGetAllPartnerContact() {
  yield takeEvery(GET_ALL_PARTNER_CONTACT, GetAllPartnerContact);
}
export function* watchCreatePartnerContact() {
  yield takeEvery(CREATE_PARTNER_CONTACT, CreatePartnerContact);
}
export function* watchUpdatePartnerContact() {
  yield takeEvery(UPDATE_PARTNER_CONTACT, UpdatePartnerContact);
}
export function* watchDeletePartnerContact() {
  yield takeEvery(DELETE_PARTNER_CONTACT, DeletePartnerContact);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllPartnerContact),
    fork(watchCreatePartnerContact),
    fork(watchUpdatePartnerContact),
    fork(watchDeletePartnerContact),
  ]);
}
