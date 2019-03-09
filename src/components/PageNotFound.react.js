import React from 'react'

import Error from './shared/Error.react'

class PageNotFound extends React.Component {
  constructor() {
    super()

    this.refresh = this.refresh.bind(this)
  }

  refresh() { this.props.history.push('/') }

  render() {
    return <Error notFound refresh={this.refresh} />
  }
}

export default PageNotFound
