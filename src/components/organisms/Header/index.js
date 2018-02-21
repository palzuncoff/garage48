import React from 'react'
import styled from 'styled-components'
import { Navigation } from 'components'


const Head = styled.header`
    box-shadow: 0 1px 10px rgba(0,0,0,.08);
    background: #fff;
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


const Header = () =>
    <Head>
      <Wrapper>
        <Navigation />
      </Wrapper>
    </Head>

export default Header
