import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import closeIcon from '../../../assets/images/close.png'

const Closer = ({className, closer}) => (
  <div className={classnames('core closer', className)} onClick={closer}>
    <img alt='Close Icon' src={closeIcon} />
    <span>CLOSE</span>
  </div>
)

Closer.propTypes = {
  className: PropTypes.string,
  closer: PropTypes.func
}

export default Closer
