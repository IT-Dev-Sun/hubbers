import {
  CREATE_EVENT,
  CREATE_EVENT_ERROR,
  CREATE_EVENT_SUCCESS,
  GET_ALL_EVENT,
  GET_ALL_EVENT_ERROR,
  GET_ALL_EVENT_SUCCESS,
  GET_SINGLE_EVENT,
  GET_SINGLE_EVENT_ERROR,
  GET_SINGLE_EVENT_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_ERROR,
  UPDATE_EVENT_SUCCESS,
} from '../../types/community/event';

export const getAllEvents = () => ({
  type: GET_ALL_EVENT,
});
export const getAllEventsSuccess = (data) => ({
  type: GET_ALL_EVENT_SUCCESS,
  payload: data,
});

export const getAllEventsError = (data) => ({
  type: GET_ALL_EVENT_ERROR,
  payload: data,
});

export const getSingleEvent = (data) => ({
  type: GET_SINGLE_EVENT,
  payload: data,
});
export const getSingleEventSuccess = (data) => ({
  type: GET_SINGLE_EVENT_SUCCESS,
  payload: data,
});

export const getSingleEventError = (data) => ({
  type: GET_SINGLE_EVENT_ERROR,
  payload: data,
});

export const createEvent = (data) => ({
  type: CREATE_EVENT,
  payload: data,
});
export const createEventSuccess = (data) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: data,
});

export const createEventError = (data) => ({
  type: CREATE_EVENT_ERROR,
  payload: data,
});

export const updateEvent = (data) => ({
  type: UPDATE_EVENT,
  payload: data,
});
export const updateEventSuccess = (data) => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: data,
});

export const updateEventError = (data) => ({
  type: UPDATE_EVENT_ERROR,
  payload: data,
});
