const capitalize = require('../utils');

const constants = (name) =>
  `export const INITIAL_REQUEST_${name.toUpperCase()}_START = "INITIAL_REQUEST_${name.toUpperCase()}_START";
export const INITIAL_REQUEST_${name.toUpperCase()}_SUCCESS = "INITIAL_REQUEST_${name.toUpperCase()}_SUCCESS";

export const REQUEST_${name.toUpperCase()}_START = "REQUEST_${name.toUpperCase()}_START";
export const REQUEST_${name.toUpperCase()}_SUCCESS = "REQUEST_${name.toUpperCase()}_SUCCESS";

export const REGISTER_${name.toUpperCase()}_START = "REGISTER_${name.toUpperCase()}_START";
export const REGISTER_${name.toUpperCase()}_SUCCESS = "REGISTER_${name.toUpperCase()}_SUCCESS";

export const UPDATE_${name.toUpperCase()}_START = "UPDATE_${name.toUpperCase()}_START";
export const UPDATE_${name.toUpperCase()}_SUCCESS = "UPDATE_${name.toUpperCase()}_SUCCESS";

export const DELETE_${name.toUpperCase()}_START = "DELETE_${name.toUpperCase()}_START";
export const DELETE_${name.toUpperCase()}_SUCCESS = "DELETE_${name.toUpperCase()}_SUCCESS";`

const sagas = (name) =>
  `import { put, takeLatest, select, all, call } from "redux-saga/effects";
import request, { postOptions } from "@utils/request";
import message from '@components/Message/Message';


import { 
  INITIAL_REQUEST_${name.toUpperCase()}_START, 
  REGISTER_${name.toUpperCase()}_START,
  REQUEST_${name.toUpperCase()}_START,
  UPDATE_${name.toUpperCase()}_START,
  DELETE_${name.toUpperCase()}_START,
} from "./constants";
import {
  initial${capitalize(name)}Success,
  request${capitalize(name)}Success,
  register${capitalize(name)}Success,
  update${capitalize(name)}Success,
  delete${capitalize(name)}Success,
} from "./actions";

import { showLoader, hideLoader } from "@redux/actions/auth";

export function* initialRequest${capitalize(name)}() {
  const storage = yield select((state) => state);
  try {
    yield put(showLoader());
    console.log('this work');
    yield all([
      call(message.success, "success message"),
    ]);
  } catch (err) {
    console.log(err);
    yield call(message.error, "Tenemos Problemas con el servidor");
  } finally {
    yield  put(hideLoader());
  }
}

export function* register${capitalize(name)}() {
  const storage = yield select((state) => state);
  try {
    yield put(showLoader());
    yield all([
      call(message.success, "success message"),
    ]);
  } catch (err) {
    console.log(err);
    yield call(message.error, "Tenemos Problemas con el servidor");
  } finally {
    yield put(hideLoader());
  }
}

export function* request${capitalize(name)}() {
  const storage = yield select((state) => state);
  try {
    yield put(showLoader());

    yield all([
      call(message.success, "success message"),
    ]);
  } catch (err) {
    console.log(err);
    yield call(message.error, "Tenemos Problemas con el servidor")
  } finally {
    yield put(hideLoader());
  }
}

export function* update${capitalize(name)}() {
  const storage = yield select((state) => state);
  try {
    yield put(showLoader());
    yield all([
      call(message.success, "success message"),
    ]);
  } catch (err) {
    console.log(err);
    yield call(message.error, "Tenemos Problemas con el servidor");
  } finally {
    yield put(hideLoader());
  }
}

export function* delete${capitalize(name)}() {
  const storage = yield select((state) => state);
  try {
    yield put(showLoader());
    yield all([
      call(message.success, "success message"),
    ]);
  } catch (err) {
    console.log(err);
    yield call(message.error, "Tenemos Problemas con el servidor");
  } finally {
    yield put(hideLoader());
  }
}

export default function* ${name.toLowerCase()}Saga() {
  yield takeLatest(INITIAL_REQUEST_${name.toUpperCase()}_START, initialRequest${capitalize(name)});
  yield takeLatest(REGISTER_${name.toUpperCase()}_START, register${capitalize(name)});
  yield takeLatest(REQUEST_${name.toUpperCase()}_START, request${capitalize(name)});
  yield takeLatest(UPDATE_${name.toUpperCase()}_START, update${capitalize(name)});
  yield takeLatest(DELETE_${name.toUpperCase()}_START, delete${capitalize(name)});
}
`

const actions = (name) =>
  ` import {
  INITIAL_REQUEST_${name.toUpperCase()}_START,
  INITIAL_REQUEST_${name.toUpperCase()}_SUCCESS,
  REQUEST_${name.toUpperCase()}_START,
  REQUEST_${name.toUpperCase()}_SUCCESS,
  REGISTER_${name.toUpperCase()}_START,
  REGISTER_${name.toUpperCase()}_SUCCESS,
  UPDATE_${name.toUpperCase()}_START,
  UPDATE_${name.toUpperCase()}_SUCCESS,
  DELETE_${name.toUpperCase()}_START,
  DELETE_${name.toUpperCase()}_SUCCESS,
} from "./constants";

export const initial${capitalize(name)}Start = (payload) => ({
  type: INITIAL_REQUEST_${name.toUpperCase()}_START,
  payload,
});
export const initial${capitalize(name)}Success = (payload) => ({
  type: INITIAL_REQUEST_${name.toUpperCase()}_SUCCESS,
  payload,
});

export const register${capitalize(name)}Start = (payload) => ({
  type: REGISTER_${name.toUpperCase()}_START,
  payload,
});
export const register${capitalize(name)}Success = (payload) => ({
  type: REGISTER_${name.toUpperCase()}_SUCCESS,
  payload,
});

export const update${capitalize(name)}Start = (payload) => ({
  type: UPDATE_${name.toUpperCase()}_START,
  payload,
});
export const update${capitalize(name)}Success = (payload) => ({
  type: UPDATE_${name.toUpperCase()}_SUCCESS,
  payload,
});

export const delete${capitalize(name)}Start = (payload) => ({
  type: DELETE_${name.toUpperCase()}_START,
  payload,
});
export const delete${capitalize(name)}Success = (payload) => ({
  type: DELETE_${name.toUpperCase()}_SUCCESS,
  payload,
});
`

const reducer = (name) =>
  ` import {
  INITIAL_REQUEST_${name.toUpperCase()}_SUCCESS,
  REQUEST_${name.toUpperCase()}_SUCCESS,
  REGISTER_${name.toUpperCase()}_SUCCESS,
  UPDATE_${name.toUpperCase()}_SUCCESS,
  DELETE_${name.toUpperCase()}_SUCCESS,
} from './constants';

const initialState${capitalize(name)} = {
  data: [],
  filter: {},
};

export function ${name.toLowerCase()}Reducer(state = initialState${capitalize(name)}, action) {
  switch (action.type) {
    case INITIAL_REQUEST_${name.toUpperCase()}_SUCCESS:
      return; 
    case REQUEST_${name.toUpperCase()}_SUCCESS:
      return; 
    case REGISTER_${name.toUpperCase()}_SUCCESS:
      return; 
    case UPDATE_${name.toUpperCase()}_SUCCESS:
      return; 
    case DELETE_${name.toUpperCase()}_SUCCESS:
      return; 
    default:
      return state;
  }
}

export default ${name.toLowerCase()}Reducer;
`

module.exports = {
  constants,
  actions,
  reducer,
  sagas,
}