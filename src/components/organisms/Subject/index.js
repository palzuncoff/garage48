// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SubjectContent = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1em;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`

const SubjectPanelList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        text-align: center;
        padding: 2em 0;
        a {
            text-decoration: none;
        }
        > a {
            color: #000;
        }
        &:nth-child(3n+3) {
            position: relative;
            right: 75px;
        }
        &:nth-child(3n+4) {
            position: relative;
            left: 75px;
            top: -231px;
        }
    }
`

const SubjectPanelListCircle = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: #5077da;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SubjectPanelListCircleInner = styled.div`
    width: 85px;
    height: 85px;
    margin: 0 auto;
    background: #5077da;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2em;
    font-style: italic;
    border: 3px solid #fff;
`

const SubjectPanelListProgressBar = styled.div`
    width: 100px;
    height: 5px;
    background: #c1bbe0;
    border-radius: 3px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    margin-top: .5em;
`

const SubjectPanelListProgressLine = styled.div`
    width: 20%;
    height: 5px;
    background: #5077da;
    border-radius: 3px;
    margin: 0 auto;
    position: absolute;
`

const SubjectPanelListProgress = styled.p`
    color: #8f8e97;
    margin: 0;
    padding-top: .5em;
`

const SubjectPanelTopicName = styled.p`
    margin: 0;
    padding-top: .5em;
`

const Cone = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .cone-info {
      display: none;
  }
  .cone-triangle {
    &-1 {
      &:hover {
        stroke: red;
        cursor: pointer;
        stroke-width: 3;
      }
    }
    &-2 {
      &:hover {
        stroke: blue;
        cursor: pointer;
        stroke-width: 3;
      }
    }
    &-3 {
      &:hover {
        stroke: orange;
        cursor: pointer;
        stroke-width: 3;
      }
    }
  }
`

const Crib = styled.ul`
  list-style: none;
`

class Subject extends Component {
    state = {
        coneTriangle1: '',
        coneTriangle2: '',
        coneTriangle3: '',
      };
  renderTopics = (topic, index) =>(
    <li key={topic._id}>
      <Link to={`/subjects/${topic._id}/topic1`}>
        <SubjectPanelListCircle>
            <SubjectPanelListCircleInner>
                log
            </SubjectPanelListCircleInner>
        </SubjectPanelListCircle>
        <SubjectPanelTopicName>
        </SubjectPanelTopicName>
            {topic.name}
        <SubjectPanelListProgressBar>
            <SubjectPanelListProgressLine />
        </SubjectPanelListProgressBar>
        <SubjectPanelListProgress>1/5</SubjectPanelListProgress>
      </Link>
    </li>
  )

  render() {
    const { subject } = this.props
    return (
        <div>
            <SubjectContent>
                <SubjectPanelList>
                    {subject.topics.map(this.renderTopics)}
                </SubjectPanelList>
            </SubjectContent>

            <Cone>
                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
                    <g stroke="#333" fill="none">
                        <path 
                        d="M208.430591,174.705882 L110,10 L11.569409,174.705882 a100,30 0 1,0 196.861182,0" strokeWidth="3"/>
                        <path 
                        d="M11.1314,174.705882 a100,30 0 0,1 196.861182,0" 
                        strokeDasharray="5,5" 
                        strokeWidth="3"/>
                        <path
                        className="cone-triangle-1" 
                        fill="none" 
                        stroke="#333" 
                        strokeWidth="2" 
                        d="M110.119,179.967v-0.059h99.879"/>
                        <path 
                        className="cone-triangle-2" 
                        fill="none" 
                        stroke="#333" 
                        strokeWidth="1" 
                        d="M210.471,178.059l-0.102,0.061L109.948,10.393"/>
                        <path 
                        className="cone-triangle-3" 
                        fill="none" 
                        stroke="#333" 
                        strokeWidth="2" 
                        d="M109.833,180H109.8V10"/>
                    </g>
                    <text x="95" y="100">H</text>
                    <text x="150" y="175">R</text>
                    <text x="175" y="110">G</text>
                </svg>
                <Crib>
                    <li className={`coneTriangle1 cone-info ${this.state.coneTriangle1}`}>red</li>
                    <li className={`coneTriangle2 cone-info ${this.state.coneTriangle1}`}>blue</li>
                    <li className={`coneTriangle3 cone-info ${this.state.coneTriangle1}`}>orange</li>
                </Crib>
            </Cone>
        </div>

    );
  }
};

Subject.propTypes = {
  subject: PropTypes.object.isRequired,
}

export default Subject
