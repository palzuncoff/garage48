// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
`

const NavWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5em;
    a {
      display: block;
      font-weight: 400;
      font-size: 15px;
      color: #2c3e50;
      text-decoration: none;
      padding: 0 10px;
      &:hover {
        color: #f63;
      }
    }
`

const UserNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 20px;
    background-color: #cfd1d6;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
  }
`

const Navigation = (props) => {
  return (
    <NavWrap {...props}>
      <Link to="/">Home</Link>
      <Nav {...props}>
        <Link to="/subjects">Subjects</Link>
        <UserNav>
          <Link to="/">Sign up</Link>
        </UserNav>
      </Nav>
    </NavWrap>
  )
}

export default Navigation
