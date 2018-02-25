// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-slick'
import styled from 'styled-components'
import gFormul from './img/g.png'
import hFormul from './img/h.png'
import rFormul from './img/r.png'

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
      &:focus {
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
      &:focus {
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
      &:focus {
        stroke: orange;
        cursor: pointer;
        stroke-width: 3;
      }
    }
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

const Crib = styled.ul`
  list-style: none;
  padding: 2em;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  li {
    list-style: none;
    width: 300px;
    img {
      max-width: 100%;
    }
    span {
      padding: 1em;
      background: #eee;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,.1);
      margin-top: 1em;
      display: inline-block;
    }
    h4 {
      margin: 0;
      @media screen and (max-width: 720px) {
        display: block;
      }
    }
  }
`

const Test = styled.div

const captions = {
  r: <li>
    <img src={rFormul} alt="img" />
  </li>,
  h: <li>
    <img src={gFormul} alt="img" />
  </li>,
  g: <li>
    <img src={hFormul} alt="img" />
  </li>,
}

class Test1  extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { onComplete } = this.props
    return (
      <fieldset>
        <div>Question 1</div>
        <input type="checkbox" id={'answer-1'} />
        <label htmlFor={'answer-1'}>Answer 1</label>
        <input type="checkbox" id={'answer-2'} />
        <label htmlFor={'answer-2'} onClick={onComplete}>Answer 2</label>
        <input type="checkbox" id={'answer-3'} />
        <label htmlFor={'answer-3'}>Answer 3</label>
      </fieldset>
    )
  }
}

const tests = [
  <Test1 />,
  <fieldset>
    <div>Question 2</div>
    <input type="checkbox" id={'answer-4'} />
    <label htmlFor={'answer-4'}>Answer 1</label>
    <input type="checkbox" id={'answer-5'} />
    <label htmlFor={'answer-5'}>Answer 2</label>
    <input type="checkbox" id={'question-6'} />
    <label htmlFor={'question-6'}>Answer 3</label>
  </fieldset>,
]

class Lesson extends Component {
  state = {
    captionId: 'g',
    testId: null,
    canMoveOn: true,
  }

  activateNextButton = () => this.setState({ canMoveOn: true })

  deactivateNextButton = () => this.setState({ canMoveOn: false })

  setCaption = id => this.setState({ captionId: id })

  showNextTest = () => this.setState({ testId: this.state.testId + 1 })

  startOver = () => this.setState({ testId: 0 })

  render() {
    const { name } = this.props;
    const { captionId, testId, canMoveOn } = this.state

    return (
      <div>
        <section>
          <h4>{name}</h4>
        </section>
        <Cone>
          <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
            <g stroke="#333" fill="none">
              <path
                d="M208.430591,174.705882 L110,10 L11.569409,174.705882 a100,30 0 1,0 196.861182,0" strokeWidth="3"/>
              <path
                d="M11.1314,174.705882 a100,30 0 0,1 196.861182,0"
                strokeDasharray="5,5"
                strokeWidth="3"
              />
              <path
                onClick={() => this.setCaption('r')}
                className={`cone-triangle-1 ${captionId === 'r' ? 'cone-triangle-1__active' : ''}`}
                fill="none"
                stroke="#333"
                strokeWidth="2"
                d="M110.119,179.967v-0.059h99.879"
              />
              <path
                onClick={() => this.setCaption('h')}
                className={`cone-triangle-2 ${captionId === 'h' ? 'cone-triangle-2__active' : ''}`}
                fill="none"
                stroke="#333"
                strokeWidth="1"
                d="M210.471,178.059l-0.102,0.061L109.948,10.393"
              />
              <path
                onClick={() => this.setCaption('g')}
                className={`cone-triangle-3 ${captionId === 'r' ? 'cone-triangle-3__active' : ''}`}
                fill="none"
                stroke="#333"
                strokeWidth="2"
                d="M109.833,180H109.8V10"
              />
            </g>
            <text x="95" y="100">H</text>
            <text x="150" y="175">R</text>
            <text x="175" y="110">G</text>
          </svg>
          <Crib>
            {captions[captionId]}
          </Crib>
      </Cone>
        <form>
          {!testId &&
            <input type="button" value="Start" onClick={this.showNextTest}/>}
          {testId === 1 ?
            <div>
              <Test1
                onComplete={this.activateNextButton}
                onLoad={this.deactivateNextButton}
              />
              <input
                type="button"
                value="Next"
                onClick={this.showNextTest}
                disabled={!canMoveOn}
              />
            </div>
            : null
          }
          {testId && testId === tests.length ?
            <input type="button" value="Done" onClick={this.startOver}/>
            : null
          }
        </form>
      </div>
    )
  }
};

Lesson.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lesson
