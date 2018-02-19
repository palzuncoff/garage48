// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/subjects">Subjects</Link>
    </div>
  )
}

export default Navigation
