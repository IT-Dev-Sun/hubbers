import {
  CREATE_GROUP,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
  GET_ALL_GROUP,
  GET_ALL_GROUP_ERROR,
  GET_ALL_GROUP_SUCCESS,
  UPDATE_GROUP,
  UPDATE_GROUP_ERROR,
  UPDATE_GROUP_SUCCESS,
  DELETE_GROUP,
  DELETE_GROUP_ERROR,
  DELETE_GROUP_SUCCESS,
} from '../../types/community/group';

export const getAllGroups = () => ({
  type: GET_ALL_GROUP,
});
export const getAllGroupsSuccess = (data) => ({
  type: GET_ALL_GROUP_SUCCESS,
  payload: data,
});

export const getAllGroupsError = (data) => ({
  type: GET_ALL_GROUP_ERROR,
  payload: data,
});

export const createGroup = (data) => ({
  type: CREATE_GROUP,
  payload: data,
});
export const createGroupSuccess = (data) => ({
  type: CREATE_GROUP_SUCCESS,
  payload: data,
});

export const createGroupError = (data) => ({
  type: CREATE_GROUP_ERROR,
  payload: data,
});

export const updateGroup = (data) => ({
  type: UPDATE_GROUP,
  payload: data,
});
export const updateGroupSuccess = (data) => ({
  type: UPDATE_GROUP_SUCCESS,
  payload: data,
});

export const updateGroupError = (data) => ({
  type: UPDATE_GROUP_ERROR,
  payload: data,
});

export const deleteGroup = (data) => ({
  type: DELETE_GROUP,
  payload: data,
});
export const deleteGroupSuccess = (data) => ({
  type: DELETE_GROUP_SUCCESS,
  payload: data,
});

export const deleteGroupError = (data) => ({
  type: DELETE_GROUP_ERROR,
  payload: data,
});
