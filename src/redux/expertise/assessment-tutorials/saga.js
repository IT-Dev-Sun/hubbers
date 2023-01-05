import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID,
  GET_ALL_UNIVERSE,
  CREATE_TUTORIAL,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
} from '../../types/product/assessment-tutorials';

import {
  getAllAssessmentTutorialsByCategoryIdSuccess,
  getAllAssessmentTutorialsByCategoryIdError,
  getAllAssessmentUniverseSuccess,
  getAllAssessmentUniverseError,
  createTutorialSuccess,
  createTutorialError,
  updateTutorialSuccess,
  updateTutorialError,
  deleteTutorialSuccess,
  deleteTutorialError,
} from './actions';

const getAssessmentTutorialsByCategoryIdAsync = async ({ payload }) => {
  return api
    .get(`product-launcher/question-tutorials/get-by-category-id/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAssessmentTutorialsByCategoryId(payload) {
  try {
    const result = yield call(getAssessmentTutorialsByCategoryIdAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(
        getAllAssessmentTutorialsByCategoryIdSuccess(result.data.result)
      );
    } else {
      yield put(
        getAllAssessmentTutorialsByCategoryIdError(
          'Failed to get all assessment categories!'
        )
      );
    }
  } catch (error) {
    yield put(
      getAllAssessmentTutorialsByCategoryIdError(
        'Failed to get all assessment categories!'
      )
    );
  }
}

const getAllAssessmentUniverseAsync = async () => {
  return api
    .get(`basic-type-category/assessmentUniverse`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllAssessmentUniverse(payload) {
  try {
    const result = yield call(getAllAssessmentUniverseAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(
        getAllAssessmentUniverseSuccess(result.data.data.basicTypeList)
      );
    } else {
      yield put(
        getAllAssessmentUniverseError('Failed to get all Assessment universe!')
      );
    }
  } catch (error) {
    yield put(
      getAllAssessmentUniverseError('Failed to get all Assessment universe!')
    );
  }
}

const createTutorialAsync = async ({ payload }) => {
  return api
    .post(`product-launcher/question-tutorials`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateTutorial(payload) {
  try {
    const result = yield call(createTutorialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createTutorialSuccess(result.data.result));
    } else {
      yield put(createTutorialError('Failed to create Tutorial!'));
    }
  } catch (error) {
    yield put(createTutorialError('Failed to create Tutorial!'));
  }
}

const updateTutorialAsync = async ({ payload }) => {
  return api
    .put(`product-launcher/question-tutorials/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateTutorial(payload) {
  try {
    const result = yield call(updateTutorialAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateTutorialSuccess(result.data.result));
    } else {
      yield put(updateTutorialError('Failed to update Tutorial!'));
    }
  } catch (error) {
    yield put(updateTutorialError('Failed to update Tutorial!'));
  }
}

const deleteTutorialAsync = async (payload) => {
  return api
    .delete(`/product-launcher/question-tutorials/${payload.id}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteTutorial(payload) {
  try {
    const result = yield call(deleteTutorialAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteTutorialSuccess(payload));
    } else {
      yield put(deleteTutorialError('Failed to delete Tutorial!'));
    }
  } catch (error) {
    yield put(deleteTutorialError('Failed to delete Tutorial!'));
  }
}
export function* watchGetAssessmentTutorialsByCategoryId() {
  yield takeEvery(
    GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID,
    GetAssessmentTutorialsByCategoryId
  );
}
export function* watchGetAllAssessmentUniverse() {
  yield takeEvery(GET_ALL_UNIVERSE, GetAllAssessmentUniverse);
}
export function* watchCreateTutorial() {
  yield takeEvery(CREATE_TUTORIAL, CreateTutorial);
}
export function* watchUpdateTutorial() {
  yield takeEvery(UPDATE_TUTORIAL, UpdateTutorial);
}
export function* watchDeleteTutorial() {
  yield takeEvery(DELETE_TUTORIAL, DeleteTutorial);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAssessmentTutorialsByCategoryId),
    fork(watchGetAllAssessmentUniverse),
    fork(watchCreateTutorial),
    fork(watchUpdateTutorial),
    fork(watchDeleteTutorial),
  ]);
}
