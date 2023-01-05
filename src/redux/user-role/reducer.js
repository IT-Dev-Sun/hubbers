import {
  GET_ALL_USER_ROLES,
  GET_ALL_USER_ROLES_SUCCESS,
  GET_ALL_USER_ROLES_ERROR,
} from '../types/user-role';

const INIT_STATE = {
  loading: false,
  userRoleData: [],
  singleUserRole: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USER_ROLES:
      return { ...state, loading: true };
    case GET_ALL_USER_ROLES_SUCCESS:
      return { ...state, loading: false, userRoleData: action.payload };
    case GET_ALL_USER_ROLES_ERROR:
      return {
        ...state,
        loading: false,
        userRoleData: [],
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
