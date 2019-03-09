import React from 'react'

import Box from './shared/Box.react'
import {Button} from './shared/Buttons.react'

import profile from '../assets/images/profile.png'

import {fullName} from '../helpers/tools'

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
        <h4>{title}</h4>
        <p>{fullName(owner)}</p>
        <p>{description}</p>
        <div className='action-items'>
          <img alt='Profile Image' src={profile} />
          <Button className='medium' onClick={this.onClick}>Join</Button>
        </div>
      </Box>
    )
  }
}

export default Event
