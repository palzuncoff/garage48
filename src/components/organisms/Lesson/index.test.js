// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import Lesson from 'components'

it('renders', () => {
  shallow(<Lesson />)
})
