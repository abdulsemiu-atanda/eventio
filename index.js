import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './src/components/Header.react'
import StyleGuide from './src/components/styleguide/StyleGuide.react'

import './index.scss'

const Root = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={() => (<h1>Home</h1>)} />
        <Route path='/style-guide' component={StyleGuide} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('app'))
