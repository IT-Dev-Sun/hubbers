import {
  CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  GET_ALL_POST,
  GET_ALL_POST_ERROR,
  GET_ALL_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_ERROR,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
} from '../../types/community/post';

export const getAllPost = () => ({
  type: GET_ALL_POST,
});
export const getAllPostSuccess = (data) => ({
  type: GET_ALL_POST_SUCCESS,
  payload: data,
});

export const getAllPostError = (data) => ({
  type: GET_ALL_POST_ERROR,
  payload: data,
});

// export const getSingleEvent = (data) => ({
//   type: GET_SINGLE_EVENT,
//   payload: data,
// });
// export const getSingleEventSuccess = (data) => ({
//   type: GET_SINGLE_EVENT_SUCCESS,
//   payload: data,
// });

// export const getSingleEventError = (data) => ({
//   type: GET_SINGLE_EVENT_ERROR,
//   payload: data,
// });

export const createPost = (data) => ({
  type: CREATE_POST,
  payload: data,
});
export const createPostSuccess = (data) => ({
  type: CREATE_POST_SUCCESS,
  payload: data,
});

export const createPostError = (data) => ({
  type: CREATE_POST_ERROR,
  payload: data,
});

export const updatePost = (data) => ({
  type: UPDATE_POST,
  payload: data,
});
export const updatePostSuccess = (data) => ({
  type: UPDATE_POST_SUCCESS,
  payload: data,
});

export const updatePostError = (data) => ({
  type: UPDATE_POST_ERROR,
  payload: data,
});

export const deletePost = (data) => ({
  type: DELETE_POST,
  payload: data,
});
export const deletePostSuccess = (data) => ({
  type: DELETE_POST_SUCCESS,
  payload: data,
});

export const deletePostError = (data) => ({
  type: DELETE_POST_ERROR,
  payload: data,
});
