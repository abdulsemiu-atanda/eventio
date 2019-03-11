import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './input.scss'

export const Input = React.forwardRef(({className, ...otherProps}, ref) => (
  <input ref={ref} className={classnames('base', className)} type='text' {...otherProps} />
))

Input.propTypes = {className: PropTypes.string}

export class FloatingLabelInput extends React.Component {
  constructor() {
    super()

    this.onClickLabel = this.onClickLabel.bind(this)
  }

  onClickLabel() {
    this.refs.input.focus()
  }

  render() {
    const {className, label, ...otherProps} = this.props
    return (
      <div className='floating-label'>
        <Input
          ref='input'
          className={classnames('input-control', className)}
          {...otherProps}
          required
        />
        {label && (
          <label className='placeholder' onClick={this.onClickLabel}>
            {label}
          </label>
        )}
      </div>
    )
  }
}

FloatingLabelInput.propTypes = {label: PropTypes.string, className: PropTypes.string}

export const FloatingLabelInputWithError = ({error, ...otherProps}) => (
  <div className='floating-label-with-error'>
    <FloatingLabelInput className={classnames({error})} {...otherProps} />
    {error && <span>{error}</span>}
  </div>
)

FloatingLabelInputWithError.propTypes = {error: PropTypes.string}
