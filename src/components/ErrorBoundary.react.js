import React from 'react'

import LeftPaneLayout from './shared/LeftPaneLayout.react'
import {Button} from './shared/Buttons.react'

import './errorBoundary.scss'

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = {hasError: false}
    this.refresh = this.refresh.bind(this)
  }

  static getDerivedStateFromError(error) {
    if (error)
      return {hasError: true}

    return null
  }

  refresh() { window.location.reload() }

  render() {
    if (this.state.hasError) {
      return (
        <LeftPaneLayout error={this.state.hasError}>
          <div className='error'>
            <h4>Something went wrong.</h4>
            <p>
              Seems like Darth Vader just hits our website and drops it down.
              Please press the refresh button and everything should be fine again.
            </p>
            <Button className='big dark' onClick={this.refresh}>Refresh</Button>
          </div>
        </LeftPaneLayout>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
