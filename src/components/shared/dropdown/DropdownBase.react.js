import React from 'react'
import classnames from 'classnames'

import './dropdownBase.scss'

const DropdownBase = ({className, children, show, launcher, ...otherProps}) => {
  const Launcher = launcher

  return (
    <div className='dropdown-base'>
      <Launcher {...otherProps} />
      <div className={classnames('contents', {active: show})}>
        {children}
      </div>
    </div>
  )
}

export default DropdownBase
