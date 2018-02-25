// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Lesson } from 'components'

storiesOf('Lesson', module)
  .add('default', () => (
    <Lesson name="Математика"/>
  ))
