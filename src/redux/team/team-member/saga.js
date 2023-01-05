import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_TEAM_MEMBER,
  CREATE_TEAM_MEMBER,
  ORDER_TEAM_MEMBER,
  UPDATE_TEAM_MEMBER,
  CHANGE_TEAM_MEMBER,
  DELETE_TEAM_MEMBER,
} from '../../types/team/team-member';

import {
  getAllTeamMember,
  getAllTeamMemberSuccess,
  getAllTeamMemberError,
  orderTeamMemberSuccess,
  orderTeamMemberError,
  createTeamMemberSuccess,
  createTeamMemberError,
  updateTeamMemberSuccess,
  updateTeamMemberError,
  changeTeamMemberSuccess,
  changeTeamMemberError,
  deleteTeamMemberSuccess,
  deleteTeamMemberError,
} from './actions';

const getAllTeamMemberAsync = async ({ payload }) => {
  return api
    .get(`/team-member/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllTeamMember(payload) {
  try {
    const result = yield call(getAllTeamMemberAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTeamMemberSuccess(result.data));
    } else {
      yield put(
        getAllTeamMemberError('Get All Team Member Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllTeamMemberError('Get All Team Member Error !'));
  }
}

const orderTeamMemberAsync = async ({ payload }) => {
  return api
    .get(`/team-member/${payload.id}/${payload.flag}`)
    .then((res) => res)
    .catch((error) => error);
};
function* OrderTeamMember(payload) {
  try {
    const result = yield call(orderTeamMemberAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(orderTeamMemberSuccess(result.data.data));
      yield put(getAllTeamMember(payload.payload.currentTeam));
    } else {
      yield put(
        orderTeamMemberError('Order Team Member Response is not success!')
      );
    }
  } catch (error) {
    yield put(orderTeamMemberError('Order Team Member Error !'));
  }
}

const createTeamMemberAsync = async ({ payload }) => {
  return api
    .post(`/team-member`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateTeamMember(payload) {
  try {
    const result = yield call(createTeamMemberAsync, payload);
    if (result.status === 200 && result.data.success) {
      yield put(createTeamMemberSuccess(result.data.data));
      yield put(getAllTeamMember(payload.payload.teamId));
    } else {
      yield put(createTeamMemberError(result));
    }
  } catch (error) {
    yield put(createTeamMemberError('Create Team Member Error !'));
  }
}

const updateTeamMemberAsync = async ({ payload }) => {
  return api
    .put(`/team-member/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateTeamMember(payload) {
  try {
    const result = yield call(updateTeamMemberAsync, payload);
    console.log(result);
    if (result.status === 200 && result.data.success) {
      yield put(updateTeamMemberSuccess(result.data.data));
      yield put(getAllTeamMember(payload.payload.teamId));
    } else {
      yield put(updateTeamMemberError(result));
    }
  } catch (error) {
    yield put(updateTeamMemberError('Update Team Member Error !'));
  }
}

const changeTeamMemberAsync = async ({ payload }) => {
  return api
    .put(`/team-member/${payload.id}/${payload.flag}`)
    .then((res) => res)
    .catch((error) => error);
};
function* ChangeTeamMember(payload) {
  try {
    const result = yield call(changeTeamMemberAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(changeTeamMemberSuccess(result.data.data));
      yield put(getAllTeamMember(payload.payload.currentTeam));
    } else {
      yield put(
        changeTeamMemberError('Change Team Member Response is not success!')
      );
    }
  } catch (error) {
    yield put(changeTeamMemberError('Change Team Member Error !'));
  }
}

const deleteTeamMemberAsync = async ({ payload }) => {
  return api
    .delete(`/team-member/${payload.id}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteTeamMember(payload) {
  try {
    const result = yield call(deleteTeamMemberAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTeamMemberSuccess(result.data.data));
      yield put(getAllTeamMember(payload.payload.currentTeam));
    } else {
      yield put(
        deleteTeamMemberError('Delete Team Member Response is not success!')
      );
    }
  } catch (error) {
    yield put(deleteTeamMemberError('Delete Team Member Error !'));
  }
}

export function* watchGetAllTeamMember() {
  yield takeEvery(GET_ALL_TEAM_MEMBER, GetAllTeamMember);
}
export function* watchOrderTeamMember() {
  yield takeEvery(ORDER_TEAM_MEMBER, OrderTeamMember);
}
export function* watchCreateTeamMember() {
  yield takeEvery(CREATE_TEAM_MEMBER, CreateTeamMember);
}
export function* watchUpdateTeamMember() {
  yield takeEvery(UPDATE_TEAM_MEMBER, UpdateTeamMember);
}
export function* watchChangeTeamMember() {
  yield takeEvery(CHANGE_TEAM_MEMBER, ChangeTeamMember);
}
export function* watchDeleteTeamMember() {
  yield takeEvery(DELETE_TEAM_MEMBER, DeleteTeamMember);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTeamMember),
    fork(watchOrderTeamMember),
    fork(watchCreateTeamMember),
    fork(watchUpdateTeamMember),
    fork(watchChangeTeamMember),
    fork(watchDeleteTeamMember),
  ]);
}
