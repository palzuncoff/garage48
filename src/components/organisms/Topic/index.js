// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import { Lesson } from 'components'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

class Topic extends Component {
  render() {
    const { onBack, topic, lessons } = this.props
    return (
      <div>
        <button type="button" onClick={onBack}>&larr;</button>
        <span>{topic.name}</span>
        <div>
          {lessons.map(lesson => <div>Lesson - {lesson}</div>)}
        </div>
      </div>
    )
  }
};

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
  lessons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
}

Topic.defaultProps = {
  lessons: [
    1, 2, 3, 4, 5
  ]
}

export default Topic
