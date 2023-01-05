import {
  GET_ALL_UNIVERSE,
  GET_ALL_UNIVERSE_SUCCESS,
  GET_ALL_UNIVERSE_ERROR,
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID,
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_SUCCESS,
  GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_ERROR,
  CREATE_TUTORIAL,
  CREATE_TUTORIAL_SUCCESS,
  CREATE_TUTORIAL_ERROR,
  UPDATE_TUTORIAL,
  UPDATE_TUTORIAL_SUCCESS,
  UPDATE_TUTORIAL_ERROR,
  DELETE_TUTORIAL,
  DELETE_TUTORIAL_SUCCESS,
  DELETE_TUTORIAL_ERROR,
} from '../../types/product/assessment-tutorials';

const INIT_STATE = {
  loading: false,
  univerList: [],
  tutorialsList: [],
  singleTutorial: [],
  single: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_UNIVERSE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_UNIVERSE_SUCCESS:
      return {
        ...state,
        loading: false,
        universeList: action.payload,
      };
    case GET_ALL_UNIVERSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        tutorialsList: action.payload,
      };
    case GET_ASSESSMENT_TUTORIAL_BY_CATEGORY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TUTORIAL:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TUTORIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        tutorialsList: [...state.tutorialsList, action.payload],
      };
    case CREATE_TUTORIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TUTORIAL:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TUTORIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        tutorialsList: state.tutorialsList.filter(
          (item) => item.id !== action.payload.payload.id
        ),
      };
    case DELETE_TUTORIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TUTORIAL:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TUTORIAL_SUCCESS:
      /* eslint-disable */
      const foundIndex = state.tutorialsList.findIndex(
        (x) => x.id === action.payload.id
      );
      state.tutorialsList[foundIndex] = action.payload;
      console.log(state.tutorialsList)
      /* eslint-enable */
      return {
        ...state,
        loading: false,
        tutorialsList: [...state.tutorialsList],
      };
    case UPDATE_TUTORIAL_ERROR:
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
