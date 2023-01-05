import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import api from '../../../ApiConfig';

import {
  GET_ALL_CONTEST_LIST,
  CREATE_CONTEST_LIST,
  UPDATE_CONTEST_LIST,
  DELETE_CONTEST_LIST,
  GET_ALL_CONTEST_TYPE,
  GET_ALL_CONTEST_PRODUCT,
  GET_ALL_CONTEST_INNOVATION,
  GET_ALL_CONTEST_TECH,
  GET_ALL_CONTEST_COUNTRY,
  GET_ALL_CONTEST_PRIZE_CURRENCY,
  GET_ALL_CONTEST_GLOBAL_DESCRIPTION,
  GET_ALL_CONTEST_MARKET,
  GET_ALL_CONTEST_OFFICIAL,
  GET_ALL_CONTEST_MEMBER_LIST,
  DELETE_ALL_CONTEST_MEMBER_LIST,
  CREATE_CONTEST_MEMBER_LIST,
  UPDATE_CONTEST_MEMBER_LIST,
  // UPDATE_PARTNER,
  // DELETE_PARTNER,
} from '../../types/contest/contestType';

import {
  getAllContestList,
  getAllContestListSuccess,
  getAllContestListError,
  createContestListSuccess,
  createContestListError,
  updateContestListSuccess,
  updateContestListError,
  deleteContestListSuccess,
  deleteContestListError,
  getAllContestTypeError,
  getAllContestTypeSuccess,
  getAllContestProductSuccess,
  getAllContestProductError,
  getAllContestInnovationError,
  getAllContestInnovationSuccess,
  getAllContestTechSuccess,
  getAllContestTechError,
  getAllContestCountrySuccess,
  getAllContestCountryError,
  getAllCurrencySuccess,
  getAllCurrencyError,
  getAllContestDescriptionSuccess,
  getAllContestDescriptionError,
  getAllContestOfficialSuccess,
  getAllContestOfficialError,
  getAllContestMarketError,
  getAllContestMarketSuccess,
  getAllContestMemberListSuccess,
  getAllContestMemberListError,
  deleteContestMemberListSuccess,
  deleteContestMemberListError,
  getAllContestMemberList,
  createContestMemberSuccess,
  createContestMemberError,
  updateContestMemberListError,
  updateContestMemberListSuccess,
} from './actions';

