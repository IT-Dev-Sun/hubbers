import {
  GET_ALL_PARTNER_CONTACT,
  GET_ALL_PARTNER_CONTACT_SUCCESS,
  GET_ALL_PARTNER_CONTACT_ERROR,
  CREATE_PARTNER_CONTACT,
  CREATE_PARTNER_CONTACT_SUCCESS,
  CREATE_PARTNER_CONTACT_ERROR,
  UPDATE_PARTNER_CONTACT,
  UPDATE_PARTNER_CONTACT_SUCCESS,
  UPDATE_PARTNER_CONTACT_ERROR,
  DELETE_PARTNER_CONTACT,
  DELETE_PARTNER_CONTACT_SUCCESS,
  DELETE_PARTNER_CONTACT_ERROR,
} from '../../types/partner/partner-contact';

export const getAllPartnerContact = (id) => ({
  type: GET_ALL_PARTNER_CONTACT,
  payload: id,
});
export const getAllPartnerContactSuccess = (data) => ({
  type: GET_ALL_PARTNER_CONTACT_SUCCESS,
  payload: data,
});
export const getAllPartnerContactError = (data) => ({
  type: GET_ALL_PARTNER_CONTACT_ERROR,
  payload: data,
});

export const createPartnerContact = (data) => ({
  type: CREATE_PARTNER_CONTACT,
  payload: data,
});
export const createPartnerContactSuccess = (data) => ({
  type: CREATE_PARTNER_CONTACT_SUCCESS,
  payload: data,
});
export const createPartnerContactError = (data) => ({
  type: CREATE_PARTNER_CONTACT_ERROR,
  payload: data,
});

export const updatePartnerContact = (data) => ({
  type: UPDATE_PARTNER_CONTACT,
  payload: data,
});
export const updatePartnerContactSuccess = (data) => ({
  type: UPDATE_PARTNER_CONTACT_SUCCESS,
  payload: data,
});
export const updatePartnerContactError = (data) => ({
  type: UPDATE_PARTNER_CONTACT_ERROR,
  payload: data,
});

export const deletePartnerContact = (data) => ({
  type: DELETE_PARTNER_CONTACT,
  payload: data,
});
export const deletePartnerContactSuccess = (data) => ({
  type: DELETE_PARTNER_CONTACT_SUCCESS,
  payload: data,
});
export const deletePartnerContactError = (data) => ({
  type: DELETE_PARTNER_CONTACT_ERROR,
  payload: data,
});
