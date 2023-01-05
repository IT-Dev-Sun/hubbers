import { CREATE_ADMIN_ERROR } from '../../types/admin';
import { CREATE_ADMIN_ROLE_SUCCESS } from '../../types/admin-role';
import {
  GET_ALL_CONTEST_DESCRIPTION,
  GET_ALL_CONTEST_DESCRIPTION_SUCCESS,
  GET_ALL_CONTEST_DESCRIPTION_ERROR,
  CREATE_CONTEST_DESCRIPTION,
} from '../../types/contest/contestType';

const INIT_STATE = {
  loading: false,
  descriptionList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CONTEST_DESCRIPTION:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_DESCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        descriptionList: action.payload.data,
      };
    case GET_ALL_CONTEST_DESCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_CONTEST_DESCRIPTION:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ADMIN_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
