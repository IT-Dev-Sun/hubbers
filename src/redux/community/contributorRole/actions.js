import {
  GET_ALL_CONTRIBUTOR_ROLE,
  GET_ALL_CONTRIBUTOR_ROLE_SUCCESS,
  GET_ALL_CONTRIBUTOR_ROLE_ERROR,
} from '../../types/community/contributorRole';

export const getAllContributorRole = () => ({
  type: GET_ALL_CONTRIBUTOR_ROLE,
});
export const getAllContributorRoleSuccess = (data) => ({
  type: GET_ALL_CONTRIBUTOR_ROLE_SUCCESS,
  payload: data,
});

export const getAllContributorRoleError = (data) => ({
  type: GET_ALL_CONTRIBUTOR_ROLE_ERROR,
  payload: data,
});
