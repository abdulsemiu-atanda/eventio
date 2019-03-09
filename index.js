import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import Header from './src/components/Header.react'
import Home from './src/components/Home.react'
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/style-guide' component={StyleGuide} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('app'))
