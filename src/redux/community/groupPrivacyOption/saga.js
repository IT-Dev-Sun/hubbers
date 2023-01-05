import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_GROUP_PRIVACY_OPTION,
  CREATE_GROUP_PRIVACY_OPTION,
  UPDATE_GROUP_PRIVACY_OPTION,
  DELETE_GROUP_PRIVACY_OPTION,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION,
} from '../../types/community/groupPrivacyOption';

import {
  getAllGroupPrivacyOption,
  getAllGroupPrivacyOptionSuccess,
  getAllGroupPrivacyOptionError,
  createGroupPrivacyOptionSuccess,
  createGroupPrivacyOptionError,
  updateGroupPrivacyOptionSuccess,
  updateGroupPrivacyOptionError,
  deleteGroupPrivacyOptionSuccess,
  deleteGroupPrivacyOptionError,
  getAllPublicGroupPrivacyOptionSuccess,
  getAllPublicGroupPrivacyOptionError,
} from './actions';

const getAllGroupPrivacyOptionAsync = async () => {
  return api
    .get(`/community/privacy-option`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllGroupPrivacyOption() {
  try {
    const result = yield call(getAllGroupPrivacyOptionAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllGroupPrivacyOptionSuccess(result.data.data));
    } else {
      yield put(
        getAllGroupPrivacyOptionError(
          'Get All GroupPrivacyOption Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      getAllGroupPrivacyOptionError('Get All GroupPrivacyOption Error !')
    );
  }
}
const getAllPublicGroupPrivacyOptionAsync = async () => {
  return api
    .get(`/community/privacy-option/public`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllPublicGroupPrivacyOption() {
  try {
    const result = yield call(getAllPublicGroupPrivacyOptionAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllPublicGroupPrivacyOptionSuccess(result.data.data));
    } else {
      yield put(
        getAllPublicGroupPrivacyOptionError(
          'Get All GroupPrivacyOption Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      getAllPublicGroupPrivacyOptionError('Get All GroupPrivacyOption Error !')
    );
  }
}

const createGroupPrivacyOptionAsync = async ({ payload }) => {
  return api
    .post(`/community/privacy-option`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateGroupPrivacyOption(payload) {
  try {
    const result = yield call(createGroupPrivacyOptionAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createGroupPrivacyOptionSuccess(result.data.data));
      yield put(getAllGroupPrivacyOption());
    } else {
      yield put(
        createGroupPrivacyOptionError(
          'Create GroupPrivacyOption Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      createGroupPrivacyOptionError('Create GroupPrivacyOption Error !')
    );
  }
}

const updateGroupPrivacyOptionAsync = async ({ payload }) => {
  return api
    .put(`/community/privacy-option/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateGroupPrivacyOption(payload) {
  try {
    const result = yield call(updateGroupPrivacyOptionAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateGroupPrivacyOptionSuccess(result.data.data));
      yield put(getAllGroupPrivacyOption());
    } else {
      yield put(
        updateGroupPrivacyOptionError(
          'Update GroupPrivacyOption Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      updateGroupPrivacyOptionError('Update GroupPrivacyOption Error !')
    );
  }
}

const deleteGroupPrivacyOptionAsync = async (payload) => {
  return api
    .delete(`/community/privacy-option/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteGroupPrivacyOption(payload) {
  try {
    const result = yield call(deleteGroupPrivacyOptionAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteGroupPrivacyOptionSuccess(result.data.data));
      yield put(getAllGroupPrivacyOption());
    } else {
      yield put(
        deleteGroupPrivacyOptionError(
          'Delete GroupPrivacyOption Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      deleteGroupPrivacyOptionError('Delete GroupPrivacyOption Error !')
    );
  }
}

export function* watchGetAllGroupPrivacyOption() {
  yield takeEvery(GET_ALL_GROUP_PRIVACY_OPTION, GetAllGroupPrivacyOption);
}
export function* watchGetAllPublicGroupPrivacyOption() {
  yield takeEvery(
    GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION,
    GetAllPublicGroupPrivacyOption
  );
}
export function* watchCreateGroupPrivacyOption() {
  yield takeEvery(CREATE_GROUP_PRIVACY_OPTION, CreateGroupPrivacyOption);
}
export function* watchUpdateGroupPrivacyOption() {
  yield takeEvery(UPDATE_GROUP_PRIVACY_OPTION, UpdateGroupPrivacyOption);
}
export function* watchDeleteGroupPrivacyOption() {
  yield takeEvery(DELETE_GROUP_PRIVACY_OPTION, DeleteGroupPrivacyOption);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllGroupPrivacyOption),
    fork(watchGetAllPublicGroupPrivacyOption),
    fork(watchCreateGroupPrivacyOption),
    fork(watchUpdateGroupPrivacyOption),
    fork(watchDeleteGroupPrivacyOption),
  ]);
}
