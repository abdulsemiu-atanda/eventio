import React from 'react'

import {Button, CircularButton} from '../shared/Buttons.react'

import './styleGuide.scss'

const StyleGuide = () => {
  return (
  <div className='style-guide'>
    <h2>StyleGuide</h2>
    <div className='buttons'>
      <h3>Buttons (Small)</h3>
      <div className='small'>
        <Button />
        <Button className='disabled'>Disabled</Button>
        <Button className='edit'>Edit</Button>
        <Button className='delete'>Leave</Button>
      </div>
      <h3>Buttons (Circular)</h3>
      <div>
        <CircularButton />
      </div>
    </div>
  </div>
)
}

export default StyleGuide
