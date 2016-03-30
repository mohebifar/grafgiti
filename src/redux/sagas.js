import { takeEvery } from 'redux-saga';
import { INITIALIZE, watchInitialize, COMMIT, watchCommit } from './modules/calendar';

export default function *rootSaga() {
  yield [
    takeEvery(INITIALIZE, watchInitialize),
    takeEvery(COMMIT, watchCommit)
  ];
}
