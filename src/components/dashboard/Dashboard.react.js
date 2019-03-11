import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Modal} from '../shared/modals/Modals.react'
import {CircularButton} from '../shared/button/Buttons.react'
import DashboardLinks from './DashboardLinks.react'
import Events from './events/Events.react'
import Loader from '../shared/Loader.react'
import NewEventForm from './events/NewEventForm.react'

import {asyncRequest as fetchEvents} from '../../helpers/reduxHelpers'
import {isEqual, eventsHasBeenUpdated} from '../../helpers/tools'
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
    if (
      prevProps.events.length !== this.props.events.length ||
      eventsHasBeenUpdated(prevProps.events, this.props.events)
    )
      this.setState({events: this.props.events, loading: this.props.loading})
  }

  onClickLink(type) {
    const reset = {past: false, future: false}

    if (type === 'all') this.setState({events: this.props.events, ...reset})
    else if (type === 'past') this.setState({events: this.props.pastEvents, ...reset, past: true})
    else this.setState({events: this.props.futureEvents, ...reset, future: true})
  }

  componentDidMount() {
    if (this.props.events.length) this.setState({loading: false})

    this.props.fetchEvents({
      endpoint: '/events',
      ACTION_NAME: EVENTS,
      method: 'get'
    })
  }

  toggleViewMode() {
    this.setState({grid: !this.state.grid})
  }

  render() {
    const {events, loading, past, future, grid} = this.state
    const {futureEvents, pastEvents} = this.props

    return (
      <main className='dashboard'>
        {loading ? (
          <Loader className='big' loading={loading} />
        ) : (
          <div className='dashboard-inner'>
            <div className='nav'>
              <div className='sort'>
                <DashboardLinks
                  className={classnames({
                    active: isEqual(events, this.props.events) && !(past || future)
                  })}
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
                <i
                  className={classnames('fa fa-th', {active: grid})}
                  aria-hidden='true'
                  onClick={this.toggleViewMode}
                />
                <i
                  className={classnames('fa fa-bars', {active: !grid})}
                  aria-hidden='true'
                  onClick={this.toggleViewMode}
                />
              </div>
            </div>
            <Events className={classnames({list: !grid})} events={this.state.events} />
            <Modal
              showCloser
              launcher={
                <CircularButton className='add'>
                  <img alt='Plus Icon' src={plusIcon} />
                </CircularButton>
              }>
              <NewEventForm />
            </Modal>
          </div>
        )}
      </main>
    )
  }
}

Dashboard.propTypes = {
  events: PropTypes.array,
  fetchEvents: PropTypes.func,
  futureEvents: PropTypes.array,
  pastEvents: PropTypes.array
}

const mapStateToProps = ({events}) => ({...events})

export default connect(
  mapStateToProps,
  {fetchEvents}
)(Dashboard)
