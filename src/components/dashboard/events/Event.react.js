import React from 'react'
import moment from 'moment'
import classnames from 'classnames'

import Box from '../../shared/box/Box.react'
import {Button} from '../../shared/button/Buttons.react'

import profile from '../../../assets/images/profile.png'

import {decodeToken, getToken} from '../../../helpers/authHelpers'
import {fullName, eventButtonText, isAttending, isEventOwner} from '../../../helpers/tools'

import './event.scss'

class Event extends React.Component {
  constructor() {
    super()

    this.user = decodeToken(getToken('authToken')).user

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const {attendees, owner, id} = this.props
    const action = eventButtonText({attendees, owner}, this.user)

    this.props.onClick(id, action)
  }

  render() {
    const {attendees, capacity, description, id, startsAt, owner, title} = this.props

    return (
      <Box className='event'>
        <p className='time-stamp'>{moment(startsAt).format('lll')}</p>
        <h5>{title}</h5>
        <p className='owner'>{fullName(owner)}</p>
        <p className='description'>{description}</p>
        <div className='action-items'>
          <div className='info'>
            <img alt='Profile Image' src={profile} />
            <span>{`${attendees.length} of ${capacity}`}</span>
          </div>
          <Button
            className={classnames('medium', {
              delete: isAttending(attendees, this.user),
              edit: isEventOwner(owner, this.user)
            })}
            disabled={isEventOwner(owner, this.user)}
            onClick={this.onClick}>
            {eventButtonText({attendees, owner}, this.user)}
          </Button>
        </div>
      </Box>
    )
  }
}

export default Event
