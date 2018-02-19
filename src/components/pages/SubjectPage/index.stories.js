// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { SubjectPage } from 'components'

storiesOf('SubjectPage', module)
  .add('default', () => (
    <SubjectPage />
  ))
