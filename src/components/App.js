import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'components'
import { SubjectPage } from 'components'
import { Header } from 'components'
import { SignUpPage } from 'components'
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

const TopicList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 0 1em;
    a {
      text-decoration: none;
    }
  }
`

const Topic = styled.div`
  width: 200px;
  padding: 1em 0;
  @media screen and (max-width: 720px) {
    width: 135px;
  }
`

const TopicHeader = styled.div`
  position: relative;
  background: #557bdb;
  height: 2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .TopicHeader-title {
    font-size: 13px;
    color: #fff;
  }
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 100px solid #395ebb;
    border-left: 100px solid transparent;
    position: absolute;
    top: 2em;
    left: 0;
  }
`

const TopicBody = styled.div`
  background: #fff;
  position: relative;
  width: calc(100% - 1em);
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .TopicBody-title {
    margin: 0;
    padding-top: .5em;
    color: #333;
  }
  @media screen and (max-width: 720px) {
    padding: .5em 0 1em 0;
  }
`

const TopicBodyCircle = styled.div`
  width: 45px;
  height: 45px;
  margin: 0 auto;
  background: #5077da;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    width: 40px;
    height: 40px;
  }
`

const TopicBodyCircleInner = styled.div`
  width: 33px;
  height: 33px;
  margin: 0 auto;
  background: #5077da;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1em;
  border: 3px solid #fff;
  @media screen and (max-width: 720px) {
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
  }
`

const TopicBodyProgress = styled.p`
    color: #8f8e97;
    margin: 0;
    padding-top: .5em;
`

const TopicBodyProgressBar = styled.div`
    width: 100%;
    height: 5px;
    background: #c1bbe0;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    margin-top: .5em;
    position: absolute;
    bottom: 0;
`

const TopicBodyProgressLine = styled.div`
    width: 20%;
    height: 5px;
    background: #5077da;
    margin: 0 auto;
    position: absolute;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Switch>
          <Wrapper>

            <TopicList>
              <li>
                <Link to="/subjects" className="">
                  <Topic>
                    <TopicHeader>
                      <p className="TopicHeader-title">TopicHeader</p>
                      </TopicHeader>
                    <TopicBody>
                      <TopicBodyCircle>
                        <TopicBodyCircleInner>√</TopicBodyCircleInner>
                      </TopicBodyCircle>
                      <p className="TopicBody-title">Square root</p>
                      <TopicBodyProgress>1/5</TopicBodyProgress>
                      <TopicBodyProgressBar>
                        <TopicBodyProgressLine />
                      </TopicBodyProgressBar>
                    </TopicBody>
                  </Topic>
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="">
                  <Topic>
                    <TopicHeader>
                      <p className="TopicHeader-title">TopicHeader</p>
                      </TopicHeader>
                    <TopicBody>
                      <TopicBodyCircle>
                        <TopicBodyCircleInner>√</TopicBodyCircleInner>
                      </TopicBodyCircle>
                      <p className="TopicBody-title">Square root</p>
                      <TopicBodyProgress>1/5</TopicBodyProgress>
                      <TopicBodyProgressBar>
                        <TopicBodyProgressLine />
                      </TopicBodyProgressBar>
                    </TopicBody>
                  </Topic>
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="">
                  <Topic>
                    <TopicHeader>
                      <p className="TopicHeader-title">TopicHeader</p>
                      </TopicHeader>
                    <TopicBody>
                      <TopicBodyCircle>
                        <TopicBodyCircleInner>√</TopicBodyCircleInner>
                      </TopicBodyCircle>
                      <p className="TopicBody-title">Square root</p>
                      <TopicBodyProgress>1/5</TopicBodyProgress>
                      <TopicBodyProgressBar>
                        <TopicBodyProgressLine />
                      </TopicBodyProgressBar>
                    </TopicBody>
                  </Topic>
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="">
                  <Topic>
                    <TopicHeader>
                      <p className="TopicHeader-title">TopicHeader</p>
                      </TopicHeader>
                    <TopicBody>
                      <TopicBodyCircle>
                        <TopicBodyCircleInner>√</TopicBodyCircleInner>
                      </TopicBodyCircle>
                      <p className="TopicBody-title">Square root</p>
                      <TopicBodyProgress>1/5</TopicBodyProgress>
                      <TopicBodyProgressBar>
                        <TopicBodyProgressLine />
                      </TopicBodyProgressBar>
                    </TopicBody>
                  </Topic>
                </Link>
              </li>
            </TopicList>

            <Route path="/subjects" component={SubjectPage} />
            <Route path="/sign-up" component={SignUpPage} />
          </Wrapper>
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
