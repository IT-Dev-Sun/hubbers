import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';
import {GET_ALL_PRODUCT_TAGS, CREATE_PRODUCT_TAG, UPDATE_PRODUCT_TAG, DELETE_PRODUCT_TAG} from './actionTypes';
import {getAllProductTagsSuccess, createProductTagSuccess,updateProductTagByIdSuccess, deleteBasicTypeSuccess} from './actions';

const getAllProductTagsAsync = async () =>
  api
    .get(`/project/tags`)
    .then((res) => res.data)
    .catch((error) => error);

function* GetAllProductTags() {
  try {
    const result = yield call(getAllProductTagsAsync);
    if (result.success) {
      yield put(getAllProductTagsSuccess(result.data));
    } 
  } catch (error) {
    console.log('error =>', error)
  }
}

//create
const createProductTagAsync = async (payload) =>
  api
    .post(`/project/tags/store`, payload)
    .then((res) => res.data)
    .catch((error) => error);


function* CreateProductTag({payload}) {
  try {
    const result = yield call(createProductTagAsync, payload);
    if (result.success) {
      yield put(createProductTagSuccess(result.data));
    } 
  } catch (error) {
    console.log('error =>', error)
  }
}


//update
const updateProductTagAsync = async (payload) =>
  api
    .put(`/project/tags/${payload.id}`, payload)
    .then((res) => res.data)
    .catch((error) => error);

function* UpdateProductTag({payload}) {
  try {
    const result = yield call(updateProductTagAsync, payload);
    if (result.success) {
      yield put(updateProductTagByIdSuccess(result.data));
    } 
  } catch (error) {
    console.log('error =>', error)
  }
}

//delete

const deleteProductTagAsync = async (payload) =>
  api
    .delete(`/project/tags/${payload}`)
    .then((res) => res.data)
    .catch((error) => error);

function* DeleteProductTag({payload}) {
  try {
    const result = yield call(deleteProductTagAsync, payload);
    if (result.success) {
      yield put(deleteBasicTypeSuccess(payload));
    } 
  } catch (error) {
    console.log('error =>', error)
  }
}

export function* watchGetAllProductTags() {
  yield takeEvery(GET_ALL_PRODUCT_TAGS, GetAllProductTags);
}

export function* watchCreateProductTag() {
  yield takeEvery(CREATE_PRODUCT_TAG, CreateProductTag);
}

export function* watchUpdateProductTag() {
  yield takeEvery(UPDATE_PRODUCT_TAG, UpdateProductTag);
}

export function* watchDeleteProductTag() {
  yield takeEvery(DELETE_PRODUCT_TAG, DeleteProductTag);
}



export default function* rootSaga() {
  yield all([
    fork(watchGetAllProductTags),
    fork(watchCreateProductTag),
    fork(watchUpdateProductTag),
    fork(watchDeleteProductTag),
  ]);
}
