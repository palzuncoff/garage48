// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Subject } from 'components'

storiesOf('Subject', module)
  .add('default', () => (
    <Subject name="Математика"/>
  ))
