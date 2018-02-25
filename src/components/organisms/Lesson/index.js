// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Lesson extends Component {
  render() {
    return <div>Lesson {this.props.name}</div>
  }
};

Lesson.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lesson
