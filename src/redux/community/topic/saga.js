import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_TOPIC,
  GET_SINGLE_TOPIC,
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELETE_TOPIC,
} from '../../types/community/topic';

import {
  getAllTopics,
  getAllTopicsError,
  getAllTopicsSuccess,
  getSingleTopicError,
  getSingleTopicSuccess,
  createTopicError,
  createTopicSuccess,
  updateTopicError,
  updateTopicSuccess,
  deleteTopicError,
  deleteTopicSuccess,
} from './actions';

const getAllTopicsAsync = async () => {
  return api
    .get(`/community/topic`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllTopics() {
  try {
    const result = yield call(getAllTopicsAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTopicsSuccess(result.data.data));
    } else {
      yield put(getAllTopicsError('Get All Topic Response is not success!'));
    }
  } catch (error) {
    yield put(getAllTopicsError('Get All Topic Error !'));
  }
}

const getSingleTopicAsync = async (payload) => {
  await api
    .get(`/community/topic/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleTopic(payload) {
  try {
    const result = yield call(getSingleTopicAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleTopicSuccess(result.data.data));
    } else {
      yield put(
        getSingleTopicError('Get Single Topic Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleTopicError('Get Single Topic Error !'));
  }
}

const createTopicAsync = async ({ payload }) => {
  return api
    .post(`/community/topic`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateTopic(payload) {
  try {
    const result = yield call(createTopicAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createTopicSuccess(result.data.data));
      yield put(getAllTopics());
    } else {
      yield put(createTopicError('Create Topic Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(createTopicError('Create Topic Error !'));
  }
}

const updateTopicAsync = async ({ payload }) => {
  return api
    .put(`/community/topic/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateTopic(payload) {
  try {
    const result = yield call(updateTopicAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateTopicSuccess(result.data.data));
      yield put(getAllTopics());
    } else {
      yield put(updateTopicError('Update Topic Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(updateTopicError('Update Topic Error !'));
  }
}

const deleteTopicAsync = async (payload) => {
  return api
    .delete(`/community/topic/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteTopic(payload) {
  try {
    const result = yield call(deleteTopicAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTopicSuccess(result.data.data));
      yield put(getAllTopics());
    } else {
      yield put(deleteTopicError('Delete Topic Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(deleteTopicError('Delete Topic Error !'));
  }
}

export function* watchGetAllTopics() {
  yield takeEvery(GET_ALL_TOPIC, GetAllTopics);
}
export function* watchCreateTopic() {
  yield takeEvery(CREATE_TOPIC, CreateTopic);
}
export function* watchGetSingleTopic() {
  yield takeEvery(GET_SINGLE_TOPIC, GetSingleTopic);
}
export function* watchUpdateTopic() {
  yield takeEvery(UPDATE_TOPIC, UpdateTopic);
}
export function* watchDeleteTopic() {
  yield takeEvery(DELETE_TOPIC, DeleteTopic);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTopics),
    fork(watchGetSingleTopic),
    fork(watchUpdateTopic),
    fork(watchCreateTopic),
    fork(watchDeleteTopic),
  ]);
}
