// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* loadSubject({ payload }) {
  const subjectId = payload;
  try {
    // const list = yield call([api, api.get], `/${resource}`, { params })
    yield put(actions.loadSubjectSuccess({
      puta: 'madre',
      pincho: 'pendeho',
      massiv: {},
      _id: subjectId
    }))
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
