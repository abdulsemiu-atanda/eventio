/**
 * @class FormField
 * @desc
 * Handles updating formData with input values, it should be used in conjuction wuth Form
 * @property {Array} errors - Form errors
 * @property {HTMLNode} children - Input element
 * @property {Function} onChange - Handles value change in input
 * @property {Function} validator - input validation function
 * @returns FormFiels
 * @example
 * <FormField>
 *    <FloatingLabelInput />
 * </FormField>
 */

import React from 'react'
import PropTypes from 'prop-types'

class FormField extends React.Component {
  constructor() {
    super()

    this.error = this.error.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.props.setFormValues(event.target.name, event.target.value)

    if (this.props.onChange)
      this.props.onChange()
  }

  error() {
    const fieldError = this.props.errors.find(error => error.name === this.props.name)

    return fieldError && fieldError.error && fieldError.error[0]
  }

  render() {
    return (
      <span>
        {React.cloneElement(this.props.children, {error: this.error(), onChange: this.onChange})}
      </span>
    )
  }
}

FormField.propTypes = {onChange: PropTypes.func}

export default FormField
