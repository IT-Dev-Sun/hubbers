import {
  GET_ALL_CONTEST_LIST,
  GET_ALL_CONTEST_LIST_SUCCESS,
  GET_ALL_CONTEST_LIST_ERROR,
  GET_ALL_CONTEST_MEMBER_LIST,
  GET_ALL_CONTEST_MEMBER_LIST_SUCCESS,
  GET_ALL_CONTEST_MEMBER_LIST_ERROR,
  CREATE_CONTEST_MEMBER_LIST,
  CREATE_CONTEST_MEMBER_LIST_SUCCESS,
  CREATE_CONTEST_MEMBER_LIST_ERROR,
  UPDATE_CONTEST_MEMBER_LIST,
  UPDATE_CONTEST_MEMBER_LIST_SUCCESS,
  UPDATE_CONTEST_MEMBER_LIST_ERROR,
  DELETE_ALL_CONTEST_MEMBER_LIST,
  DELETE_ALL_CONTEST_MEMBER_LIST_SUCCESS,
  DELETE_ALL_CONTEST_MEMBER_LIST_ERROR,
  GET_ALL_CONTEST_TYPE,
  GET_ALL_CONTEST_TYPE_SUCCESS,
  GET_ALL_CONTEST_TYPE_ERROR,
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
  CREATE_CONTEST_LIST_SUCCESS,
  CREATE_CONTEST_LIST_ERROR,
  UPDATE_CONTEST_LIST,
  UPDATE_CONTEST_LIST_SUCCESS,
  UPDATE_CONTEST_LIST_ERROR,
  DELETE_CONTEST_LIST,
  DELETE_CONTEST_LIST_SUCCESS,
  DELETE_CONTEST_LIST_ERROR,
} from '../../types/contest/contestType';

export const getAllContestList = () => ({
  type: GET_ALL_CONTEST_LIST,
});
export const getAllContestListSuccess = (data) => ({
  type: GET_ALL_CONTEST_LIST_SUCCESS,
  payload: data,
});
export const getAllContestListError = (data) => ({
  type: GET_ALL_CONTEST_LIST_ERROR,
  payload: data,
});

export const getAllContestMemberList = () => ({
  type: GET_ALL_CONTEST_MEMBER_LIST,
});
export const getAllContestMemberListSuccess = (data) => ({
  type: GET_ALL_CONTEST_MEMBER_LIST_SUCCESS,
  payload: data,
});
export const getAllContestMemberListError = (data) => ({
  type: GET_ALL_CONTEST_MEMBER_LIST_ERROR,
  payload: data,
});

export const createContestMember = (data) => ({
  type: CREATE_CONTEST_MEMBER_LIST,
  payload: data,
});
export const createContestMemberSuccess = (data) => ({
  type: CREATE_CONTEST_MEMBER_LIST_SUCCESS,
  payload: data,
});
export const createContestMemberError = (data) => ({
  type: CREATE_CONTEST_MEMBER_LIST_ERROR,
  payload: data,
});

export const updateContestMemberList = (data) => ({
  type: UPDATE_CONTEST_MEMBER_LIST,
  payload: data,
});
export const updateContestMemberListSuccess = (data) => ({
  type: UPDATE_CONTEST_MEMBER_LIST_SUCCESS,
  payload: data,
});
export const updateContestMemberListError = (data) => ({
  type: UPDATE_CONTEST_MEMBER_LIST_ERROR,
  payload: data,
});

export const deleteContestMemberList = (data) => ({
  type: DELETE_ALL_CONTEST_MEMBER_LIST,
  payload: data,
});
export const deleteContestMemberListSuccess = (data) => ({
  type: DELETE_ALL_CONTEST_MEMBER_LIST_SUCCESS,
  payload: data,
});
export const deleteContestMemberListError = (data) => ({
  type: DELETE_ALL_CONTEST_MEMBER_LIST_ERROR,
  payload: data,
});

export const getAllContestType = (data) => ({
  type: GET_ALL_CONTEST_TYPE,
  payload: data,
});
export const getAllContestTypeSuccess = (data) => ({
  type: GET_ALL_CONTEST_TYPE_SUCCESS,
  payload: data,
});
export const getAllContestTypeError = (data) => ({
  type: GET_ALL_CONTEST_TYPE_ERROR,
  payload: data,
});

