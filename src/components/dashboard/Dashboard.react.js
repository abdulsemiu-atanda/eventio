import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'

import {CircularButton} from '../shared/button/Buttons.react'
import DashboardLinks from './DashboardLinks.react'
import Events from './events/Events.react'
import Loader from '../shared/Loader.react'

import {asyncRequest as fetchEvents} from '../../helpers/reduxHelpers'
import {isEqual} from '../../helpers/tools'
import {EVENTS} from '../../redux/actionTypes/eventActions'

import plusIcon from '../../assets/images/plus.png'

import './dashboard.scss'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: props.events,
      loading: true,
      past: false,
      future: false,
      grid: true
    }

    this.onClickLink = this.onClickLink.bind(this)
    this.toggleViewMode = this.toggleViewMode.bind(this)
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
    if (this.props.events.length)
      this.setState({loading: false})

    this.props.fetchEvents({
      endpoint: '/events',
      ACTION_NAME: EVENTS,
      method: 'get'
    })
  }

  toggleViewMode() { this.setState({grid: !this.state.grid}) }

  render() {
    const {events, loading, past, future, grid} = this.state
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
              <i className={classnames('fa fa-th', {active: grid})} aria-hidden="true" onClick={this.toggleViewMode}></i>
              <i className={classnames('fa fa-bars', {active: !grid})} aria-hidden="true" onClick={this.toggleViewMode}></i>
            </div>
          </div>
          <Events className={classnames({list: !grid})} events={this.state.events} />
          <CircularButton className='add'>
            <img alt='Plus Icon' src={plusIcon} />
          </CircularButton>
        </div>
      }
      </main>
    )
  }
}

const mapStateToProps = ({events}) => ({...events})

export default connect(mapStateToProps, {fetchEvents})(Dashboard)
