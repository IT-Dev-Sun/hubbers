import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_TEAM,
  CREATE_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM,
} from '../../types/team/all-teams';

import {
  getAllTeam,
  getAllTeamSuccess,
  getAllTeamError,
  createTeamSuccess,
  createTeamError,
  updateTeamSuccess,
  updateTeamError,
  deleteTeamSuccess,
  deleteTeamError,
} from './actions';

const getAllTeamAsync = async () => {
  return api
    .get(`/team`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllTeam() {
  try {
    const result = yield call(getAllTeamAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTeamSuccess(result.data));
    } else {
      yield put(getAllTeamError('Get All Team Response is not success!'));
    }
  } catch (error) {
    yield put(getAllTeamError('Get All Team Error !'));
  }
}

const createTeamAsync = async ({ payload }) => {
  return api
    .post(`/team`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateTeam(payload) {
  try {
    const result = yield call(createTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createTeamSuccess(result.data.data));
      yield put(getAllTeam());
    } else {
      yield put(createTeamError('Create Team Response is not success!'));
    }
  } catch (error) {
    yield put(createTeamError('Create Team Error !'));
  }
}

const updateTeamAsync = async ({ payload }) => {
  return api
    .put(`/team/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateTeam(payload) {
  try {
    const result = yield call(updateTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateTeamSuccess(result.data.data));
      yield put(getAllTeam());
    } else {
      yield put(updateTeamError('Update Team Response is not success!'));
    }
  } catch (error) {
    yield put(updateTeamError('Update Team Error !'));
  }
}

const deleteTeamAsync = async (payload) => {
  return api
    .delete(`/team/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteTeam(payload) {
  try {
    const result = yield call(deleteTeamAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTeamSuccess(result.data.data));
      yield put(getAllTeam());
    } else {
      yield put(deleteTeamError('Delete Team Response is not success!'));
    }
  } catch (error) {
    yield put(deleteTeamError('Delete Team Error !'));
  }
}

export function* watchGetAllTeam() {
  yield takeEvery(GET_ALL_TEAM, GetAllTeam);
}
export function* watchCreateTeam() {
  yield takeEvery(CREATE_TEAM, CreateTeam);
}
export function* watchUpdateTeam() {
  yield takeEvery(UPDATE_TEAM, UpdateTeam);
}
export function* watchDeleteTeam() {
  yield takeEvery(DELETE_TEAM, DeleteTeam);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTeam),
    fork(watchCreateTeam),
    fork(watchUpdateTeam),
    fork(watchDeleteTeam),
  ]);
}
