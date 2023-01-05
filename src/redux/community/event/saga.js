import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  CREATE_EVENT,
  GET_ALL_EVENT,
  GET_SINGLE_EVENT,
  UPDATE_EVENT,
} from '../../types/community/event';

import {
  createEventError,
  createEventSuccess,
  getAllEvents,
  getAllEventsError,
  getAllEventsSuccess,
  getSingleEventError,
  getSingleEventSuccess,
  updateEventError,
  updateEventSuccess,
} from './actions';

const getAllEventsAsync = async () => {
  return api
    .get(`/community/event`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllEvents() {
  try {
    const result = yield call(getAllEventsAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllEventsSuccess(result.data.data));
    } else {
      yield put(getAllEventsError('Get All Event Response is not success!'));
    }
  } catch (error) {
    yield put(getAllEventsError('Get All Event Error !'));
  }
}

const getSingleEventAsync = async (payload) => {
  await api
    .get(`/community/event/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetSingleEvent(payload) {
  try {
    const result = yield call(getSingleEventAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleEventSuccess(result.data.data));
    } else {
      yield put(
        getSingleEventError('Get Single Event Response is not success!')
      );
    }
  } catch (error) {
    yield put(getSingleEventError('Get Single Event Error !'));
  }
}

const createEventAsync = async ({ payload }) => {
  return api
    .post(`/community/event`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateEvent(payload) {
  try {
    const result = yield call(createEventAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createEventSuccess(result.data.data));
      yield put(getAllEvents());
    } else {
      yield put(createEventError('Create Event Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(createEventError('Create Event Error !'));
  }
}

const updateEventAsync = async ({ payload }) => {
  return api
    .put(`/community/event/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateEvent(payload) {
  try {
    const result = yield call(updateEventAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateEventSuccess(result.data.data));
      yield put(getAllEvents());
    } else {
      yield put(updateEventError('Update Event Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(updateEventError('Update Event Error !'));
  }
}

export function* watchGetAllEvents() {
  yield takeEvery(GET_ALL_EVENT, GetAllEvents);
}
export function* watchCreateEvent() {
  yield takeEvery(CREATE_EVENT, CreateEvent);
}
export function* watchGetSingleEvent() {
  yield takeEvery(GET_SINGLE_EVENT, GetSingleEvent);
}
export function* watchUpdateEvent() {
  yield takeEvery(UPDATE_EVENT, UpdateEvent);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllEvents),
    fork(watchGetSingleEvent),
    fork(watchUpdateEvent),
    fork(watchCreateEvent),
  ]);
}
