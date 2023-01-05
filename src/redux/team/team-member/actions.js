import {
  GET_ALL_TEAM_MEMBER,
  GET_ALL_TEAM_MEMBER_SUCCESS,
  GET_ALL_TEAM_MEMBER_ERROR,
  ORDER_TEAM_MEMBER,
  ORDER_TEAM_MEMBER_SUCCESS,
  ORDER_TEAM_MEMBER_ERROR,
  CREATE_TEAM_MEMBER,
  CREATE_TEAM_MEMBER_SUCCESS,
  CREATE_TEAM_MEMBER_ERROR,
  UPDATE_TEAM_MEMBER,
  UPDATE_TEAM_MEMBER_SUCCESS,
  UPDATE_TEAM_MEMBER_ERROR,
  CHANGE_TEAM_MEMBER,
  CHANGE_TEAM_MEMBER_SUCCESS,
  CHANGE_TEAM_MEMBER_ERROR,
  DELETE_TEAM_MEMBER,
  DELETE_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_ERROR,
} from '../../types/team/team-member';

export const getAllTeamMember = (teamId) => ({
  type: GET_ALL_TEAM_MEMBER,
  payload: teamId,
});
export const getAllTeamMemberSuccess = (data) => ({
  type: GET_ALL_TEAM_MEMBER_SUCCESS,
  payload: data,
});
export const getAllTeamMemberError = (data) => ({
  type: GET_ALL_TEAM_MEMBER_ERROR,
  payload: data,
});

export const orderTeamMember = (id, flag, currentTeam) => ({
  type: ORDER_TEAM_MEMBER,
  payload: { id, flag, currentTeam },
});
export const orderTeamMemberSuccess = (data) => ({
  type: ORDER_TEAM_MEMBER_SUCCESS,
  payload: data,
});
export const orderTeamMemberError = (data) => ({
  type: ORDER_TEAM_MEMBER_ERROR,
  payload: data,
});

export const createTeamMember = (data) => ({
  type: CREATE_TEAM_MEMBER,
  payload: data,
});
export const createTeamMemberSuccess = (data) => ({
  type: CREATE_TEAM_MEMBER_SUCCESS,
  payload: data,
});
export const createTeamMemberError = (data) => ({
  type: CREATE_TEAM_MEMBER_ERROR,
  payload: data,
});

export const updateTeamMember = (data) => ({
  type: UPDATE_TEAM_MEMBER,
  payload: data,
});
export const updateTeamMemberSuccess = (data) => ({
  type: UPDATE_TEAM_MEMBER_SUCCESS,
  payload: data,
});
export const updateTeamMemberError = (data) => ({
  type: UPDATE_TEAM_MEMBER_ERROR,
  payload: data,
});

export const changeTeamMember = (id, flag, currentTeam) => ({
  type: CHANGE_TEAM_MEMBER,
  payload: { id, flag, currentTeam },
});
export const changeTeamMemberSuccess = (data) => ({
  type: CHANGE_TEAM_MEMBER_SUCCESS,
  payload: data,
});
export const changeTeamMemberError = (data) => ({
  type: CHANGE_TEAM_MEMBER_ERROR,
  payload: data,
});

export const deleteTeamMember = (id, currentTeam) => ({
  type: DELETE_TEAM_MEMBER,
  payload: { id, currentTeam },
});
export const deleteTeamMemberSuccess = (data) => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
  payload: data,
});
export const deleteTeamMemberError = (data) => ({
  type: DELETE_TEAM_MEMBER_ERROR,
  payload: data,
});
