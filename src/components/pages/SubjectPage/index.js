// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import { Subject } from 'containers'

const SubjectHeader = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,.05);
  li {
      a {
          color: #4e5860;
          padding: 10px 25px;
          text-transform: uppercase;
          font-size: .75em;
          letter-spacing: .1em;
          font-weight: 600;
          display: block;
          text-decoration: none;
          &:hover {
              opacity: .8;
          }
      }
  }
  @media screen and (max-width: 720px) {
      flex-direction: column;
  }
`

const SubjectPage = () =>
    <div>
      <SubjectHeader>
        <li>
          <Link to="/subjects/math">Математика</Link>
        </li>
        <li>
          <Link to="/subjects/history">История</Link>
        </li>
        <li>
          <Link to="/subjects/biology">Биология</Link>
        </li>
        <li>
          <Link to="/subjects/russian">Русский язык</Link>
        </li>
        <li>
          <Link to="/subjects/obj">ОБЖ</Link>
        </li>
      </SubjectHeader>
      <Route
        path="/subjects/:subjectId"
        component={({ match }) => <Subject name={match.params.subjectId} />}
      />
    </div>

export default SubjectPage
