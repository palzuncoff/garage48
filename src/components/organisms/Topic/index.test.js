// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import Topic from 'components'

it('renders', () => {
  shallow(<Topic />)
})
