import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import { GET_ALL_TOPIC } from '../../types/community/topic';

import { getAllTopicTypesSuccess, getAllTopicTypesError } from './actions';

const getAllTopicTypesAsync = async () => {
  return api
    .get(`/community/topic-type/all`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllTopicTypes() {
  try {
    const result = yield call(getAllTopicTypesAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllTopicTypesSuccess(result.data.data));
    } else {
      yield put(
        getAllTopicTypesError('Get All Topic Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllTopicTypesError('Get All Topic Error !'));
  }
}

export function* watchGetAllTopicTypes() {
  yield takeEvery(GET_ALL_TOPIC, GetAllTopicTypes);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllTopicTypes)]);
}
