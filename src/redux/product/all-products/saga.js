import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_PRODUCT,
  GET_SINGLE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../../types/product/all-products';

import {
  getAllProduct,
  getAllProductSuccess,
  getAllProductError,
  getSingleProductSuccess,
  getSingleProductError,
  createProductSuccess,
  createProductError,
  updateProductSuccess,
  updateProductError,
  deleteProductSuccess,
  deleteProductError,
} from './actions';

const getAllProductAsync = async () => {
  return api
    .get(`/project/all-list`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetAllProduct() {
  try {
    const result = yield call(getAllProductAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllProductSuccess(result.data.data));
    } else {
      yield put(getAllProductError('Failed to get all products!'));
    }
  } catch (error) {
    yield put(getAllProductError('Failed to get all products!'));
  }
}

const getSingleProductAsync = async ({ payload }) => {
  return api
    .get(`/project/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* GetSingleProduct(payload) {
  try {
    const result = yield call(getSingleProductAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getSingleProductSuccess(result.data.data));
    } else {
      yield put(getSingleProductError('Failed to get single product!'));
    }
  } catch (error) {
    yield put(getSingleProductError('Failed to get single product!'));
  }
}

const createProductAsync = async ({ payload }) => {
  return api
    .post(`/project/admin-create`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* CreateProduct(payload) {
  try {
    const result = yield call(createProductAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createProductSuccess());
      yield put(getAllProduct());
    } else {
      yield put(createProductError('Failed to create product!'));
    }
  } catch (error) {
    yield put(createProductError('Failed to create product!'));
  }
}

const updateProductAsync = async ({ payload }) => {
  return api
    .put(`/project/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};
function* UpdateProduct(payload) {
  try {
    const result = yield call(updateProductAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateProductSuccess(result.data.data));
      yield put(getAllProduct());
    } else {
      yield put(updateProductError('Failed to update product!'));
    }
  } catch (error) {
    yield put(updateProductError('Failed to update product!'));
  }
}

const deleteProductAsync = async (payload) => {
  return api
    .delete(`/project/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};
function* DeleteProduct(payload) {
  try {
    const result = yield call(deleteProductAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteProductSuccess(result.data.data));
      yield put(getAllProduct());
    } else {
      yield put(deleteProductError('Failed to delete product!'));
    }
  } catch (error) {
    yield put(deleteProductError('Failed to delete product!'));
  }
}

export function* watchGetAllProduct() {
  yield takeEvery(GET_ALL_PRODUCT, GetAllProduct);
}
export function* watchGetSingleProduct() {
  yield takeEvery(GET_SINGLE_PRODUCT, GetSingleProduct);
}
export function* watchCreateProduct() {
  yield takeEvery(CREATE_PRODUCT, CreateProduct);
}
export function* watchUpdateProduct() {
  yield takeEvery(UPDATE_PRODUCT, UpdateProduct);
}
export function* watchDeleteProduct() {
  yield takeEvery(DELETE_PRODUCT, DeleteProduct);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllProduct),
    fork(watchGetSingleProduct),
    fork(watchCreateProduct),
    fork(watchUpdateProduct),
    fork(watchDeleteProduct),
  ]);
}
