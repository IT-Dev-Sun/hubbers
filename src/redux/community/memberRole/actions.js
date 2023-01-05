import {
  GET_ALL_MEMBER_ROLE,
  GET_ALL_MEMBER_ROLE_SUCCESS,
  GET_ALL_MEMBER_ROLE_ERROR,
} from '../../types/community/memberRole';

export const getAllMemberRoles = () => ({
  type: GET_ALL_MEMBER_ROLE,
});
export const getAllMemberRolesSuccess = (data) => ({
  type: GET_ALL_MEMBER_ROLE_SUCCESS,
  payload: data,
});

export const getAllMemberRolesError = (data) => ({
  type: GET_ALL_MEMBER_ROLE_ERROR,
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

// export const createEvent = (data) => ({
//   type: CREATE_EVENT,
//   payload: data,
// });
// export const createEventSuccess = (data) => ({
//   type: CREATE_EVENT_SUCCESS,
//   payload: data,
// });

// export const createEventError = (data) => ({
//   type: CREATE_EVENT_ERROR,
//   payload: data,
// });

// export const updateEvent = (data) => ({
//   type: UPDATE_EVENT,
//   payload: data,
// });
// export const updateEventSuccess = (data) => ({
//   type: UPDATE_EVENT_SUCCESS,
//   payload: data,
// });

// export const updateEventError = (data) => ({
//   type: UPDATE_EVENT_ERROR,
//   payload: data,
// });
