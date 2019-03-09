import React from 'react'
import {withRouter} from 'react-router-dom'

import Loader from '../shared/Loader.react'

import {isLoggedIn} from '../../helpers/authHelpers'

class AuthGateway extends React.Component {
  constructor() {
    super()

    this.state = {loading: true}
  }

  componentDidMount() {
    if (isLoggedIn()) {
      this.props.history.push('/dashboard')
    }

    this.setState({loading: false})
  }

  render() {
    if (this.state.loading)
      return <Loader loading={this.state.loading} />
    else
      return this.props.children
  }
}

export default withRouter(AuthGateway)
