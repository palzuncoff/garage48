// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Link } from 'react-router-dom'

const Subject = ({ name }) => {
  return (
    <div>
      <h4>{name}</h4>
      <Link to={`/subjects/${name}/topic1`}>Sub Topic - {name}</Link>
      <Link to={`/subjects/${name}/topic2`}>Sub Topic - {name}</Link>
      <Link to={`/subjects/${name}/topic3`}>Sub Topic - {name}</Link>
    </div>

  )
}

export default Subject
