import React from 'react'
import classnames from 'classnames'

class DashboarLinks extends React.Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick() { this.props.onClick(this.props.type) }

  render() {
    return <a className={classnames(this.props.className)} onClick={this.onClick}>{this.props.text}</a>
  }
}

export default DashboarLinks
