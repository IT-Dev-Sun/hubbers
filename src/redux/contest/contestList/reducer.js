import { CREATE_ADMIN_ERROR } from '../../types/admin';
import { CREATE_ADMIN_ROLE_SUCCESS } from '../../types/admin-role';
import {
  GET_ALL_CONTEST_LIST,
  GET_ALL_CONTEST_LIST_SUCCESS,
  GET_ALL_CONTEST_LIST_ERROR,
  GET_ALL_CONTEST_PRODUCT,
  GET_ALL_CONTEST_PRODUCT_SUCCESS,
  GET_ALL_CONTEST_PRODUCT_ERROR,
  GET_ALL_CONTEST_INNOVATION,
  GET_ALL_CONTEST_INNOVATION_SUCCESS,
  GET_ALL_CONTEST_INNOVATION_ERROR,
  GET_ALL_CONTEST_TECH,
  GET_ALL_CONTEST_TECH_SUCCESS,
  GET_ALL_CONTEST_TECH_ERROR,
  GET_ALL_CONTEST_COUNTRY,
  GET_ALL_CONTEST_COUNTRY_SUCCESS,
  GET_ALL_CONTEST_COUNTRY_ERROR,
  GET_ALL_CONTEST_PRIZE_CURRENCY,
  GET_ALL_CONTEST_PRIZE_CURRENCY_SUCCESS,
  GET_ALL_CONTEST_PRIZE_CURRENCY_ERROR,
  GET_ALL_CONTEST_GLOBAL_DESCRIPTION,
  GET_ALL_CONTEST_GLOBAL_DESCRIPTION_SUCCESS,
  GET_ALL_CONTEST_GLOBAL_DESCRIPTION_ERROR,
  GET_ALL_CONTEST_OFFICIAL,
  GET_ALL_CONTEST_OFFICIAL_SUCCESS,
  GET_ALL_CONTEST_OFFICIAL_ERROR,
  GET_ALL_CONTEST_MARKET,
  GET_ALL_CONTEST_MARKET_SUCCESS,
  GET_ALL_CONTEST_MARKET_ERROR,
  CREATE_CONTEST_LIST,
  GET_ALL_CONTEST_TYPE,
  GET_ALL_CONTEST_TYPE_SUCCESS,
  GET_ALL_CONTEST_TYPE_ERROR,
  GET_ALL_CONTEST_MEMBER_LIST,
  GET_ALL_CONTEST_MEMBER_LIST_SUCCESS,
  GET_ALL_CONTEST_MEMBER_LIST_ERROR,
} from '../../types/contest/contestType';

const INIT_STATE = {
  loading: false,
  contestList: [],
  contestMemberList: [],
  contestTypeList: [],
  productList: [],
  innovationList: [],
  techList: [],
  countryList: [],
  currencyList: [],
  descriptionList: [],
  officialList: [],
  marketList: [],
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CONTEST_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        contestList: action.payload,
      };
    case GET_ALL_CONTEST_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_MEMBER_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_MEMBER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        contestMemberList: action.payload,
      };
    case GET_ALL_CONTEST_MEMBER_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_TYPE:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        contestTypeList: action.payload,
      };
    case GET_ALL_CONTEST_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };
    case GET_ALL_CONTEST_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_INNOVATION:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_INNOVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        innovationList: action.payload,
      };
    case GET_ALL_CONTEST_INNOVATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_TECH:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_TECH_SUCCESS:
      return {
        ...state,
        loading: false,
        techList: action.payload,
      };
    case GET_ALL_CONTEST_TECH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_COUNTRY:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        countryList: action.payload,
      };
    case GET_ALL_CONTEST_COUNTRY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_PRIZE_CURRENCY:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_PRIZE_CURRENCY_SUCCESS:
      return {
        ...state,
        loading: false,
        currencyList: action.payload,
      };
    case GET_ALL_CONTEST_PRIZE_CURRENCY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_GLOBAL_DESCRIPTION:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_GLOBAL_DESCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        descriptionList: action.payload,
      };
    case GET_ALL_CONTEST_GLOBAL_DESCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_OFFICIAL:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_OFFICIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        officialList: action.payload,
      };
    case GET_ALL_CONTEST_OFFICIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL_CONTEST_MARKET:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTEST_MARKET_SUCCESS:
      return {
        ...state,
        loading: false,
        marketList: action.payload,
      };
    case GET_ALL_CONTEST_MARKET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_CONTEST_LIST:
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
