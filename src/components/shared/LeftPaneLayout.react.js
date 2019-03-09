import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './leftPaneLayout.scss'

const LeftPaneLayout = ({className, error, children}) => (
  <main className={className}>
    <div className='banner'>
      <div className='overlay'>
        <div className='quote'>
          <p>“Great, Kid. Don't get cocky.”</p>
        </div>
      </div>
    </div>
    <div className={classnames('page', {error})}>{children}</div>
  </main>
)

LeftPaneLayout.propTypes = {className: PropTypes.string}

export default LeftPaneLayout
