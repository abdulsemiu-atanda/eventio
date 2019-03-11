import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './dropdownBase.scss'

const DropdownBase = ({children, show, launcher, ...otherProps}) => {
  const Launcher = launcher

  return (
    <div className='dropdown-base'>
      <Launcher {...otherProps} />
      <div className={classnames('contents', {active: show})}>{children}</div>
    </div>
  )
}

DropdownBase.propTypes = {show: PropTypes.bool, launcher: PropTypes.func}

export default DropdownBase
