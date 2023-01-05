import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_COMMUNITY_ROLE,
  GET_COMMUNITY_LIST_BY_ROLE,
  GET_ALL_COMMUNITY,
  GET_SINGLE_COMMUNITY,
  CREATE_COMMUNITY,
  UPDATE_COMMUNITY,
  DELETE_COMMUNITY,
} from '../../types/community/community-all';

import {
  getAllCommunityRoleSuccess,
  getAllCommunityRoleError,
  getCommunityListByRoleSuccess,
  getCommunityListByRoleError,
  getAllCommunity,
  getAllCommunitySuccess,
  getAllCommunityError,
  getSingleCommunitySuccess,
  getSingleCommunityError,
  createCommunitySuccess,
  createCommunityError,
  updateCommunitySuccess,
  updateCommunityError,
  deleteCommunitySuccess,
  deleteCommunityError,
} from './actions';

const getAllCommunityRoleAsync = async () =>
  /* eslint-disable */
  await api
    .get(`/community/role`)
    .then((res) => res)
    .catch((error) => error);
    /* eslint-enable */

function* GetAllCommunityRole() {
  try {
    const result = yield call(getAllCommunityRoleAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCommunityRoleSuccess(result.data.data));
    } else {
      yield put(getAllCommunityRoleError('Failed to get all community roles!'));
    }
  } catch (error) {
    yield put(getAllCommunityRoleError('Failed to get all community roles!'));
  }
}

const getCommunityListByRoleAsync = async (payload) =>
  /* eslint-disable */
  await api
    .get(`/community/c-g-list-by-role/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
    /* eslint-enable */

function* GetCommunityListByRole(payload) {
  try {
    const result = yield call(getCommunityListByRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getCommunityListByRoleSuccess(result.data.data));
    } else {
      yield put(
        getCommunityListByRoleError('Failed to get community list by roles!')
      );
    }
  } catch (error) {
    yield put(
      getCommunityListByRoleError('Failed to get community list by roles!')
    );
  }
}

const getAllCommunityAsync = async () =>
  /* eslint-disable */
  await api
    .get(`/community`)
    .then((res) => res)
    .catch((error) => error);
    /* eslint-enable */

function* GetAllCommunity() {
  try {
    const result = yield call(getAllCommunityAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCommunitySuccess(result.data.data));
    } else {
      yield put(
        getAllCommunityError('Get All Community Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllCommunityError('Get All Community Error !'));
  }
}

const getSingleCommunityAsync = async (payload) =>
  /* eslint-disable */
  await api
    .get(`/community/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
    /* eslint-enable */

function* GetSingleCommunity(payload) {
  try {
    const result = yield call(getSingleCommunityAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleCommunitySuccess(result.data.data));
    } else {
      yield put(
        getSingleCommunityError('Get Single Community Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleCommunityError('Get Single Community Error !'));
  }
}

const createCommunityAsync = async ({ payload }) =>
  /* eslint-disable */
  await api
    .post(`/community`, { ...payload })
    .then((res) => res)
    .catch((error) => error);
    /* eslint-enable */

function* CreateCommunity(payload) {
  try {
    const result = yield call(createCommunityAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createCommunitySuccess(result.data.data));
      yield put(getAllCommunity());
    } else {
      yield put(
        createCommunityError('Create Community Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(createCommunityError('Create Community Error !'));
  }
}

const updateCommunityAsync = async ({ payload }) =>
  /* eslint-disable */
  await api
    .put(`/community/${payload.id}`, { ...payload })
    .then((res) => res)
    .catch((error) => error);
    /* eslint-enable */

function* UpdateCommunity(payload) {
  try {
    const result = yield call(updateCommunityAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateCommunitySuccess(result.data.data));
      yield put(getAllCommunity());
    } else {
      yield put(
        updateCommunityError('Update Community Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(updateCommunityError('Update Community Error !'));
  }
}

const deleteCommunityAsync = async (payload) => {
  return api
    .delete(`/community/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteCommunity(payload) {
  try {
    const result = yield call(deleteCommunityAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteCommunitySuccess(result.data.data));
      yield put(getAllCommunity());
    } else {
      yield put(
        deleteCommunityError('Delete Community Response is not success!')
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCommunityError('Delete Community Error !'));
  }
}

export function* watchGetAllCommunityRole() {
  yield takeEvery(GET_ALL_COMMUNITY_ROLE, GetAllCommunityRole);
}
export function* watchGetCommunityListByRole() {
  yield takeEvery(GET_COMMUNITY_LIST_BY_ROLE, GetCommunityListByRole);
}
export function* watchGetAllCommunity() {
  yield takeEvery(GET_ALL_COMMUNITY, GetAllCommunity);
}
export function* watchCreateCommunity() {
  yield takeEvery(CREATE_COMMUNITY, CreateCommunity);
}
export function* watchGetSingleCommunity() {
  yield takeEvery(GET_SINGLE_COMMUNITY, GetSingleCommunity);
}
export function* watchUpdateCommunity() {
  yield takeEvery(UPDATE_COMMUNITY, UpdateCommunity);
}
export function* watchDeleteCommunity() {
  yield takeEvery(DELETE_COMMUNITY, DeleteCommunity);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCommunityRole),
    fork(watchGetCommunityListByRole),
    fork(watchGetAllCommunity),
    fork(watchCreateCommunity),
    fork(watchGetSingleCommunity),
    fork(watchUpdateCommunity),
    fork(watchDeleteCommunity),
  ]);
}
