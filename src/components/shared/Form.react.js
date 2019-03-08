import React, {Children} from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {formData: {}, errors: []}

    this.errors = this.errors.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.setFormValues = this.setFormValues.bind(this)
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

  setFormValues(key, value) { this.setState({formData: {...this.state.formData, [key]: value}}) }

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

  render() {
    return (
      <form action='#' {...this.props} onSubmit={this.onSubmit}>
        {React.Children.map(this.props.children, child => React.cloneElement(child, {setFormValues: this.setFormValues, errors: this.state.errors}))}
      </form>
    )
  }
}

Form.propTypes = {
  errors: PropTypes.array,
  onSubmit: PropTypes.func
}

export default Form
