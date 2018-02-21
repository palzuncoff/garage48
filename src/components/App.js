import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { HomePage } from 'components'
import { SubjectPage } from 'components'
import { Header } from 'components'
// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
    background: #f7f7f7;
    font-family: 'Roboto', sans-serif;
  }
`

const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 992px) {
    width: 90%;
  }
`

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Switch>
          <Wrapper {...props}>
            <Route path="/subjects" component={SubjectPage} />
          </Wrapper>
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
