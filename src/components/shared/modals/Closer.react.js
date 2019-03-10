import React from 'react'
import classnames from 'classnames'

import closeIcon from '../../../assets/images/close.png'

const Closer = ({className, closer, ...otherProps}) => (
  <div className={classnames('core closer', className)} onClick={closer}>
    <img alt='Close Icon' src={closeIcon} />
    <span>CLOSE</span>
  </div>
)

export default Closer
