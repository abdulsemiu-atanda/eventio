import React from 'react'
import moment from 'moment'

import Box from '../../shared/box/Box.react'
import {Button} from '../../shared/button/Buttons.react'

import profile from '../../../assets/images/profile.png'

import {fullName} from '../../../helpers/tools'

import './event.scss'

class Event extends React.Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick() { this.props.onClick(this.props.id) }

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
          <Button className='medium' onClick={this.onClick}>Join</Button>
        </div>
      </Box>
    )
  }
}

export default Event