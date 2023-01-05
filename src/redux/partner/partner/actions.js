import {
  GET_ALL_PARTNER,
  GET_ALL_PARTNER_SUCCESS,
  GET_ALL_PARTNER_ERROR,
  CREATE_PARTNER,
  CREATE_PARTNER_SUCCESS,
  CREATE_PARTNER_ERROR,
  UPDATE_PARTNER,
  UPDATE_PARTNER_SUCCESS,
  UPDATE_PARTNER_ERROR,
  DELETE_PARTNER,
  DELETE_PARTNER_SUCCESS,
  DELETE_PARTNER_ERROR,
} from '../../types/partner/partner';

export const getAllPartner = () => ({
  type: GET_ALL_PARTNER,
});
export const getAllPartnerSuccess = (data) => ({
  type: GET_ALL_PARTNER_SUCCESS,
  payload: data,
});
export const getAllPartnerError = (data) => ({
  type: GET_ALL_PARTNER_ERROR,
  payload: data,
});

export const createPartner = (data) => ({
  type: CREATE_PARTNER,
  payload: data,
});
export const createPartnerSuccess = (data) => ({
  type: CREATE_PARTNER_SUCCESS,
  payload: data,
});
export const createPartnerError = (data) => ({
  type: CREATE_PARTNER_ERROR,
  payload: data,
});

export const updatePartner = (data) => ({
  type: UPDATE_PARTNER,
  payload: data,
});
export const updatePartnerSuccess = (data) => ({
  type: UPDATE_PARTNER_SUCCESS,
  payload: data,
});
export const updatePartnerError = (data) => ({
  type: UPDATE_PARTNER_ERROR,
  payload: data,
});

export const deletePartner = (data) => ({
  type: DELETE_PARTNER,
  payload: data,
});
export const deletePartnerSuccess = (data) => ({
  type: DELETE_PARTNER_SUCCESS,
  payload: data,
});
export const deletePartnerError = (data) => ({
  type: DELETE_PARTNER_ERROR,
  payload: data,
});
