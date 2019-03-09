import React from 'react'

import './loader.scss'

const Loader = ({loading}) => {
  if (loading) {
    return (
      <div className="loader" />
    )
  } else {
    return null
  }
}

export default Loader
