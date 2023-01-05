import {
  GET_ALL_PARTNER_TYPE,
  GET_ALL_PARTNER_TYPE_SUCCESS,
  GET_ALL_PARTNER_TYPE_ERROR,
  CREATE_PARTNER_TYPE,
  CREATE_PARTNER_TYPE_SUCCESS,
  CREATE_PARTNER_TYPE_ERROR,
  UPDATE_PARTNER_TYPE,
  UPDATE_PARTNER_TYPE_SUCCESS,
  UPDATE_PARTNER_TYPE_ERROR,
  DELETE_PARTNER_TYPE,
  DELETE_PARTNER_TYPE_SUCCESS,
  DELETE_PARTNER_TYPE_ERROR,
} from '../../types/partner/partner-type';

export const getAllPartnerType = () => ({
  type: GET_ALL_PARTNER_TYPE,
});
export const getAllPartnerTypeSuccess = (data) => ({
  type: GET_ALL_PARTNER_TYPE_SUCCESS,
  payload: data,
});
export const getAllPartnerTypeError = (data) => ({
  type: GET_ALL_PARTNER_TYPE_ERROR,
  payload: data,
});

export const createPartnerType = (data) => ({
  type: CREATE_PARTNER_TYPE,
  payload: data,
});
export const createPartnerTypeSuccess = (data) => ({
  type: CREATE_PARTNER_TYPE_SUCCESS,
  payload: data,
});
export const createPartnerTypeError = (data) => ({
  type: CREATE_PARTNER_TYPE_ERROR,
  payload: data,
});

export const updatePartnerType = (data) => ({
  type: UPDATE_PARTNER_TYPE,
  payload: data,
});
export const updatePartnerTypeSuccess = (data) => ({
  type: UPDATE_PARTNER_TYPE_SUCCESS,
  payload: data,
});
export const updatePartnerTypeError = (data) => ({
  type: UPDATE_PARTNER_TYPE_ERROR,
  payload: data,
});

export const deletePartnerType = (data) => ({
  type: DELETE_PARTNER_TYPE,
  payload: data,
});
export const deletePartnerTypeSuccess = (data) => ({
  type: DELETE_PARTNER_TYPE_SUCCESS,
  payload: data,
});
export const deletePartnerTypeError = (data) => ({
  type: DELETE_PARTNER_TYPE_ERROR,
  payload: data,
});
