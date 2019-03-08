import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './src/components/Header.react'
import Home from './src/components/Home.react'
import SignUp from './src/components/SignUp.react'
import StyleGuide from './src/components/styleguide/StyleGuide.react'

import './index.scss'

const Root = () => (
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
)

ReactDOM.render(<Root />, document.getElementById('app'))
