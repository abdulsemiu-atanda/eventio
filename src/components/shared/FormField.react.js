import React from 'react'
import PropTypes from 'prop-types'

class FormField extends React.Component {
  onChange(event) {
    this.context.setFormValues(event.target.name, this.refs.formInput.value)

    if (this.props.onChange)
      this.props.onChange()
  }

  render() {
    return (
      <span>
        {React.cloneElement(this.props.children, {error: '', ref: 'formInput'})}
      </span>
    )
  }
}

FormField.propTypes = {onChange: PropTypes.func}

export default FormField
