import React from 'react'
import classnames from 'classnames'

import './input.scss'

export const Input = ({className, ...otherProps}) => (
  <input
    className={classnames('base', className)}
    type='text'
    {...otherProps}
  />
)

export const FloatingLabelInput = ({className, label, ...otherProps}) => (
  <div className='floating-label'>
    <Input className={classnames('input-control', className)} {...otherProps} required />
    {label && <label className='placeholder'>{label}</label>}
  </div>
)

export const FloatingLabelInputWithError = ({error, ...otherProps}) => (
  <div className='floating-label-with-error'>
    <FloatingLabelInput className={classnames({error})} {...otherProps} />
    {error && <span>{error}</span>}
  </div>
)
