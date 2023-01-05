import {
  GET_ALL_TOPIC_TYPE,
  GET_ALL_TOPIC_TYPE_SUCCESS,
  GET_ALL_TOPIC_TYPE_ERROR,
} from '../../types/community/topicType';

export const getAllTopicTypes = () => ({
  type: GET_ALL_TOPIC_TYPE,
});
export const getAllTopicTypesSuccess = (data) => ({
  type: GET_ALL_TOPIC_TYPE_SUCCESS,
  payload: data,
});

export const getAllTopicTypesError = (data) => ({
  type: GET_ALL_TOPIC_TYPE_ERROR,
  payload: data,
});
