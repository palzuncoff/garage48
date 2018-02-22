// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import Subject from 'components'

it('renders', () => {
  shallow(<Subject />)
})
