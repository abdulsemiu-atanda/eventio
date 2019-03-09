import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'

import DashboardLinks from './DashboardLinks.react'
import Events from './Events.react'
import Loader from './shared/Loader.react'

import {asyncRequest as fetchEvents} from '../helpers/reduxHelpers'
import {isEqual} from '../helpers/tools'
import {EVENTS} from '../redux/actionTypes/eventActions'

import './dashboard.scss'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {events: props.events, loading: true, past: false, future: false}

    this.onClickLink = this.onClickLink.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.events.length !== this.props.events.length)
      this.setState({events: this.props.events, loading: this.props.loading})
  }

  onClickLink(type) {
    const reset = {past: false, future: false}

    if (type === 'all')
      this.setState({events: this.props.events, ...reset})
    else if (type === 'past')
      this.setState({events: this.props.pastEvents, ...reset, past: true})
    else
      this.setState({events: this.props.futureEvents, ...reset, future: true})
  }

  componentDidMount() {
    this.props.fetchEvents({
      endpoint: '/events',
      ACTION_NAME: EVENTS,
      method: 'get'
    })
  }

  render() {
    const {events, loading, past, future} = this.state
    const {futureEvents, pastEvents} = this.props

    return (
      <main className='dashboard'>
      {
        loading ?
        <Loader className='big' loading={loading} /> :
        <div className='dashboard-inner'>
          <div className='nav'>
            <div className='sort'>
              <DashboardLinks
                className={classnames({active: isEqual(events, this.props.events)})}
                text='ALL EVENTS'
                type='all'
                onClick={this.onClickLink}
              />
              <DashboardLinks
                className={classnames({active: isEqual(events, futureEvents) && future})}
                text='FUTURE EVENTS'
                type='future'
                onClick={this.onClickLink}
              />
              <DashboardLinks
                className={classnames({active: isEqual(events, pastEvents) && past})}
                text='PAST EVENTS'
                type='past'
                onClick={this.onClickLink}
              />
            </div>
            <div className='view-modes'>
            </div>
          </div>
          <Events events={this.state.events} />
        </div>
      }
      </main>
    )
  }
}

const mapStateToProps = ({events}) => ({...events})

export default connect(mapStateToProps, {fetchEvents})(Dashboard)
