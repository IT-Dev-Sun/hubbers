import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';
import {
  CREATE_GROUP,
  GET_ALL_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP,
} from '../../types/community/group';

import {
  createGroupError,
  createGroupSuccess,
  getAllGroups,
  getAllGroupsError,
  getAllGroupsSuccess,
  updateGroupError,
  updateGroupSuccess,
  deleteGroupError,
  deleteGroupSuccess,
} from './actions';

const getAllGroupsAsync = async () => {
  return api
    .get(`/community/group`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllGroups() {
  try {
    const result = yield call(getAllGroupsAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllGroupsSuccess(result.data.data));
    } else {
      yield put(getAllGroupsError('Get All Group Response is not success!'));
    }
  } catch (error) {
    yield put(getAllGroupsError('Get All Group Error !'));
  }
}

const createGroupAsync = async ({ payload }) => {
  return api
    .post(`/community/group`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateGroup(payload) {
  try {
    const result = yield call(createGroupAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createGroupSuccess(result.data.data));
      yield put(getAllGroups());
    } else {
      yield put(createGroupError('Create Group Response is not success!'));
    }
  } catch (error) {
    yield put(createGroupError('Create Group Error !'));
  }
}

const updateGroupAsync = async ({ payload }) => {
  return api
    .put(`/community/group/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateGroup(payload) {
  try {
    const result = yield call(updateGroupAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateGroupSuccess(result.data.data));
      yield put(getAllGroups());
    } else {
      yield put(updateGroupError('Update Group Response is not success!'));
    }
  } catch (error) {
    yield put(updateGroupError('Update Group Error !'));
  }
}

const deleteGroupAsync = async ({ payload }) => {
  return api
    .delete(`/community/group/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteGroup(payload) {
  try {
    const result = yield call(deleteGroupAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteGroupSuccess(result.data.data));
      yield put(getAllGroups());
    } else {
      yield put(deleteGroupError('Delete Group Response is not success!'));
    }
  } catch (error) {
    yield put(deleteGroupError('Delete Group Error !'));
  }
}

export function* watchGetAllGroups() {
  yield takeEvery(GET_ALL_GROUP, GetAllGroups);
}
export function* watchCreateGroup() {
  yield takeEvery(CREATE_GROUP, CreateGroup);
}
export function* watchUpdateGroup() {
  yield takeEvery(UPDATE_GROUP, UpdateGroup);
}
export function* watchDeleteGroup() {
  yield takeEvery(DELETE_GROUP, DeleteGroup);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllGroups),
    fork(watchUpdateGroup),
    fork(watchCreateGroup),
    fork(watchDeleteGroup),
  ]);
}
