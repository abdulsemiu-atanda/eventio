import React from 'react'
import {connect} from 'react-redux'

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
    console.log(this.props)
    return (
      <div className='events'>
        {
          this.props.events.map(event => (
            <Event key={event.id} {...event} onClick={this.onClick} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({events}) => ({...events})

export default connect(mapStateToProps)(Events)
