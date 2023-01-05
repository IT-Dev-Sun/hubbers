import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import { GET_ALL_TOPIC } from '../../types/community/topic';

import {
  getAllContributorRoleSuccess,
  getAllContributorRoleError,
} from './actions';

const getAllContributorRoleAsync = async () => {
  return api
    .get(`/community/contributor-role/all`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllContributorRole() {
  try {
    const result = yield call(getAllContributorRoleAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContributorRoleSuccess(result.data.data));
    } else {
      yield put(
        getAllContributorRoleError('Get All Topic Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllContributorRoleError('Get All Topic Error !'));
  }
}

export function* watchGetAllContributorRole() {
  yield takeEvery(GET_ALL_TOPIC, GetAllContributorRole);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllContributorRole)]);
}
