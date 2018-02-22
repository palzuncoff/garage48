// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import * as actions from './actions'

test('loadSubject', () => {
  expect(actions.loadSubject('test')).toEqual({
    type: actions.LOAD_SUBJECT,
    payload: 'test',
  })
})
