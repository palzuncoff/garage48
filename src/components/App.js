import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'
import { SubjectPage } from 'components'
import { Navigation } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/subjects" component={SubjectPage} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
