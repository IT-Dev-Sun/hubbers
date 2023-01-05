import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';
import {
  GET_ALL_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../../types/community/post';

import {
  getAllPost,
  getAllPostSuccess,
  getAllPostError,
  createPostSuccess,
  createPostError,
  updatePostSuccess,
  updatePostError,
  deletePostSuccess,
  deletePostError,
} from './actions';

const getAllPostAsync = async () => {
  return api
    .get(`/community/post`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllPost() {
  try {
    const result = yield call(getAllPostAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllPostSuccess(result.data.data));
    } else {
      yield put(getAllPostError('Get All Posts Response is not success!'));
    }
  } catch (error) {
    yield put(getAllPostError('Get All Posts Error !'));
  }
}

const createPostAsync = async ({ payload }) => {
  return api
    .post(`/community/post`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreatePost(payload) {
  try {
    const result = yield call(createPostAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createPostSuccess(result.data.data));
      yield put(getAllPost());
    } else {
      yield put(createPostError('Create Post Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(createPostError('Create Post Error !'));
  }
}

const updatePostAsync = async ({ payload }) => {
  return api
    .put(`/community/post/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdatePost(payload) {
  try {
    const result = yield call(updatePostAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updatePostSuccess(result.data.data));
      yield put(getAllPost());
    } else {
      yield put(updatePostError('Update Post Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(updatePostError('Update Post Error !'));
  }
}

const deletePostAsync = async (payload) => {
  return api
    .delete(`/community/post/${payload.payload}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DeletePost(payload) {
  try {
    const result = yield call(deletePostAsync, payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deletePostSuccess(result.data.data));
      yield put(getAllPost());
    } else {
      yield put(deletePostError('Delete Post Response is not success!'));
    }
  } catch (error) {
    console.log(error);
    yield put(deletePostError('Delete Post Error !'));
  }
}

export function* watchGetAllPost() {
  yield takeEvery(GET_ALL_POST, GetAllPost);
}
export function* watchCreatePost() {
  yield takeEvery(CREATE_POST, CreatePost);
}
export function* watchUpdatePost() {
  yield takeEvery(UPDATE_POST, UpdatePost);
}
export function* watchDeletePost() {
  yield takeEvery(DELETE_POST, DeletePost);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllPost),
    fork(watchCreatePost),
    fork(watchUpdatePost),
    fork(watchDeletePost),
  ]);
}
