import React from 'react'
import classnames from 'classnames'

import Event from './Event.react'

import './events.scss'

class Events extends React.Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick(eventId) {
    // do something with event id
    console.log(eventId)
  }

  render() {
    return (
      <div className={classnames('events', this.props.className)}>
        {
          this.props.events.map(event => (
            <Event key={event.id} {...event} onClick={this.onClick} />
          ))
        }
      </div>
    )
  }
}

export default Events
