import React, {Children} from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {formData: {}, errors: []}

    this.onSubmit = this.onSubmit.bind(this)
    this.setFormValue = this.setFormValue.bind(this)
  }

  getChildContext() {
    return {
      setFormValue: this.setFormValue,
      errors: this.errors
    }
  }

  errors() { return this.props.errors ? this.state.errors.concat(this.props.errors) : this.state.errors }

  formData() { return this.state.formData }

  getValidators(children) {
    return Children.toArray(children).map(child => {
      if (child.props && child.props.validator)
        return {name: child.props.name, validator: child.props.validator}
    }).filter(validator => typeof validator !== 'undefined')
  }

  isValid() { Object.keys(this.state.formData).length && this.state.errors.length === 0 }

  setFormValue(key, value) { this.setState({formData: {...this.state.formData, [key]: value}}) }

  onSubmit(event) {
    event.preventDefault()

    if (this.props.onSubmit)
      this.props.onSubmit()
  }

  validate() {
    const validators = this.getValidators(this.props.children)
    const errors = validators.map(validator => {
      return validator.validator(validator.name, this.formData())
    }).filter(validator => typeof validator !== 'undefined')

    this.setState({errors})
    return errors
  }

  render() { return <form action='#' {...this.props} onSubmit={this.onSubmit}>{this.props.children}</form> }
}

Form.propTypes = {
  errors: PropTypes.array,
  onSubmit: PropTypes.func
}

export default Form
