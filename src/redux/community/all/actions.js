import {
  GET_ALL_COMMUNITY_ROLE,
  GET_ALL_COMMUNITY_ROLE_SUCCESS,
  GET_ALL_COMMUNITY_ROLE_ERROR,
  GET_COMMUNITY_LIST_BY_ROLE,
  GET_COMMUNITY_LIST_BY_ROLE_SUCCESS,
  GET_COMMUNITY_LIST_BY_ROLE_ERROR,
  GET_ALL_COMMUNITY,
  GET_ALL_COMMUNITY_SUCCESS,
  GET_ALL_COMMUNITY_ERROR,
  GET_SINGLE_COMMUNITY,
  GET_SINGLE_COMMUNITY_SUCCESS,
  GET_SINGLE_COMMUNITY_ERROR,
  CREATE_COMMUNITY,
  CREATE_COMMUNITY_SUCCESS,
  CREATE_COMMUNITY_ERROR,
  UPDATE_COMMUNITY,
  UPDATE_COMMUNITY_SUCCESS,
  UPDATE_COMMUNITY_ERROR,
  DELETE_COMMUNITY,
  DELETE_COMMUNITY_SUCCESS,
  DELETE_COMMUNITY_ERROR,
} from '../../types/community/community-all';

export const getAllCommunityRole = () => ({
  type: GET_ALL_COMMUNITY_ROLE,
});
export const getAllCommunityRoleSuccess = (data) => ({
  type: GET_ALL_COMMUNITY_ROLE_SUCCESS,
  payload: data,
});
export const getAllCommunityRoleError = (data) => ({
  type: GET_ALL_COMMUNITY_ROLE_ERROR,
  payload: data,
});

export const getCommunityListByRole = (data) => ({
  type: GET_COMMUNITY_LIST_BY_ROLE,
  payload: data,
});
export const getCommunityListByRoleSuccess = (data) => ({
  type: GET_COMMUNITY_LIST_BY_ROLE_SUCCESS,
  payload: data,
});
export const getCommunityListByRoleError = (data) => ({
  type: GET_COMMUNITY_LIST_BY_ROLE_ERROR,
  payload: data,
});

export const getAllCommunity = () => ({
  type: GET_ALL_COMMUNITY,
});
export const getAllCommunitySuccess = (data) => ({
  type: GET_ALL_COMMUNITY_SUCCESS,
  payload: data,
});

export const getAllCommunityError = (data) => ({
  type: GET_ALL_COMMUNITY_ERROR,
  payload: data,
});

export const getSingleCommunity = (data) => ({
  type: GET_SINGLE_COMMUNITY,
  payload: data,
});
export const getSingleCommunitySuccess = (data) => ({
  type: GET_SINGLE_COMMUNITY_SUCCESS,
  payload: data,
});

export const getSingleCommunityError = (data) => ({
  type: GET_SINGLE_COMMUNITY_ERROR,
  payload: data,
});

export const createCommunity = (data) => ({
  type: CREATE_COMMUNITY,
  payload: data,
});
export const createCommunitySuccess = (data) => ({
  type: CREATE_COMMUNITY_SUCCESS,
  payload: data,
});

export const createCommunityError = (data) => ({
  type: CREATE_COMMUNITY_ERROR,
  payload: data,
});

export const updateCommunity = (data) => ({
  type: UPDATE_COMMUNITY,
  payload: data,
});
export const updateCommunitySuccess = (data) => ({
  type: UPDATE_COMMUNITY_SUCCESS,
  payload: data,
});

export const updateCommunityError = (data) => ({
  type: UPDATE_COMMUNITY_ERROR,
  payload: data,
});

export const deleteCommunity = (data) => ({
  type: DELETE_COMMUNITY,
  payload: data,
});
export const deleteCommunitySuccess = (data) => ({
  type: DELETE_COMMUNITY_SUCCESS,
  payload: data,
});

export const deleteCommunityError = (data) => ({
  type: DELETE_COMMUNITY_ERROR,
  payload: data,
});
