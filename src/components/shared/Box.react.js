import React from 'react'
import classnames from 'classnames'

import './box.scss'

const Box = ({children, className}) => (
  <div className={classnames('box', className)}>
    {children}
  </div>
)

export default Box
