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

class Lesson extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <section>
          <h4>{name}</h4>
        </section>
        <Carousel>
          {tests}
        </Carousel>
      </div>
    )
  }
};

Lesson.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Lesson
