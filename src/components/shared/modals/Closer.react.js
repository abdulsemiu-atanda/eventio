import React from 'react'
import classnames from 'classnames'

const Closer = ({className, closer, ...otherProps}) => (
  <i
    className={classnames('fa fa-times core closer', className)}
    onClick={closer}
    aria-hidden='true'
  />
)

export default Closer
