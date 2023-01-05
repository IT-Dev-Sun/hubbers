import {
  GET_MEMBER_LIST_BY_COMMUNITY,
  GET_MEMBER_LIST_BY_COMMUNITY_ERROR,
  GET_MEMBER_LIST_BY_COMMUNITY_SUCCESS,
  GET_ALL_MEMBER,
  GET_ALL_MEMBER_ERROR,
  GET_ALL_MEMBER_SUCCESS,
  CREATE_MEMBER,
  CREATE_MEMBER_ERROR,
  CREATE_MEMBER_SUCCESS,
  UPDATE_MEMBER,
  UPDATE_MEMBER_ERROR,
  UPDATE_MEMBER_SUCCESS,
  DELETE_MEMBER,
  DELETE_MEMBER_ERROR,
  DELETE_MEMBER_SUCCESS,
} from '../../types/community/member';

export const getMemberListByCommunity = (data) => ({
  type: GET_MEMBER_LIST_BY_COMMUNITY,
  payload: data,
});
export const getMemberListByCommunitySuccess = (data) => ({
  type: GET_MEMBER_LIST_BY_COMMUNITY_SUCCESS,
  payload: data,
});
export const getMemberListByCommunityError = (data) => ({
  type: GET_MEMBER_LIST_BY_COMMUNITY_ERROR,
  payload: data,
});

export const getAllMember = () => ({
  type: GET_ALL_MEMBER,
});
export const getAllMemberSuccess = (data) => ({
  type: GET_ALL_MEMBER_SUCCESS,
  payload: data,
});
export const getAllMemberError = (data) => ({
  type: GET_ALL_MEMBER_ERROR,
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

export const createMember = (data) => ({
  type: CREATE_MEMBER,
  payload: data,
});
export const createMemberSuccess = (data) => ({
  type: CREATE_MEMBER_SUCCESS,
  payload: data,
});

export const createMemberError = (data) => ({
  type: CREATE_MEMBER_ERROR,
  payload: data,
});

export const updateMember = (data) => ({
  type: UPDATE_MEMBER,
  payload: data,
});

export const updateMemberSuccess = (data) => ({
  type: UPDATE_MEMBER_SUCCESS,
  payload: data,
});

export const updateMemberError = (data) => ({
  type: UPDATE_MEMBER_ERROR,
  payload: data,
});

export const deleteMember = (data) => ({
  type: DELETE_MEMBER,
  payload: data,
});

export const deleteMemberSuccess = (data) => ({
  type: DELETE_MEMBER_SUCCESS,
  payload: data,
});

export const deleteMemberError = (data) => ({
  type: DELETE_MEMBER_ERROR,
  payload: data,
});
