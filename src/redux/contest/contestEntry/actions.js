import {
  GET_ALL_CONTEST_ENTRY,
  GET_ALL_CONTEST_ENTRY_SUCCESS,
  GET_ALL_CONTEST_ENTRY_ERROR,
  DELETE_CONTEST_ENTRY,
  DELETE_CONTEST_ENTRY_SUCCESS,
  DELETE_CONTEST_ENTRY_ERROR,
} from '../../types/contest/contestType';

export const getAllContestEntryList = () => ({
  type: GET_ALL_CONTEST_ENTRY,
});
export const getAllContestEntryListSuccess = (data) => ({
  type: GET_ALL_CONTEST_ENTRY_SUCCESS,
  payload: data,
});
export const getAllContestEntryListError = (data) => ({
  type: GET_ALL_CONTEST_ENTRY_ERROR,
  payload: data,
});

export const deleteContestEntryList = (data) => ({
  type: DELETE_CONTEST_ENTRY,
  payload: data,
});
export const deleteContestEntryListSuccess = (data) => ({
  type: DELETE_CONTEST_ENTRY_SUCCESS,
  payload: data,
});
export const deleteContestEntryListError = (data) => ({
  type: DELETE_CONTEST_ENTRY_ERROR,
  payload: data,
});
