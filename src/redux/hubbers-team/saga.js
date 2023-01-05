import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../ApiConfig';

import {
  GET_ALL_HUBBERS_TEAM,
  CREATE_HUBBERS_TEAM,
  UPDATE_HUBBERS_TEAM,
  DELETE_HUBBERS_TEAM,
  ORDER_HUBBERS_TEAM,
} from '../types/hubbers-team';

import {
  getAllHubbersTeam,
  getAllHubbersTeamSuccess,
  getAllHubbersTeamError,
  createHubbersTeamSuccess,
  createHubbersTeamError,
  updateHubbersTeamSuccess,
  updateHubbersTeamError,
  deleteHubbersTeamSuccess,
  deleteHubbersTeamError,
  orderHubbersTeamSuccess,
  orderHubbersTeamError,
} from './actions';

const getAllHubbersTeamAsync = async () => {
  return api
    .get(`/hubbers-team`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllHubbersTeam() {
  try {
    const result = yield call(getAllHubbersTeamAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllHubbersTeamSuccess(result.data));
    } else {
      yield put(
        getAllHubbersTeamError('Get All HubbersTeam Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllHubbersTeamError('Get All HubbersTeam Error !'));
  }
}

const createHubbersTeamAsync = async ({ payload }) => {
  return api
    .post(`/hubbers-team`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateHubbersTeam(payload) {
  try {
    const result = yield call(createHubbersTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createHubbersTeamSuccess(result.data.data));
      yield put(getAllHubbersTeam());
    } else {
      yield put(
        createHubbersTeamError('Create HubbersTeam Response is not success!')
      );
    }
  } catch (error) {
    yield put(createHubbersTeamError('Create HubbersTeam Error !'));
  }
}

const updateHubbersTeamAsync = async ({ payload }) => {
  return api
    .put(`/hubbers-team/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateHubbersTeam(payload) {
  try {
    const result = yield call(updateHubbersTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateHubbersTeamSuccess(result.data.data));
      yield put(getAllHubbersTeam());
    } else {
      yield put(
        updateHubbersTeamError('Update HubbersTeam Response is not success!')
      );
    }
  } catch (error) {
    yield put(updateHubbersTeamError('Update HubbersTeam Error !'));
  }
}

const deleteHubbersTeamAsync = async (payload) => {
  return api
    .delete(`/hubbers-team/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteHubbersTeam(payload) {
  try {
    const result = yield call(deleteHubbersTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteHubbersTeamSuccess(result.data.data));
      yield put(getAllHubbersTeam());
    } else {
      yield put(
        deleteHubbersTeamError('Delete HubbersTeam Response is not success!')
      );
    }
  } catch (error) {
    yield put(deleteHubbersTeamError('Delete HubbersTeam Error !'));
  }
}

const orderHubbersTeamAsync = async (payload) => {
  return api
    .get(`/hubbers-team/${payload.payload.id}/${payload.payload.flag}`)
    .then((res) => res)
    .catch((error) => error);
};
function* OrderHubbersTeam(payload) {
  try {
    const result = yield call(orderHubbersTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(orderHubbersTeamSuccess(result.data.data));
      yield put(getAllHubbersTeam());
    } else {
      yield put(
        orderHubbersTeamError('Order HubbersTeam Response is not success!')
      );
    }
  } catch (error) {
    yield put(orderHubbersTeamError('Order HubbersTeam Error !'));
  }
}

export function* watchGetAllHubbersTeam() {
  yield takeEvery(GET_ALL_HUBBERS_TEAM, GetAllHubbersTeam);
}
export function* watchCreateHubbersTeam() {
  yield takeEvery(CREATE_HUBBERS_TEAM, CreateHubbersTeam);
}
export function* watchUpdateHubbersTeam() {
  yield takeEvery(UPDATE_HUBBERS_TEAM, UpdateHubbersTeam);
}
export function* watchDeleteHubbersTeam() {
  yield takeEvery(DELETE_HUBBERS_TEAM, DeleteHubbersTeam);
}
export function* watchOrderHubbersTeam() {
  yield takeEvery(ORDER_HUBBERS_TEAM, OrderHubbersTeam);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllHubbersTeam),
    fork(watchCreateHubbersTeam),
    fork(watchUpdateHubbersTeam),
    fork(watchDeleteHubbersTeam),
    fork(watchOrderHubbersTeam),
  ]);
}
