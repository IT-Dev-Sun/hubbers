import {
  GET_ALL_TEAM,
  GET_ALL_TEAM_SUCCESS,
  GET_ALL_TEAM_ERROR,
  CREATE_TEAM,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_ERROR,
  UPDATE_TEAM,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_ERROR,
  DELETE_TEAM,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_ERROR,
} from '../../types/team/all-teams';

export const getAllTeam = () => ({
  type: GET_ALL_TEAM,
});
export const getAllTeamSuccess = (data) => ({
  type: GET_ALL_TEAM_SUCCESS,
  payload: data,
});
export const getAllTeamError = (data) => ({
  type: GET_ALL_TEAM_ERROR,
  payload: data,
});

export const createTeam = (data) => ({
  type: CREATE_TEAM,
  payload: data,
});
export const createTeamSuccess = (data) => ({
  type: CREATE_TEAM_SUCCESS,
  payload: data,
});
export const createTeamError = (data) => ({
  type: CREATE_TEAM_ERROR,
  payload: data,
});

export const updateTeam = (data) => ({
  type: UPDATE_TEAM,
  payload: data,
});
export const updateTeamSuccess = (data) => ({
  type: UPDATE_TEAM_SUCCESS,
  payload: data,
});
export const updateTeamError = (data) => ({
  type: UPDATE_TEAM_ERROR,
  payload: data,
});

export const deleteTeam = (data) => ({
  type: DELETE_TEAM,
  payload: data,
});
export const deleteTeamSuccess = (data) => ({
  type: DELETE_TEAM_SUCCESS,
  payload: data,
});
export const deleteTeamError = (data) => ({
  type: DELETE_TEAM_ERROR,
  payload: data,
});
