import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

import {getToken} from '../../helpers/authHelpers'

const ProtectedRoute = ({component: Component, ...otherProps}) => (
  <Route
    {...otherProps}
    render={props => (getToken('authToken') ? <Component {...props} /> : <Redirect to='/' />)}
  />
)

ProtectedRoute.propTypes = {component: PropTypes.instanceOf(React.Component)}

export default ProtectedRoute