export const getAllContestProduct = (data) => ({
  type: GET_ALL_CONTEST_PRODUCT,
  payload: data,
});
export const getAllContestProductSuccess = (data) => ({
  type: GET_ALL_CONTEST_PRODUCT_SUCCESS,
  payload: data,
});
export const getAllContestProductError = (data) => ({
  type: GET_ALL_CONTEST_PRODUCT_ERROR,
  payload: data,
});

export const getAllContestInnovation = (data) => ({
  type: GET_ALL_CONTEST_INNOVATION,
  payload: data,
});
export const getAllContestInnovationSuccess = (data) => ({
  type: GET_ALL_CONTEST_INNOVATION_SUCCESS,
  payload: data,
});
export const getAllContestInnovationError = (data) => ({
  type: GET_ALL_CONTEST_INNOVATION_ERROR,
  payload: data,
});

export const getAllContestTech = (data) => ({
  type: GET_ALL_CONTEST_TECH,
  payload: data,
});
export const getAllContestTechSuccess = (data) => ({
  type: GET_ALL_CONTEST_TECH_SUCCESS,
  payload: data,
});
export const getAllContestTechError = (data) => ({
  type: GET_ALL_CONTEST_TECH_ERROR,
  payload: data,
});

export const getAllContestCountry = () => ({
  type: GET_ALL_CONTEST_COUNTRY,
});
export const getAllContestCountrySuccess = (data) => ({
  type: GET_ALL_CONTEST_COUNTRY_SUCCESS,
  payload: data,
});
export const getAllContestCountryError = (data) => ({
  type: GET_ALL_CONTEST_COUNTRY_ERROR,
  payload: data,
});

export const getAllCurrency = () => ({
  type: GET_ALL_CONTEST_PRIZE_CURRENCY,
});
export const getAllCurrencySuccess = (data) => ({
  type: GET_ALL_CONTEST_PRIZE_CURRENCY_SUCCESS,
  payload: data,
});
export const getAllCurrencyError = (data) => ({
  type: GET_ALL_CONTEST_PRIZE_CURRENCY_ERROR,
  payload: data,
});

export const getAllContestDescription = (category) => ({
  type: GET_ALL_CONTEST_GLOBAL_DESCRIPTION,
  category,
});
export const getAllContestDescriptionSuccess = (data) => ({
  type: GET_ALL_CONTEST_GLOBAL_DESCRIPTION_SUCCESS,
  payload: data,
});
export const getAllContestDescriptionError = (data) => ({
  type: GET_ALL_CONTEST_GLOBAL_DESCRIPTION_ERROR,
  payload: data,
});

export const getAllContestOfficial = (category) => ({
  type: GET_ALL_CONTEST_OFFICIAL,
  category,
});
export const getAllContestOfficialSuccess = (data) => ({
  type: GET_ALL_CONTEST_OFFICIAL_SUCCESS,
  payload: data,
});
export const getAllContestOfficialError = (data) => ({
  type: GET_ALL_CONTEST_OFFICIAL_ERROR,
  payload: data,
});

export const getAllContestMarket = (category) => ({
  type: GET_ALL_CONTEST_MARKET,
  category,
});
export const getAllContestMarketSuccess = (data) => ({
  type: GET_ALL_CONTEST_MARKET_SUCCESS,
  payload: data,
});
export const getAllContestMarketError = (data) => ({
  type: GET_ALL_CONTEST_MARKET_ERROR,
  payload: data,
});

export const createContestList = (data) => ({
  type: CREATE_CONTEST_LIST,
  payload: data,
});
export const createContestListSuccess = (data) => ({
  type: CREATE_CONTEST_LIST_SUCCESS,
  payload: data,
});
export const createContestListError = (data) => ({
  type: CREATE_CONTEST_LIST_ERROR,
  payload: data,
});
export const updateContestList = (data) => ({
  type: UPDATE_CONTEST_LIST,
  payload: data,
});
export const updateContestListSuccess = (data) => ({
  type: UPDATE_CONTEST_LIST_SUCCESS,
  payload: data,
});
export const updateContestListError = (data) => ({
  type: UPDATE_CONTEST_LIST_ERROR,
  payload: data,
});
export const deleteContestList = (data) => ({
  type: DELETE_CONTEST_LIST,
  payload: data,
});
export const deleteContestListSuccess = (data) => ({
  type: DELETE_CONTEST_LIST_SUCCESS,
  payload: data,
});
export const deleteContestListError = (data) => ({
  type: DELETE_CONTEST_LIST_ERROR,
  payload: data,
});
