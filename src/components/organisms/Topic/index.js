// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import { Lesson } from 'components'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const BackToSubjects = styled.div`
  background: red;
`

const TopicList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 0 1em;
    a {
      text-decoration: none;
    }
    @media screen and (max-width: 720px) {
      margin: 0 .5em;
    }
  }
`

const TopicItem = styled.div`
  width: 200px;
  padding: 1em 0;
  @media screen and (max-width: 720px) {
    width: 135px;
  }
`

const TopicHeader = styled.div`
  position: relative;
  background: #557bdb;
  height: 2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .TopicHeader-title {
    font-size: 13px;
    color: #fff;
  }
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 100px solid #395ebb;
    border-left: 100px solid transparent;
    position: absolute;
    top: 2em;
    left: 0;
  }
`

const TopicBody = styled.div`
  background: #fff;
  position: relative;
  width: calc(100% - 1em);
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .TopicBody-title {
    margin: 0;
    padding-top: .5em;
    color: #333;
    text-align: center;
  }
  @media screen and (max-width: 720px) {
    padding: .5em 0 1em 0;
  }
`

const TopicBodyCircle = styled.div`
  width: 45px;
  height: 45px;
  margin: 0 auto;
  background: #5077da;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    width: 40px;
    height: 40px;
  }
`

const TopicBodyCircleInner = styled.div`
  width: 33px;
  height: 33px;
  margin: 0 auto;
  background: #5077da;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1em;
  border: 3px solid #fff;
  @media screen and (max-width: 720px) {
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
  }
`

const TopicBodyProgress = styled.p`
    color: #8f8e97;
    margin: 0;
    padding-top: .5em;
`

const TopicBodyProgressBar = styled.div`
    width: 100%;
    height: 5px;
    background: #c1bbe0;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    margin-top: .5em;
    position: absolute;
    bottom: 0;
`

const TopicBodyProgressLine = styled.div`
    width: 20%;
    height: 5px;
    background: #5077da;
    margin: 0 auto;
    position: absolute;
`

const LessonPreview = ({ onClick, name }) => {
  return (
    <li>
      <TopicItem onClick={onClick}>
          <TopicHeader>
            <p className="TopicHeader-title">TopicHeader</p>
            </TopicHeader>
          <TopicBody>
            <TopicBodyCircle>
              <TopicBodyCircleInner>√</TopicBodyCircleInner>
            </TopicBodyCircle>
            <p className="TopicBody-title">{name}</p>
            <TopicBodyProgress>1/5</TopicBodyProgress>
            <TopicBodyProgressBar>
              <TopicBodyProgressLine />
            </TopicBodyProgressBar>
          </TopicBody>
        </TopicItem>
    </li>
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
        <BackToSubjects>
          <button type="button" onClick={onBack}>&larr;</button>
          <span>{topic.name}</span>
        </BackToSubjects>

        {activeLesson ? (
          <Lesson {...activeLesson}/>
        ) : (
          <TopicList>
            {lessons.map(lesson =>
              <LessonPreview
                key={lesson.name}
                onClick={() => this.setActive(lesson)}
                {...lesson}
              />
            )}
          </TopicList>
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
    {name: 'Functions'},
    {name: 'Complex numbers'},
    {name: 'Arithmetic with polynomials'},
    {name: 'Polynomials'},
    {name: 'Rational relationships'},
    {name: 'Exponential growth & decay'}
  ]
}

export default Topic
