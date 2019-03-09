import React from 'react'
import classnames from 'classnames'

const Box = ({children, className}) => (
  <div className={classnames('box', className)}>
    {children}
  </div>
)
