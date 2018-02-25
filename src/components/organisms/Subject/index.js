// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import holder from './img/holder.png'
import coub from './img/coub.jpg'
import zigzag from './img/zigzag.png'
import { Topic } from 'components'

const HolderImage = () => <img alt="Logo" src={holder} />
const CoubImage = () => <img alt="Logo" src={coub} />
const ZigzagImage = () => <img alt="Logo" src={zigzag} />

const SubjectContent = styled.section`
    margin-top: 1em;
    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`

const SubjectPanelContent = styled.div`
    margin: 0;
    padding: 1em;
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

class Subject extends Component {
  state = {
   activeTopic: null,
  }

  setActive = activeTopic => this.setState({ activeTopic })

  resetActive = () => this.setState({ activeTopic: null })

  renderTopicPreview = (topic, index) => (
    <li key={topic._id}>
        <span onClick={() => this.setActive(topic)}>
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
        </span>
    </li>
  )

  render() {
    const { subject } = this.props
    const { activeTopic } = this.state;
    return (
      <SubjectContent>
          <SubjectPanelContent>
            {activeTopic ? (
                <Topic onBack={this.resetActive} topic={activeTopic} />
              ) : (
              <SubjectPanelList>
                {subject.topics.map(this.renderTopicPreview)}
              </SubjectPanelList>
            )}
          </SubjectPanelContent>
      </SubjectContent>
    );
  }
};

Subject.propTypes = {
  subject: PropTypes.object.isRequired,
}

export default Subject
