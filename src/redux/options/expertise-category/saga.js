import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  CREATE_EXPERTISE_CATEGORY,
  GET_ALL_EXPERTISE_CATEGORY,
  GET_ALL_SKILL,
  UPDATE_EXPERTISE_CATEGORY,
  DELETE_EXPERTISE_CATEGORY,
  ORDER_EXPERTISE_CATEGORY,
} from '../../types/options/expertise-category';

import {
  getAllExpertiseCategory,
  getAllExpertiseCategorySuccess,
  getAllExpertiseCategoryError,
  getAllSkillSuccess,
  getAllSkillError,
  createExpertiseCategorySuccess,
  createExpertiseCategoryError,
  updateExpertiseCategorySuccess,
  updateExpertiseCategoryError,
  deleteExpertiseCategorySuccess,
  deleteExpertiseCategoryError,
  orderExpertiseCategorySuccess,
  orderExpertiseCategoryError,
} from './actions';

const getAllExpertiseCategoryAsync = async () =>
  api
    .get(`/expertise-category/`)
    .then((res) => res.data)
    .catch((error) => error);

function* GetAllExpertiseCategory() {
  try {
    const result = yield call(getAllExpertiseCategoryAsync);
    if (result.success) {
      yield put(getAllExpertiseCategorySuccess(result.data));
    } else {
      yield put(
        getAllExpertiseCategoryError('Get All Users Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllExpertiseCategoryError('Get All Users Error !'));
  }
}

const getAllSkillAsync = async () =>
  api
    .get(`/expertise-category/skill`)
    .then((res) => res.data)
    .catch((error) => error);

function* GetAllSkill() {
  try {
    const result = yield call(getAllSkillAsync);
    if (result.success) {
      yield put(getAllSkillSuccess(result.data));
    } else {
      yield put(getAllSkillError('Get All Skills Response is not success!'));
    }
  } catch (error) {
    yield put(getAllSkillError('Get All Skills Error !'));
  }
}

const createExpertiseCategoryAsync = async ({ payload }) => {
  return api
    .post(`/expertise-category`, payload)
    .then((res) => res.data)
    .catch((error) => error);
};

function* CreateExpertiseCategory(data) {
  try {
    const result = yield call(createExpertiseCategoryAsync, data);
    if (result.success) {
      yield put(createExpertiseCategorySuccess(result.data));
      yield put(getAllExpertiseCategory());
    } else {
      yield put(
        createExpertiseCategoryError(
          'Create Expertise Category is not success!'
        )
      );
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const updateExpertiseCategoryAsync = async ({ payload }) => {
  return api
    .put(`/expertise-category/${payload.id}`, payload)
    .then((res) => res.data)
    .catch((error) => error);
};

function* UpdateExpertiseCategory(data) {
  try {
    const result = yield call(updateExpertiseCategoryAsync, data);
    if (result.success) {
      yield put(updateExpertiseCategorySuccess(result.data));
      yield put(getAllExpertiseCategory());
    } else {
      yield put(
        updateExpertiseCategoryError(
          'Update Expertise Category is not success!'
        )
      );
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const deleteExpertiseCategoryAsync = async ({ payload }) => {
  return api
    .delete(`/expertise-category/${payload}`)
    .then((res) => res.data)
    .catch((error) => error);
};

function* DeleteExpertiseCategory(data) {
  try {
    const result = yield call(deleteExpertiseCategoryAsync, data);
    if (result.success) {
      yield put(deleteExpertiseCategorySuccess(result));
      yield put(getAllExpertiseCategory());
    } else {
      yield put(
        deleteExpertiseCategoryError(
          'Delete Expertise Category is not success!'
        )
      );
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const orderExpertiseCategoryAsync = async ({ payload }) => {
  return api
    .get(`/expertise-category/${payload.id}/${payload.flag}`)
    .then((res) => res.data)
    .catch((error) => error);
};

function* OrderExpertiseCategory(data) {
  try {
    const result = yield call(orderExpertiseCategoryAsync, data);
    if (result.success) {
      yield put(orderExpertiseCategorySuccess(result));
      yield put(getAllExpertiseCategory());
    } else {
      yield put(
        orderExpertiseCategoryError('Order Expertise Category is not success!')
      );
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

export function* watchGetAllExpertiseCategory() {
  yield takeEvery(GET_ALL_EXPERTISE_CATEGORY, GetAllExpertiseCategory);
}
export function* watchGetAllSkill() {
  yield takeEvery(GET_ALL_SKILL, GetAllSkill);
}
export function* watchCreateExpertiseCategory() {
  yield takeEvery(CREATE_EXPERTISE_CATEGORY, CreateExpertiseCategory);
}
export function* watchUpdateExpertiseCategory() {
  yield takeEvery(UPDATE_EXPERTISE_CATEGORY, UpdateExpertiseCategory);
}
export function* watchDeleteExpertiseCategory() {
  yield takeEvery(DELETE_EXPERTISE_CATEGORY, DeleteExpertiseCategory);
}
export function* watchOrderExpertiseCategory() {
  yield takeEvery(ORDER_EXPERTISE_CATEGORY, OrderExpertiseCategory);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllExpertiseCategory),
    fork(watchGetAllSkill),
    fork(watchCreateExpertiseCategory),
    fork(watchUpdateExpertiseCategory),
    fork(watchDeleteExpertiseCategory),
    fork(watchOrderExpertiseCategory),
  ]);
}
