// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import HomePage from 'components'

it('renders', () => {
  shallow(<HomePage />)
})
