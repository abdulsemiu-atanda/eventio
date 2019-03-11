import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {getToken} from '../../helpers/authHelpers'

const ProtectedRoute = ({component: Component, ...otherProps}) => (
  <Route
    {...otherProps}
    render={props => (getToken('authToken') ? <Component /> : <Redirect to='/' />)}
  />
)

export default ProtectedRoute
