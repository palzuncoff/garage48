// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import { Lesson } from 'components'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const LessonPreview = ({ onClick, name }) => {
  return (
    <div onClick={onClick}>
      {name}
    </div>
  )
}

class Topic extends Component {
  state = {
    activeLesson: null,
  }

  setActive = lesson => this.setState({ activeLesson: lesson });

  closeLesson = () => this.setState({ activeLesson: null })

  render() {
    const { onBack, topic, lessons } = this.props
    const { activeLesson } = this.state
    console.log(activeLesson)
    return (
      <div>
        <button type="button" onClick={onBack}>&larr;</button>
        <span>{topic.name}</span>
        {activeLesson ? (
          <Lesson {...activeLesson}/>
        ) : (
          <div>
            {lessons.map(lesson =>
              <LessonPreview
                key={lesson.name}
                onClick={() => this.setActive(lesson)}
                {...lesson}
              />
            )}
          </div>
        )}
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
    { name: 'Vera' },
    { name: 'Nadejda' },
    { name: 'Liubov' },
  ]
}

export default Topic
