// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Subject extends Component {
  state = {
    topics: [],
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <Link to={`/subjects/${name}/topic1`}>Sub Topic - {name}</Link>
        <Link to={`/subjects/${name}/topic2`}>Sub Topic - {name}</Link>
        <Link to={`/subjects/${name}/topic3`}>Sub Topic - {name}</Link>
      </div>
    );
  }
};

Subject.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Subject
