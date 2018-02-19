// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Subject } from 'components';

const SubjectPage = () => {
  return (
    <div>
      <div>Subjects</div>
      <Link to="/subjects/math">Математика</Link>
      <Link to="/subjects/history">История</Link>
      <Link to="/subjects/biology">Биология</Link>
      <Link to="/subjects/russian">Русский язык</Link>
      <Link to="/subjects/obj">ОБЖ</Link>
      <Route
        path="/subjects/:subjectId"
        component={({ match }) => <Subject name={match.params.subjectId} />}
      />
    </div>
  )
}

export default SubjectPage
