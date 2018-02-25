// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-slick'
import styled from 'styled-components'

const tests = [
  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>,
  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>,
  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>,
  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>,
  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>,
  <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>,
]

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

const captions = {
  g: <li>
    <h4>Generatorea</h4>
    <span>G = R2 + H2</span>
  </li>,
  r: <li>
    <h4>Generatorea</h4>
    <span>G = R4 + H4</span>
  </li>,
  o: <li>
    <h4>Generatorea</h4>
    <span>G = R3 + H3</span>
  </li>,
}

class Lesson extends Component {
  state = {
    captionId: 'g',
  }

  setCaption = id => this.setState({ captionId: id })

  render() {
    const { name } = this.props;
    const { captionId } = this.state

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
                className="cone-triangle-1"
                fill="none"
                stroke="#333"
                strokeWidth="2"
                d="M110.119,179.967v-0.059h99.879"
              />
              <path
                onClick={() => this.setCaption('g')}
                className="cone-triangle-2"
                fill="none"
                stroke="#333"
                strokeWidth="1"
                d="M210.471,178.059l-0.102,0.061L109.948,10.393"
              />
              <path
                onClick={() => this.setCaption('o')}
                className="cone-triangle-3"
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
      </div>
    )
  }
};

Lesson.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lesson
