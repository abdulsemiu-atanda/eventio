import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'

import Event from './Event.react'

import {ATTEND_EVENT, LEAVE_EVENT, EVENTS} from '../../../redux/actionTypes/eventActions'
import {asyncRequest} from '../../../helpers/reduxHelpers'
import {getToken} from '../../../helpers/authHelpers'

import './events.scss'

class Events extends React.Component {
  constructor() {
    super()

    this.token = getToken('authToken')

    this.onClick = this.onClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.going.id !== prevProps.going.id || this.props.left.id !== prevProps.left.id)
      this.props.asyncRequest({endpoint: '/events', ACTION_NAME: EVENTS, method: 'get'})
  }

  onClick(eventId, status) {
    const endpoint = `/events/${eventId}/attendees/me`
    const token = this.token

    if (status === 'join')
      this.props.asyncRequest({endpoint, ACTION_NAME: ATTEND_EVENT, method: 'post', token})
    else if (status === 'leave')
      this.props.asyncRequest({endpoint, ACTION_NAME: LEAVE_EVENT, method: 'delete', token})
  }

  render() {
    return (
      <div className={classnames('events', this.props.className)}>
        {this.props.events.map(event => (
          <Event key={event.id} {...event} onClick={this.onClick} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({eventActions}) => ({
  left: eventActions.left,
  going: eventActions.going
})

export default connect(
  mapStateToProps,
  {asyncRequest}
)(Events)
