import React from 'react'
import PropTypes from 'prop-types'

import Error from './shared/Error.react'

class PageNotFound extends React.Component {
  constructor() {
    super()

    this.refresh = this.refresh.bind(this)
  }

  refresh() {
    this.props.history.push('/')
  }

  render() {
    return <Error notFound refresh={this.refresh} />
  }
}

PageNotFound.propTypes = {history: PropTypes.shape({push: PropTypes.func})}

export default PageNotFound
