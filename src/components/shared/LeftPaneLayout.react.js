import React from 'react'
import PropTypes from 'prop-types'

import './leftPaneLayout.scss'

const LeftPaneLayout = ({className, children}) => (
  <main className={className}>
    <div className='banner'>
      {/* <img className='banner' alt='Banner' src={banner} /> */}
      <div className='overlay'>
        <div className='quote'>
          <p>“Great, Kid. Don't get cocky.”</p>
        </div>
      </div>
    </div>
    <div className='page'>{children}</div>
  </main>
)

LeftPaneLayout.propTypes = {className: PropTypes.string}

export default LeftPaneLayout