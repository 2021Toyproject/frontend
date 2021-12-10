import { all, fork, takeLatest } from 'redux-saga/effects';
import { USER_TEST_REDUCER } from '../Action/user';

function* test() {
  try {
    console.log('SAGA TEST');
  } catch (error) {}
}

function* watchTest() {
  yield takeLatest(USER_TEST_REDUCER, test);
}

export default function* userSaga() {
  yield all([fork(watchTest)]);
}
