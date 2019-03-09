import React from 'react'

import LeftPaneLayout from './LeftPaneLayout.react'
import {Button} from './button/Buttons.react'

import './error.scss'

const Error = ({error, notFound, refresh}) => (
  <LeftPaneLayout error={error || notFound}>
    <div className='error'>
      <h4>{error ? 'Something went wrong.' : '404 error - page not found.'}</h4>
      <p>
        Seems like Darth Vader just hits our website and drops it down.
        Please press the refresh button and everything should be fine again.
      </p>
      <Button className='big dark' onClick={refresh}>Refresh</Button>
    </div>
  </LeftPaneLayout>
)

export default Error
