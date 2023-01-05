import {
  GET_ALL_HUBBERS_TEAM,
  GET_ALL_HUBBERS_TEAM_SUCCESS,
  GET_ALL_HUBBERS_TEAM_ERROR,
  CREATE_HUBBERS_TEAM,
  CREATE_HUBBERS_TEAM_SUCCESS,
  CREATE_HUBBERS_TEAM_ERROR,
  UPDATE_HUBBERS_TEAM,
  UPDATE_HUBBERS_TEAM_SUCCESS,
  UPDATE_HUBBERS_TEAM_ERROR,
  DELETE_HUBBERS_TEAM,
  DELETE_HUBBERS_TEAM_SUCCESS,
  DELETE_HUBBERS_TEAM_ERROR,
  ORDER_HUBBERS_TEAM,
  ORDER_HUBBERS_TEAM_SUCCESS,
  ORDER_HUBBERS_TEAM_ERROR,
} from '../types/hubbers-team';

export const getAllHubbersTeam = () => ({
  type: GET_ALL_HUBBERS_TEAM,
});
export const getAllHubbersTeamSuccess = (data) => ({
  type: GET_ALL_HUBBERS_TEAM_SUCCESS,
  payload: data,
});
export const getAllHubbersTeamError = (data) => ({
  type: GET_ALL_HUBBERS_TEAM_ERROR,
  payload: data,
});

export const createHubbersTeam = (data) => ({
  type: CREATE_HUBBERS_TEAM,
  payload: data,
});
export const createHubbersTeamSuccess = (data) => ({
  type: CREATE_HUBBERS_TEAM_SUCCESS,
  payload: data,
});
export const createHubbersTeamError = (data) => ({
  type: CREATE_HUBBERS_TEAM_ERROR,
  payload: data,
});

export const updateHubbersTeam = (data) => ({
  type: UPDATE_HUBBERS_TEAM,
  payload: data,
});
export const updateHubbersTeamSuccess = (data) => ({
  type: UPDATE_HUBBERS_TEAM_SUCCESS,
  payload: data,
});
export const updateHubbersTeamError = (data) => ({
  type: UPDATE_HUBBERS_TEAM_ERROR,
  payload: data,
});

export const deleteHubbersTeam = (data) => ({
  type: DELETE_HUBBERS_TEAM,
  payload: data,
});
export const deleteHubbersTeamSuccess = (data) => ({
  type: DELETE_HUBBERS_TEAM_SUCCESS,
  payload: data,
});
export const deleteHubbersTeamError = (data) => ({
  type: DELETE_HUBBERS_TEAM_ERROR,
  payload: data,
});

export const orderHubbersTeam = (id, flag) => ({
  type: ORDER_HUBBERS_TEAM,
  payload: { id, flag },
});
export const orderHubbersTeamSuccess = (data) => ({
  type: ORDER_HUBBERS_TEAM_SUCCESS,
  payload: data,
});
export const orderHubbersTeamError = (data) => ({
  type: ORDER_HUBBERS_TEAM_ERROR,
  payload: data,
});
