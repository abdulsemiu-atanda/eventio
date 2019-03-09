import React from 'react'
import {connect} from 'react-redux'

import Events from './Events.react'

import {asyncRequest as fetchEvents} from '../helpers/reduxHelpers'
import {EVENTS} from '../redux/actionTypes/eventActions'

import './dashboard.scss'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchEvents({
      endpoint: '/events',
      ACTION_NAME: EVENTS,
      method: 'get'
    })
  }

  render() {
    return (
      <main className='dashboard'>
        <div className='dashboard-inner'>
          <div className='nav'></div>
          <Events />
        </div>
      </main>
    )
  }
}

export default connect(null, {fetchEvents})(Dashboard)
