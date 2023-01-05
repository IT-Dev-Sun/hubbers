import {
  GET_ALL_GROUP_PRIVACY_OPTION,
  GET_ALL_GROUP_PRIVACY_OPTION_SUCCESS,
  GET_ALL_GROUP_PRIVACY_OPTION_ERROR,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_SUCCESS,
  GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_ERROR,
  CREATE_GROUP_PRIVACY_OPTION,
  CREATE_GROUP_PRIVACY_OPTION_SUCCESS,
  CREATE_GROUP_PRIVACY_OPTION_ERROR,
  UPDATE_GROUP_PRIVACY_OPTION,
  UPDATE_GROUP_PRIVACY_OPTION_SUCCESS,
  UPDATE_GROUP_PRIVACY_OPTION_ERROR,
  DELETE_GROUP_PRIVACY_OPTION,
  DELETE_GROUP_PRIVACY_OPTION_SUCCESS,
  DELETE_GROUP_PRIVACY_OPTION_ERROR,
} from '../../types/community/groupPrivacyOption';

export const getAllGroupPrivacyOption = () => ({
  type: GET_ALL_GROUP_PRIVACY_OPTION,
});
export const getAllGroupPrivacyOptionSuccess = (data) => ({
  type: GET_ALL_GROUP_PRIVACY_OPTION_SUCCESS,
  payload: data,
});
export const getAllGroupPrivacyOptionError = (data) => ({
  type: GET_ALL_GROUP_PRIVACY_OPTION_ERROR,
  payload: data,
});

export const getAllPublicGroupPrivacyOption = () => ({
  type: GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION,
});
export const getAllPublicGroupPrivacyOptionSuccess = (data) => ({
  type: GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_SUCCESS,
  payload: data,
});
export const getAllPublicGroupPrivacyOptionError = (data) => ({
  type: GET_ALL_PUBLIC_GROUP_PRIVACY_OPTION_ERROR,
  payload: data,
});

export const createGroupPrivacyOption = (data) => ({
  type: CREATE_GROUP_PRIVACY_OPTION,
  payload: data,
});
export const createGroupPrivacyOptionSuccess = (data) => ({
  type: CREATE_GROUP_PRIVACY_OPTION_SUCCESS,
  payload: data,
});
export const createGroupPrivacyOptionError = (data) => ({
  type: CREATE_GROUP_PRIVACY_OPTION_ERROR,
  payload: data,
});

export const updateGroupPrivacyOption = (data) => ({
  type: UPDATE_GROUP_PRIVACY_OPTION,
  payload: data,
});
export const updateGroupPrivacyOptionSuccess = (data) => ({
  type: UPDATE_GROUP_PRIVACY_OPTION_SUCCESS,
  payload: data,
});
export const updateGroupPrivacyOptionError = (data) => ({
  type: UPDATE_GROUP_PRIVACY_OPTION_ERROR,
  payload: data,
});

export const deleteGroupPrivacyOption = (data) => ({
  type: DELETE_GROUP_PRIVACY_OPTION,
  payload: data,
});
export const deleteGroupPrivacyOptionSuccess = (data) => ({
  type: DELETE_GROUP_PRIVACY_OPTION_SUCCESS,
  payload: data,
});
export const deleteGroupPrivacyOptionError = (data) => ({
  type: DELETE_GROUP_PRIVACY_OPTION_ERROR,
  payload: data,
});
