import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadTopicsBySubject } from 'store/actions'

import { Subject } from 'components'

class SubjectContainer extends Component {
  static propTypes = {
    subject: PropTypes.object,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    list: PropTypes.array.isRequired,
    readList: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.readList()
  }

  render() {
    const { list, loading, failed } = this.props
    return <Subject {...{ list, loading, failed }} />
  }
}

const mapDispatchToProps = dispatch => ({
  loadTopics: () => dispatch(socialLoginPrepare('google', { clientId: googleClientId })),
})

export default connect()(Subject)
