import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_QUESTIONS,
  GET_ASSESSMENT_CATEGORIES,
  GET_ASSESSMENT_TAGS,
  CREATE_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  ORDER_QUESTION,
  GET_SINGLE_QUESTION,
  GET_QUESTIONS,
} from '../../types/product/assessment-questions';

import {
  getAllAssessmentQuestionsSuccess,
  getAllAssessmentQuestionsError,
  getAssessmentCategoriesSuccess,
  getAssessmentCategoriesError,
  getAssessmentTagsSuccess,
  getAssessmentTagsError,
  orderQuestionSuccess,
  orderQuestionError,
  createQuestionSuccess,
  createQuestionError,
  getSingleQuestionSuccess,
  getSingleQuestionError,
  updateQuestionSuccess,
  updateQuestionError,
  deleteQuestionSuccess,
  deleteQuestionError,
  getAllQuestionsSuccess,
  getAllQuestionsError,
} from './actions';

const getAllAssessmentQuestionsAsync = async ({ payload }) => {
  return api
    .get(`product-launcher/assessment-questions/get-by-category-id/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};
const getAllQuestionsAsync = async () => {
  return api
    .get(`product-launcher/assessment-questions`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllAssessmentQuestions(payload) {
  try {
    const result = yield call(getAllAssessmentQuestionsAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllAssessmentQuestionsSuccess(result.data.result));
    } else {
      yield put(
        getAllAssessmentQuestionsError(
          'Failed to get all assessment questions!'
        )
      );
    }
  } catch (error) {
    yield put(
      getAllAssessmentQuestionsError('Failed to get all assessment questions!')
    );
  }
}
function* GetAllQuestions() {
  try {
    const result = yield call(getAllQuestionsAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllQuestionsSuccess(result.data.result));
    } else {
      yield put(
        getAllQuestionsError('Failed to get all assessment questions!')
      );
    }
  } catch (error) {
    yield put(
      getAllAssessmentQuestionsError('Failed to get all assessment questions!')
    );
  }
}

const getAssessmentCategoriesAsync = async ({ payload }) => {
  return api
    .get(`basic-type/get-basicType-by-parent-id/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAssessmentCategories(payload) {
  try {
    const result = yield call(getAssessmentCategoriesAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAssessmentCategoriesSuccess(result.data.data));
    } else {
      yield put(
        getAssessmentCategoriesError('Failed to get all assessment categories!')
      );
    }
  } catch (error) {
    yield put(
      getAssessmentCategoriesError('Failed to get all assessment categories!')
    );
  }
}

function getAssessmentTagsAsync() {
  return api
    .get(`basic-type-category/assessmentTag`)
    .then((res) => res)
    .catch((error) => error);
}
function* GetAssessmentTags() {
  try {
    const result = yield call(getAssessmentTagsAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAssessmentTagsSuccess(result.data.data.basicTypeList));
    } else {
      yield put(getAssessmentTagsError('Failed to get all assessment tags!'));
    }
  } catch (error) {
    yield put(getAssessmentTagsError('Failed to get all assessment tags!'));
  }
}

const getSingleQuestionAsync = async ({ payload }) => {
  return api
    .get(`product-launcher/assessment-questions/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetSingleQuestion(payload) {
  try {
    const result = yield call(getSingleQuestionAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleQuestionSuccess(result.data.result));
    } else {
      yield put(getSingleQuestionError('Failed to get single Question!'));
    }
  } catch (error) {
    yield put(getSingleQuestionError('Failed to get single Question!'));
  }
}

const createQuestionAsync = async ({ payload }) => {
  return api
    .post(`product-launcher/assessment-questions`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateQuestion(payload) {
  try {
    const result = yield call(createQuestionAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createQuestionSuccess(result.data.result));
    } else {
      yield put(createQuestionError('Failed to create Question!'));
    }
  } catch (error) {
    yield put(createQuestionError('Failed to create Question!'));
  }
}

const orderQuestionAsync = async ({ payload }) => {
  return api
    .get(
      `/product-launcher/assessment-questions/up-down/${payload.id}/${payload.flag}`
    )
    .then((res) => res)
    .catch((error) => error);
};

function* OrderQuestion(data) {
  try {
    const result = yield call(orderQuestionAsync, data);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(orderQuestionSuccess(result.data));
    } else {
      yield put(orderQuestionError('Order Basic Type is not success!'));
    }
  } catch (error) {
    console.log('error =>', error);
  }
}

const updateQuestionAsync = async ({ payload }) => {
  return api
    .put(`product-launcher/assessment-questions/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateQuestion(payload) {
  try {
    const result = yield call(updateQuestionAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateQuestionSuccess(result.data.result));
    } else {
      yield put(updateQuestionError('Failed to update Question!'));
    }
  } catch (error) {
    yield put(updateQuestionError('Failed to update Question!'));
  }
}

const deleteQuestionAsync = async (payload) => {
  return api
    .delete(`/product-launcher/assessment-questions/${payload.id}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteQuestion(payload) {
  try {
    const result = yield call(deleteQuestionAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteQuestionSuccess(payload));
    } else {
      yield put(deleteQuestionError('Failed to delete Question!'));
    }
  } catch (error) {
    yield put(deleteQuestionError('Failed to delete Question!'));
  }
}

export function* watchGetAllAssessmentQuestions() {
  yield takeEvery(GET_ALL_QUESTIONS, GetAllAssessmentQuestions);
}
export function* watchGetAllQuestions() {
  yield takeEvery(GET_QUESTIONS, GetAllQuestions);
}
export function* watchGetAssessmentCategories() {
  yield takeEvery(GET_ASSESSMENT_CATEGORIES, GetAssessmentCategories);
}
export function* watchGetAssessmentTags() {
  yield takeEvery(GET_ASSESSMENT_TAGS, GetAssessmentTags);
}
export function* watchCreateQuestion() {
  yield takeEvery(CREATE_QUESTION, CreateQuestion);
}
export function* watchOrderQuestion() {
  yield takeEvery(ORDER_QUESTION, OrderQuestion);
}
export function* watchGetSingleQuestion() {
  yield takeEvery(GET_SINGLE_QUESTION, GetSingleQuestion);
}
export function* watchUpdateQuestion() {
  yield takeEvery(UPDATE_QUESTION, UpdateQuestion);
}
export function* watchDeleteQuestion() {
  yield takeEvery(DELETE_QUESTION, DeleteQuestion);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllAssessmentQuestions),
    fork(watchGetAllQuestions),
    fork(watchGetAssessmentCategories),
    fork(watchGetAssessmentTags),
    fork(watchCreateQuestion),
    fork(watchOrderQuestion),
    fork(watchGetSingleQuestion),
    fork(watchUpdateQuestion),
    fork(watchDeleteQuestion),
  ]);
}
