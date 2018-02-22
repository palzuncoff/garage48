import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadSubject } from 'store/actions'

import { Subject } from 'components'

class SubjectContainer extends Component {
  static propTypes = {
    subject: PropTypes.object,
    // loading: PropTypes.bool,
    // failed: PropTypes.bool,
    // list: PropTypes.array.isRequired,
    loadSubject: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadSubject(this.props.subjectId)
  }

  render() {
    const { subject = {} } = this.props
    return <Subject subject={subject} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  subjectId: ownProps.name,
})

const mapDispatchToProps = {
  loadSubject,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)
