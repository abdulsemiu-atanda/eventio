import React from 'react'
import classnames from 'classnames'

import './loader.scss'

const Loader = ({className, loading}) => {
  if (loading) return <div className={classnames('loader', className)} />
  else return null
}

export default Loader
