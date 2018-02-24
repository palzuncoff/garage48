// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import mergeWith from 'lodash/mergeWith'
import { initialState } from './selectors'
import * as actions from './actions'

export default (state = initialState, { type, payload }) => {
  if (type === actions.LOAD_SUBJECT) {
    const nextSubject = state[payload] ? { ...state[payload] } : {}
    return {
      ...state,
      [payload]: { ...nextSubject, loading: true }
    }
  }
  if (type === actions.LOAD_SUBJECT_SUCCESS) {
    return {
      ...state,
      [payload._id]: { ...state[payload._id], loading: false, ...payload }
    }
  }
  if (type === actions.LOAD_SUBJECT_FAILURE) {
    const nextSubject = state[payload] ? { ...state[payload] } : {}
    return {
      ...state,
      [payload]: { ...nextSubject, loading: true }
    }
  }
  return state
}
