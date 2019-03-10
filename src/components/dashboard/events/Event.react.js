import React from 'react'
import moment from 'moment'
import classnames from 'classnames'
import {connect} from 'react-redux'

import Box from '../../shared/box/Box.react'
import {Button} from '../../shared/button/Buttons.react'

import profile from '../../../assets/images/profile.png'

import {asyncRequest} from '../../../helpers/reduxHelpers'
import {ATTEND_EVENT, LEAVE_EVENT, EVENTS} from '../../../redux/actionTypes/eventActions'
import {decodeToken, getToken} from '../../../helpers/authHelpers'
import {fullName, eventButtonText, isAttending} from '../../../helpers/tools'

import './event.scss'

class Event extends React.Component {
  constructor() {
    super()

    this.token = getToken('authToken')
    this.user = decodeToken(this.token).user

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const {attendees, owner, id} = this.props
    const action = eventButtonText({attendees, owner}, this.user)
    const endpoint = `/events/${id}/attendees/me`
    const token = this.token

    if (action === 'join')
      this.props.asyncRequest({endpoint, ACTION_NAME: ATTEND_EVENT, method: 'post', token})
    else if (action === 'leave')
      this.props.asyncRequest({endpoint, ACTION_NAME: LEAVE_EVENT, method: 'delete', token})
  }

  componentDidUpdate(prevProps) {
    if (this.props.going || this.props.left)
      this.props.asyncRequest({endpoint: '/events', ACTION_NAME: EVENTS, method: 'get'})
  }

  render() {
    const {attendees, capacity, description, id, startAt, owner, title} = this.props

    return (
      <Box className='event'>
        <p className='time-stamp'>{moment(startAt).format('lll')}</p>
        <h5>{title}</h5>
        <p className='owner'>{fullName(owner)}</p>
        <p className='description'>{description}</p>
        <div className='action-items'>
          <div className='info'>
            <img alt='Profile Image' src={profile} />
            <span>{`${attendees.length} of ${capacity}`}</span>
          </div>
          <Button
            className={classnames('medium', {delete: isAttending(attendees, this.user)})}
            onClick={this.onClick}>
            {eventButtonText({attendees, owner}, this.user)}
          </Button>
        </div>
      </Box>
    )
  }
}

const mapStateToProps = ({eventActions}) => ({...eventActions})

export default connect(mapStateToProps, {asyncRequest})(Event)
