// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Topic extends Component {
  render() {
    return <div>Topic Page</div>
  }
};

Topic.propTypes = {
  // topic: PropTypes.object.isRequired,
  // subTopics: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  // })),
}

export default Topic
