import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_TEAM_MEMBER_ROLE,
  CREATE_TEAM_MEMBER_ROLE,
  UPDATE_TEAM_MEMBER_ROLE,
  DELETE_TEAM_MEMBER_ROLE,
} from '../../types/team/team-member-role';

import {
  getAllTeamMemberRole,
  getAllTeamMemberRoleSuccess,
  getAllTeamMemberRoleError,
  createTeamMemberRoleSuccess,
  createTeamMemberRoleError,
  updateTeamMemberRoleSuccess,
  updateTeamMemberRoleError,
  deleteTeamMemberRoleSuccess,
  deleteTeamMemberRoleError,
} from './actions';

const getAllTeamMemberRoleAsync = async () => {
  return api
    .get(`/team-member-role`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllTeamMemberRole() {
  try {
    const result = yield call(getAllTeamMemberRoleAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTeamMemberRoleSuccess(result.data));
    } else {
      yield put(
        getAllTeamMemberRoleError(
          'Get All Team Member Role Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllTeamMemberRoleError('Get All Team Member Role Error !'));
  }
}

const createTeamMemberRoleAsync = async ({ payload }) => {
  return api
    .post(`/team-member-role`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateTeamMemberRole(payload) {
  try {
    const result = yield call(createTeamMemberRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createTeamMemberRoleSuccess(result.data.data));
      yield put(getAllTeamMemberRole());
    } else {
      yield put(
        createTeamMemberRoleError(
          'Create Team Member Role Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(createTeamMemberRoleError('Create Team Member Role Error !'));
  }
}

const updateTeamMemberRoleAsync = async ({ payload }) => {
  return api
    .put(`/team-member-role/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateTeamMemberRole(payload) {
  try {
    const result = yield call(updateTeamMemberRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateTeamMemberRoleSuccess(result.data.data));
      yield put(getAllTeamMemberRole());
    } else {
      yield put(
        updateTeamMemberRoleError(
          'Update Team Member Role Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(updateTeamMemberRoleError('Update Team Member Role Error !'));
  }
}

const deleteTeamMemberRoleAsync = async (payload) => {
  return api
    .delete(`/team-member-role/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteTeamMemberRole(payload) {
  try {
    const result = yield call(deleteTeamMemberRoleAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTeamMemberRoleSuccess(result.data.data));
      yield put(getAllTeamMemberRole());
    } else {
      yield put(
        deleteTeamMemberRoleError(
          'Delete Team Member Role Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(deleteTeamMemberRoleError('Delete Team Member Role Error !'));
  }
}

export function* watchGetAllTeamMemberRole() {
  yield takeEvery(GET_ALL_TEAM_MEMBER_ROLE, GetAllTeamMemberRole);
}
export function* watchCreateTeamMemberRole() {
  yield takeEvery(CREATE_TEAM_MEMBER_ROLE, CreateTeamMemberRole);
}
export function* watchUpdateTeamMemberRole() {
  yield takeEvery(UPDATE_TEAM_MEMBER_ROLE, UpdateTeamMemberRole);
}
export function* watchDeleteTeamMemberRole() {
  yield takeEvery(DELETE_TEAM_MEMBER_ROLE, DeleteTeamMemberRole);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTeamMemberRole),
    fork(watchCreateTeamMemberRole),
    fork(watchUpdateTeamMemberRole),
    fork(watchDeleteTeamMemberRole),
  ]);
}
