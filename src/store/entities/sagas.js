// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import Subjects from './fixtures'

export function* loadSubject({ payload }) {
  const subjectId = payload;
  try {
    const subject = Subjects.find(sub => sub._id === subjectId)
    yield put(actions.loadSubjectSuccess(subject))
  } catch (e) {
    yield put(actions.loadSubjectFailure(e, subjectId))
  }
}

export function* watchLoadSubject(subjectId) {
  yield call(loadSubject, subjectId)
}

export default function* ({ api }) {
  yield takeEvery(actions.LOAD_SUBJECT, watchLoadSubject)
}
