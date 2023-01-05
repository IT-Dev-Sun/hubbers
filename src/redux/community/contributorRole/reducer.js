import {
  GET_ALL_CONTRIBUTOR_ROLE,
  GET_ALL_CONTRIBUTOR_ROLE_SUCCESS,
  GET_ALL_CONTRIBUTOR_ROLE_ERROR,
} from '../../types/community/contributorRole';

const INIT_STATE = {
  loading: false,
  list: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CONTRIBUTOR_ROLE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTRIBUTOR_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_ALL_CONTRIBUTOR_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
