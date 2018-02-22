// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
export const LOAD_SUBJECT = 'LOAD_SUBJECT'
export const LOAD_SUBJECT_SUCCESS = 'LOAD_SUBJECT_SUCCESS'
export const LOAD_SUBJECT_FAILURE = 'LOAD_SUBJECT_FAILURE'

export const loadSubject = subjectId => ({
  type: LOAD_SUBJECT,
  payload: subjectId,
})

export const loadSubjectSuccess = subjectId => ({
  type: LOAD_SUBJECT_SUCCESS,
  payload: subjectId,
})

export const loadSubjectFailure = subjectId => ({
  type: LOAD_SUBJECT_FAILURE,
  payload: subjectId,
})
