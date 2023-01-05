import {
  GET_ALL_TOPIC,
  GET_ALL_TOPIC_SUCCESS,
  GET_ALL_TOPIC_ERROR,
  GET_SINGLE_TOPIC,
  GET_SINGLE_TOPIC_SUCCESS,
  GET_SINGLE_TOPIC_ERROR,
  CREATE_TOPIC,
  CREATE_TOPIC_SUCCESS,
  CREATE_TOPIC_ERROR,
  UPDATE_TOPIC,
  UPDATE_TOPIC_SUCCESS,
  UPDATE_TOPIC_ERROR,
  DELETE_TOPIC,
  DELETE_TOPIC_SUCCESS,
  DELETE_TOPIC_ERROR,
} from '../../types/community/topic';

export const getAllTopics = () => ({
  type: GET_ALL_TOPIC,
});
export const getAllTopicsSuccess = (data) => ({
  type: GET_ALL_TOPIC_SUCCESS,
  payload: data,
});

export const getAllTopicsError = (data) => ({
  type: GET_ALL_TOPIC_ERROR,
  payload: data,
});

export const getSingleTopic = (data) => ({
  type: GET_SINGLE_TOPIC,
  payload: data,
});
export const getSingleTopicSuccess = (data) => ({
  type: GET_SINGLE_TOPIC_SUCCESS,
  payload: data,
});

export const getSingleTopicError = (data) => ({
  type: GET_SINGLE_TOPIC_ERROR,
  payload: data,
});

export const createTopic = (data) => ({
  type: CREATE_TOPIC,
  payload: data,
});
export const createTopicSuccess = (data) => ({
  type: CREATE_TOPIC_SUCCESS,
  payload: data,
});

export const createTopicError = (data) => ({
  type: CREATE_TOPIC_ERROR,
  payload: data,
});

export const updateTopic = (data) => ({
  type: UPDATE_TOPIC,
  payload: data,
});

export const updateTopicSuccess = (data) => ({
  type: UPDATE_TOPIC_SUCCESS,
  payload: data,
});

export const updateTopicError = (data) => ({
  type: UPDATE_TOPIC_ERROR,
  payload: data,
});

export const deleteTopic = (data) => ({
  type: DELETE_TOPIC,
  payload: data,
});

export const deleteTopicSuccess = (data) => ({
  type: DELETE_TOPIC_SUCCESS,
  payload: data,
});

export const deleteTopicError = (data) => ({
  type: DELETE_TOPIC_ERROR,
  payload: data,
});
