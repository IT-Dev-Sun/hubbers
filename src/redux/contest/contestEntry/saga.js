import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';
import {
  DELETE_CONTEST_ENTRY,
  GET_ALL_CONTEST_ENTRY,
} from '../../types/contest/contestType';
import {
  getAllContestEntryListSuccess,
  getAllContestEntryListError,
  getAllContestEntryList,
} from './actions';

const getAllContestEntryListAsync = () => {
  return api
    .get(`contest/contest-entry/publish`)
    .then((res) => res)
    .catch((error) => error);
};

const deleteAllContestEntryListAsync = (id) => {
  return api
    .delete(`contest/contest-entry/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllContestEntry() {
  try {
    const result = yield call(getAllContestEntryListAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestEntryListSuccess(result.data.data));
    } else {
      yield put(
        getAllContestEntryListError(
          'Get All Contest List Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllContestEntryListError('Get All Contest Entry List Error'));
  }
}

function* DeleteAllContestEntry(payload) {
  try {
    const result = yield call(deleteAllContestEntryListAsync, payload.payload);
    console.log(result);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestEntryListSuccess(result.data.data));
      yield put(getAllContestEntryList());
    } else {
      yield put(
        getAllContestEntryListError(
          'Get All Contest List Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllContestEntryListError('Get All Contest Entry List Error'));
  }
}

export function* watchGetAllContestEntry() {
  yield takeEvery(GET_ALL_CONTEST_ENTRY, GetAllContestEntry);
}

export function* watchDeleteAllContestEntry() {
  yield takeEvery(DELETE_CONTEST_ENTRY, DeleteAllContestEntry);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllContestEntry), fork(watchDeleteAllContestEntry)]);
}
