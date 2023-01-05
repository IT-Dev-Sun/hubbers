import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_PARTNER_TYPE,
  CREATE_PARTNER_TYPE,
  UPDATE_PARTNER_TYPE,
  DELETE_PARTNER_TYPE,
} from '../../types/partner/partner-type';

import {
  getAllPartnerType,
  getAllPartnerTypeSuccess,
  getAllPartnerTypeError,
  createPartnerTypeSuccess,
  createPartnerTypeError,
  updatePartnerTypeSuccess,
  updatePartnerTypeError,
  deletePartnerTypeSuccess,
  deletePartnerTypeError,
} from './actions';

const getAllPartnerTypeAsync = async () => {
  return api
    .get(`/partner-type`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllPartnerType() {
  try {
    const result = yield call(getAllPartnerTypeAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllPartnerTypeSuccess(result.data));
    } else {
      yield put(
        getAllPartnerTypeError('Get All PartnerType Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllPartnerTypeError('Get All PartnerType Error !'));
  }
}

const createPartnerTypeAsync = async ({ payload }) => {
  return api
    .post(`/partner-type`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreatePartnerType(payload) {
  try {
    const result = yield call(createPartnerTypeAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createPartnerTypeSuccess(result.data.data));
      yield put(getAllPartnerType());
    } else {
      yield put(
        createPartnerTypeError('Create PartnerType Response is not success!')
      );
    }
  } catch (error) {
    yield put(createPartnerTypeError('Create PartnerType Error !'));
  }
}

const updatePartnerTypeAsync = async ({ payload }) => {
  return api
    .put(`/partner-type/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdatePartnerType(payload) {
  try {
    const result = yield call(updatePartnerTypeAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updatePartnerTypeSuccess(result.data.data));
      yield put(getAllPartnerType());
    } else {
      yield put(
        updatePartnerTypeError('Update PartnerType Response is not success!')
      );
    }
  } catch (error) {
    yield put(updatePartnerTypeError('Update PartnerType Error !'));
  }
}

const deletePartnerTypeAsync = async (payload) => {
  return api
    .delete(`/partner-type/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeletePartnerType(payload) {
  try {
    const result = yield call(deletePartnerTypeAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deletePartnerTypeSuccess(result.data.data));
      yield put(getAllPartnerType());
    } else {
      yield put(
        deletePartnerTypeError('Delete PartnerType Response is not success!')
      );
    }
  } catch (error) {
    yield put(deletePartnerTypeError('Delete PartnerType Error !'));
  }
}

export function* watchGetAllPartnerType() {
  yield takeEvery(GET_ALL_PARTNER_TYPE, GetAllPartnerType);
}
export function* watchCreatePartnerType() {
  yield takeEvery(CREATE_PARTNER_TYPE, CreatePartnerType);
}
export function* watchUpdatePartnerType() {
  yield takeEvery(UPDATE_PARTNER_TYPE, UpdatePartnerType);
}
export function* watchDeletePartnerType() {
  yield takeEvery(DELETE_PARTNER_TYPE, DeletePartnerType);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllPartnerType),
    fork(watchCreatePartnerType),
    fork(watchUpdatePartnerType),
    fork(watchDeletePartnerType),
  ]);
}
