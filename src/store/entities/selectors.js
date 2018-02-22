// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import { denormalize } from 'normalizr'
import * as schemas from './schemas'

export const initialState = {}

export const getSubject = (state, subjectId) => state.entities[subjectId] || { topics: [] }
