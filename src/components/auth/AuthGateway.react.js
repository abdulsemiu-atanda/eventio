import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import Loader from '../shared/Loader.react'

import {isLoggedIn} from '../../helpers/authHelpers'

class AuthGateway extends React.Component {
  constructor() {
    super()

    this.state = {loading: true}
  }

  componentDidMount() {
    if (isLoggedIn() && this.props.location.pathname === '/') this.props.history.push('/dashboard')

    this.setState({loading: false})
  }

  render() {
    if (this.state.loading) return <Loader loading={this.state.loading} />
    else return this.props.children
  }
}

AuthGateway.propTypes = {
  history: PropTypes.shape({push: PropTypes.func}),
  location: PropTypes.shape({pathname: PropTypes.string})
}

export default withRouter(AuthGateway)
