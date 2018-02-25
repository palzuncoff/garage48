// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Topic } from 'components'

storiesOf('Topic', module)
  .add('default', () => (
    <Topic name="Математика"/>
  ))
