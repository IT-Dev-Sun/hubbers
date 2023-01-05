import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { auth } from '../../helpers/Firebase';
import api from '../../ApiConfig';

import {
  LOGIN_USER,
  // REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from '../types/auth';

import {
  loginUserSuccess,
  loginUserError,
  // registerUserSuccess,
  // registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
} from './actions';

import { adminRoot } from '../../constants/defaultValues';
import { setCurrentUser, setSession, removeSession } from '../../helpers/Utils';

const loginWithEmailPasswordAsync = async (userInfo) =>
  api
    .post(`/auth/admin/signin`, userInfo)
    .then((res) => res)
    .catch((error) => error);

function* loginWithEmailPassword({ payload }) {
  const { history: h } = payload;
  try {
    const loginResult = yield call(loginWithEmailPasswordAsync, payload.user);
    if (loginResult.data.success) {
      setSession(
        loginResult.data.result.accessToken,
        loginResult.data.result.refreshToken
      );
      const authUser = jwtDecode(loginResult.data.result.refreshToken);
      setCurrentUser(authUser.data);
      yield put(loginUserSuccess(authUser.data));
      h.push(adminRoot);
    } else {
      yield put(loginUserError(loginResult.data.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

// const registerWithEmailPasswordAsync = async (email, password) =>
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((user) => user)
//     .catch((error) => error);

// function* registerWithEmailPassword({ payload }) {
//   const { email, password } = payload.user;
//   const { history: h } = payload;
//   try {
//     const registerUser = yield call(
//       registerWithEmailPasswordAsync,
//       email,
//       password
//     );
//     if (!registerUser.message) {
//       const item = { uid: registerUser.user.uid, ...currentUser };
//       setCurrentUser(item);
//       yield put(registerUserSuccess(item));
//       h.push(adminRoot);
//     } else {
//       yield put(registerUserError(registerUser.message));
//     }
//   } catch (error) {
//     yield put(registerUserError(error));
//   }
// }

const logoutAsync = async () => {
  return api
    .post(`/auth/admin/signout`)
    .then(() => {
      // console.log('logout result =>', res);
    })
    .catch((error) => error);
};

function* logout() {
  setCurrentUser();
  removeSession();
  yield call(logoutAsync);
}

const forgotPasswordAsync = async (email) => {
  return auth
    .sendPasswordResetEmail(email)
    .then((user) => user)
    .catch((error) => error);
};

function* forgotPassword({ payload }) {
  const { email } = payload.forgotUserMail;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
    if (!forgotPasswordStatus) {
      yield put(forgotPasswordSuccess('success'));
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
  return auth
    .confirmPasswordReset(resetPasswordCode, newPassword)
    .then((user) => user)
    .catch((error) => error);
};

function* resetPassword({ payload }) {
  const { newPassword, resetPasswordCode } = payload;
  try {
    const resetPasswordStatus = yield call(
      resetPasswordAsync,
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordStatus) {
      yield put(resetPasswordSuccess('success'));
    } else {
      yield put(resetPasswordError(resetPasswordStatus.message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

// export function* watchRegisterUser() {
//   yield takeEvery(REGISTER_USER, registerWithEmailPassword);
// }

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    // fork(watchRegisterUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
  ]);
}
