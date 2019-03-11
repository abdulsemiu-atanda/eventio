import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class DashboarLinks extends React.Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.onClick(this.props.type)
  }

  render() {
    return (
      <a className={classnames(this.props.className)} onClick={this.onClick}>
        {this.props.text}
      </a>
    )
  }
}

DashboarLinks.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
}

export default DashboarLinks
