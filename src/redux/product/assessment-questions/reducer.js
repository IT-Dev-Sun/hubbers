import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_SUCCESS,
  GET_ALL_QUESTIONS_ERROR,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  GET_ASSESSMENT_CATEGORIES,
  GET_ASSESSMENT_CATEGORIES_SUCCESS,
  GET_ASSESSMENT_CATEGORIES_ERROR,
  GET_ASSESSMENT_TAGS,
  GET_ASSESSMENT_TAGS_SUCCESS,
  GET_ASSESSMENT_TAGS_ERROR,
  ORDER_QUESTION,
  ORDER_QUESTION_SUCCESS,
  ORDER_QUESTION_ERROR,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_ERROR,
  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS,
  GET_SINGLE_QUESTION_ERROR,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_ERROR,
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,
} from '../../types/product/assessment-questions';

const INIT_STATE = {
  loading: false,
  questionsList: [],
  allQuestionsList: [],
  categoryList: [],
  tagList: [],
  singleQuestion: [],
  single: null,
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questionsList: action.payload,
      };
    case GET_ALL_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        allQuestionsList: action.payload,
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ASSESSMENT_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_ASSESSMENT_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryList: action.payload,
      };
    case GET_ASSESSMENT_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ASSESSMENT_TAGS:
      return {
        ...state,
        loading: true,
      };
    case GET_ASSESSMENT_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tagList: action.payload,
      };
    case GET_ASSESSMENT_TAGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questionsList: [...state.questionsList, action.payload],
      };
    case CREATE_QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        singleQuestion: action.payload,
      };
    case GET_SINGLE_QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questionsList: state.questionsList.filter(
          (item) => item.id !== action.payload.payload.id
        ),
      };
    case DELETE_QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_QUESTION_SUCCESS:
      /* eslint-disable */
      const foundIndex = state.questionsList.findIndex(
        (x) => x.id === action.payload.id
      );
      state.questionsList[foundIndex] = action.payload;
      console.log(state.questionsList)
      /* eslint-enable */
      return {
        ...state,
        loading: false,
        questionsList: [...state.questionsList],
      };
    case UPDATE_QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ORDER_QUESTION:
      return { ...state, loading: true };

    case ORDER_QUESTION_SUCCESS:
      return { ...state, loading: false, questionsList: action.payload.data };

    case ORDER_QUESTION_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return {
        ...state,
      };
  }
};
