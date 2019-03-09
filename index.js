import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'


import AuthGateway from './src/components/auth/AuthGateway.react'
import Dashboard from './src/components/Dashboard.react'
import ErrorBoundary from './src/components/ErrorBoundary.react'
import Header from './src/components/Header.react'
import Home from './src/components/Home.react'
import PageNoFound from './src/components/PageNotFound.react'
import ProtectedRoute from './src/components/auth/ProtectedRoute.react'
import SignUp from './src/components/SignUp.react'
import StyleGuide from './src/components/styleguide/StyleGuide.react'

import rootReducer from './src/redux/reducers'

import './index.scss'

const reduxMiddlewares = () => {
  const middlewares = [thunk]
  
  if (_DEV_)
    return [...middlewares, createLogger()]
  else
    return middlewares
}

const store = createStore(rootReducer, applyMiddleware(...reduxMiddlewares()))

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <ErrorBoundary>
          <AuthGateway>
            <Switch>
              <Route exact path='/' component={Home} />
              <ProtectedRoute path='/dashboard' component={Dashboard} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/style-guide' component={StyleGuide} />
              <Route component={PageNoFound} />
            </Switch>
          </AuthGateway>
        </ErrorBoundary>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('app'))
