import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './box.scss'

const Box = ({children, className}) => (
  <div className={classnames('box', className)}>{children}</div>
)

Box.propTypes = {className: PropTypes.string}

export default Box
