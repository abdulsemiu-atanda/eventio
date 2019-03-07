import React from 'react'

import {Button, CircularButton} from '../shared/Buttons.react'
import {Input, FloatingLabelInput} from '../shared/Input.react'

import plusIcon from '../../assets/images/plus.png'

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
      <h3>Buttons (Medium)</h3>
      <div className='medium'>
        <Button className='medium' />
        <Button className='medium disabled'>Disabled</Button>
        <Button className='medium edit'>Edit</Button>
        <Button className='medium delete'>Leave</Button>
      </div>
      <h3>Buttons (Big)</h3>
      <div className='big'>
        <Button className='big' />
        <Button className='big disabled'>Disabled</Button>
        <Button className='big edit'>Edit</Button>
        <Button className='big delete'>Leave</Button>
      </div>
      <h3>Buttons (Circular)</h3>
      <div>
        <CircularButton>
          <img alt='Plus Icon' src={plusIcon} />
        </CircularButton>
      </div>
    </div>
    <div className='inputs'>
      <h3>Inputs (No Label)</h3>
      <div className='no-label'>
        <Input placeholder='Base Input' />
      </div>
      <h3>Inputs (Floating Label)</h3>
      <div className='floating-label'>
        <FloatingLabelInput placeholder='Email' />
      </div>
    </div>
  </div>
)
}

export default StyleGuide
