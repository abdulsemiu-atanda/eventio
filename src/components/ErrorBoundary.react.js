import React from 'react'

import Error from './shared/Error.react'

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
    if (this.state.hasError)
      return <Error error={this.state.hasError} refresh={this.refresh} />
    else
      return this.props.children
  }
}

export default ErrorBoundary