const getAllContestListAsync = () => {
  return api
    .get(`/contest/contest-list`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestMemberListAsync = () => {
  return api
    .get(`/contest/contest-member`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestTypeAsync = ({ payload }) => {
  return api
    .get(`/basic-type/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestProductAsync = ({ payload }) => {
  return api
    .get(`/basic-type/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestInnovationAsync = ({ payload }) => {
  return api
    .get(`/basic-type/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestTechAsync = ({ payload }) => {
  return api
    .get(`/basic-type/${payload}`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestCountryAsync = () => {
  return api
    .get(`country/`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestPrizeCurrencyAsync = () => {
  return api
    .get(`payment/currency`)
    .then((res) => res)
    .catch((error) => error);
};

const getAllContestDescriptionAsync = (category) => {
  return api
    .get(`contest/contest-description/category/${category}`)
    .then((res) => res)
    .catch((error) => error);
};

function* GetAllContestList() {
  try {
    const result = yield call(getAllContestListAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestListSuccess(result.data.result));
    } else {
      yield put(
        getAllContestListError('Get All Contest List Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllContestListError('Get All Contest List Error !'));
  }
}

function* GetAllContestMemberList() {
  try {
    const result = yield call(getAllContestMemberListAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestMemberListSuccess(result.data.data));
    }
  } catch (error) {
    yield put(getAllContestMemberListError('Get All Contest List Error !'));
  }
}

function* GetAllContestType(data) {
  try {
    const result = yield call(getAllContestTypeAsync, data);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestTypeSuccess(result.data.data));
    } else {
      yield put(
        getAllContestTypeError('Get All Contest Type Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllContestTypeError('Get All Contest Type Error !'));
  }
}

function* GetAllContestProduct(data) {
  try {
    const result = yield call(getAllContestProductAsync, data);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestProductSuccess(result.data.data));
    } else {
      yield put(
        getAllContestProductError(
          'Get All Contest Product Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllContestProductError('Get All Contest Product Error !'));
  }
}

function* GetAllContestInnovation(data) {
  try {
    const result = yield call(getAllContestInnovationAsync, data);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestInnovationSuccess(result.data.data));
    } else {
      yield put(
        getAllContestInnovationError(
          'Get All Contest Innovation Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      getAllContestInnovationError('Get All Contest Innovation Error !')
    );
  }
}

function* GetAllContestTech(data) {
  try {
    const result = yield call(getAllContestTechAsync, data);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestTechSuccess(result.data.data));
    } else {
      yield put(
        getAllContestTechError('Get All Contest Tech Response is not success!')
      );
    }
  } catch (error) {
    yield put(getAllContestTechError('Get All Contest Tech Error !'));
  }
}

function* GetAllContestPrizeCurrency() {
  try {
    const result = yield call(getAllContestPrizeCurrencyAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllCurrencySuccess(result.data.result));
    } else {
      yield put(
        getAllCurrencyError(
          'Get All Contest Prize Currency Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllCurrencyError('Get All Contest Prize Currency Error !'));
  }
}

function* GetAllContestCountry() {
  try {
    const result = yield call(getAllContestCountryAsync);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestCountrySuccess(result.data.data));
    } else {
      yield put(
        getAllContestCountryError(
          'Get All Contest Country Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllContestCountryError('Get All Contest Country Error !'));
  }
}

function* GetAllContestDescription(category) {
  try {
    const result = yield call(getAllContestDescriptionAsync, category.category);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestDescriptionSuccess(result.data));
    } else {
      yield put(
        getAllContestDescriptionError(
          'Get All Contest Description Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      getAllContestDescriptionError('Get All Contest Description Error !')
    );
  }
}

function* GetAllContestOfficial(category) {
  try {
    const result = yield call(getAllContestDescriptionAsync, category.category);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestOfficialSuccess(result.data));
    } else {
      yield put(
        getAllContestOfficialError(
          'Get All Contest Official Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllContestOfficialError('Get All Contest Official Error !'));
  }
}

function* GetAllContestMarket(category) {
  try {
    const result = yield call(getAllContestDescriptionAsync, category.category);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(getAllContestMarketSuccess(result.data));
    } else {
      yield put(
        getAllContestMarketError(
          'Get All Contest Market Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(getAllContestMarketError('Get All Contest Market Error !'));
  }
}

const createContestListAsync = async (payload) => {
  return api
    .post('/contest/contest-list', {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

const createContestMemberListAsync = async (payload) => {
  return api
    .post('/contest/contest-member', {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* CreateContestList(payload) {
  try {
    const result = yield call(createContestListAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createContestListSuccess(result.data.result));
      yield put(getAllContestList());
    } else {
      yield put(
        createContestListError('Create ContestList Response is not success!')
      );
    }
  } catch (error) {
    yield put(createContestListError('Create ContestList Error !'));
  }
}

function* CreateContestMemberList(payload) {
  try {
    const result = yield call(createContestMemberListAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(createContestMemberSuccess(result.data.result));
      yield put(getAllContestMemberList());
    } else {
      yield put(
        createContestMemberError('Create ContestList Response is not success!')
      );
    }
  } catch (error) {
    yield put(createContestMemberError('Create ContestList Error !'));
  }
}

const updateContestMemberListAsync = async (payload) => {
  return api
    .put(`/contest/contest-member/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateContestMemberList(payload) {
  try {
    const result = yield call(updateContestMemberListAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateContestMemberListSuccess(result.data.result));
      yield put(getAllContestMemberList());
    } else {
      yield put(
        updateContestMemberListError(
          'Update Contest Member List Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(
      updateContestMemberListError('Update Contest Member List Error !')
    );
  }
}

const updateContestListAsync = async (payload) => {
  return api
    .put(`/contest/contest-list/${payload.id}`, {
      ...payload,
    })
    .then((res) => res)
    .catch((error) => error);
};

function* UpdateContestList(payload) {
  try {
    const result = yield call(updateContestListAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(updateContestListSuccess(result.data.result));
      yield put(getAllContestList());
    } else {
      yield put(
        updateContestListError('Update ContestList Response is not success!')
      );
    }
  } catch (error) {
    yield put(updateContestListError('Update ContestList Error !'));
  }
}

const deleteContestListAsync = async (id) => {
  return api
    .delete(`/contest/contest-list/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DeleteContestList(payload) {
  try {
    const result = yield call(deleteContestListAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteContestListSuccess(result.data.result));
      yield put(getAllContestList());
    } else {
      yield put(
        deleteContestListError('Delete ContestList Response is not success!')
      );
    }
  } catch (error) {
    yield put(deleteContestListError('Delete ContestList Error !'));
  }
}

const deleteContestMemberListAsync = async (id) => {
  return api
    .delete(`/contest/contest-member/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

function* DelAllContestMemberList(payload) {
  try {
    const result = yield call(deleteContestMemberListAsync, payload.payload);
    if (result.status === 200 && result.statusText === 'OK') {
      yield put(deleteContestMemberListSuccess(result.data.result));
      yield put(getAllContestMemberList());
    } else {
      yield put(
        deleteContestMemberListError(
          'Delete Contest Member List Response is not success!'
        )
      );
    }
  } catch (error) {
    yield put(deleteContestMemberListError('Delete ContestList Error !'));
  }
}

export function* watchGetAllContestList() {
  yield takeEvery(GET_ALL_CONTEST_LIST, GetAllContestList);
}

export function* watchGetAllContestMemberList() {
  yield takeEvery(GET_ALL_CONTEST_MEMBER_LIST, GetAllContestMemberList);
}

export function* watchCreateContestMemberList() {
  yield takeEvery(CREATE_CONTEST_MEMBER_LIST, CreateContestMemberList);
}

export function* watchUpdateContestMemberList() {
  yield takeEvery(UPDATE_CONTEST_MEMBER_LIST, UpdateContestMemberList);
}

export function* watchDelAllContestMemberList() {
  yield takeEvery(DELETE_ALL_CONTEST_MEMBER_LIST, DelAllContestMemberList);
}

export function* watchCreateContestList() {
  yield takeEvery(CREATE_CONTEST_LIST, CreateContestList);
}

export function* watchUpdateContestList() {
  yield takeEvery(UPDATE_CONTEST_LIST, UpdateContestList);
}

export function* watchDeleteContestList() {
  yield takeEvery(DELETE_CONTEST_LIST, DeleteContestList);
}

export function* watchGetAllContestType() {
  yield takeEvery(GET_ALL_CONTEST_TYPE, GetAllContestType);
}

export function* watchGetAllContestProduct() {
  yield takeEvery(GET_ALL_CONTEST_PRODUCT, GetAllContestProduct);
}

export function* watchGetAllContestInnovation() {
  yield takeEvery(GET_ALL_CONTEST_INNOVATION, GetAllContestInnovation);
}

export function* watchGetAllContestTech() {
  yield takeEvery(GET_ALL_CONTEST_TECH, GetAllContestTech);
}

export function* watchGetAllContestCountry() {
  yield takeEvery(GET_ALL_CONTEST_COUNTRY, GetAllContestCountry);
}

export function* watchGetAllContestPrizeCurrency() {
  yield takeEvery(GET_ALL_CONTEST_PRIZE_CURRENCY, GetAllContestPrizeCurrency);
}

export function* watchGetAllContestDescription() {
  yield takeEvery(GET_ALL_CONTEST_GLOBAL_DESCRIPTION, GetAllContestDescription);
}

export function* watchGetAllContestOfficial() {
  yield takeEvery(GET_ALL_CONTEST_OFFICIAL, GetAllContestOfficial);
}

export function* watchGetAllContestMarket() {
  yield takeEvery(GET_ALL_CONTEST_MARKET, GetAllContestMarket);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllContestList),
    fork(watchCreateContestList),
    fork(watchUpdateContestList),
    fork(watchDeleteContestList),
    fork(watchGetAllContestType),
    fork(watchGetAllContestProduct),
    fork(watchGetAllContestInnovation),
    fork(watchGetAllContestTech),
    fork(watchGetAllContestCountry),
    fork(watchGetAllContestPrizeCurrency),
    fork(watchGetAllContestDescription),
    fork(watchGetAllContestOfficial),
    fork(watchGetAllContestMarket),
    fork(watchGetAllContestMemberList),
    fork(watchCreateContestMemberList),
    fork(watchUpdateContestMemberList),
    fork(watchDelAllContestMemberList),
  ]);
}
