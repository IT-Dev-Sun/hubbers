import {
  GET_ALL_TEAM_MEMBER_ROLE,
  GET_ALL_TEAM_MEMBER_ROLE_SUCCESS,
  GET_ALL_TEAM_MEMBER_ROLE_ERROR,
  CREATE_TEAM_MEMBER_ROLE,
  CREATE_TEAM_MEMBER_ROLE_SUCCESS,
  CREATE_TEAM_MEMBER_ROLE_ERROR,
  UPDATE_TEAM_MEMBER_ROLE,
  UPDATE_TEAM_MEMBER_ROLE_SUCCESS,
  UPDATE_TEAM_MEMBER_ROLE_ERROR,
  DELETE_TEAM_MEMBER_ROLE,
  DELETE_TEAM_MEMBER_ROLE_SUCCESS,
  DELETE_TEAM_MEMBER_ROLE_ERROR,
} from '../../types/team/team-member-role';

export const getAllTeamMemberRole = () => ({
  type: GET_ALL_TEAM_MEMBER_ROLE,
});
export const getAllTeamMemberRoleSuccess = (data) => ({
  type: GET_ALL_TEAM_MEMBER_ROLE_SUCCESS,
  payload: data,
});
export const getAllTeamMemberRoleError = (data) => ({
  type: GET_ALL_TEAM_MEMBER_ROLE_ERROR,
  payload: data,
});

export const createTeamMemberRole = (data) => ({
  type: CREATE_TEAM_MEMBER_ROLE,
  payload: data,
});
export const createTeamMemberRoleSuccess = (data) => ({
  type: CREATE_TEAM_MEMBER_ROLE_SUCCESS,
  payload: data,
});
export const createTeamMemberRoleError = (data) => ({
  type: CREATE_TEAM_MEMBER_ROLE_ERROR,
  payload: data,
});

export const updateTeamMemberRole = (data) => ({
  type: UPDATE_TEAM_MEMBER_ROLE,
  payload: data,
});
export const updateTeamMemberRoleSuccess = (data) => ({
  type: UPDATE_TEAM_MEMBER_ROLE_SUCCESS,
  payload: data,
});
export const updateTeamMemberRoleError = (data) => ({
  type: UPDATE_TEAM_MEMBER_ROLE_ERROR,
  payload: data,
});

export const deleteTeamMemberRole = (data) => ({
  type: DELETE_TEAM_MEMBER_ROLE,
  payload: data,
});
export const deleteTeamMemberRoleSuccess = (data) => ({
  type: DELETE_TEAM_MEMBER_ROLE_SUCCESS,
  payload: data,
});
export const deleteTeamMemberRoleError = (data) => ({
  type: DELETE_TEAM_MEMBER_ROLE_ERROR,
  payload: data,
});
