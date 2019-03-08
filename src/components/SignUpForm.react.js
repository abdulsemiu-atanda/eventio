import React from 'react'

import Form from './shared/Form.react'
import FormField from './shared/FormField.react'
import {FloatingLabelInputWithError} from './shared/Input.react'
import {Button} from './shared/Buttons.react'

import validators from '../helpers/validators'

import './signUpForm.scss'

class SignUpForm extends React.Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    console.log(this.refs.form.validate())
    console.log(this.refs.form.formData())
  }

  render() {
    return (
      <div className='sign-up-form'>
        <h4>Get started absolutely free</h4>
        <p>Enter your details below.</p>
        <Form ref='form'>
          <FormField name='first-name' validator={validators.required}>
            <FloatingLabelInputWithError name='first-name' label='First Name' />
          </FormField>
          <FormField name='last-name' validator={validators.required}>
            <FloatingLabelInputWithError name='last-name' label='Last Name' />
          </FormField>
          <FormField name='email' validator={validators.emailValidator}>
            <FloatingLabelInputWithError name='email' label='Email' />
          </FormField>
          <FormField name='password' validator={validators.passwordValidator}>
            <FloatingLabelInputWithError name='password' label='Password' type='password' />
          </FormField>
          <FormField name='repeat-password' validator={validators.confirmPasswordValidator}>
            <FloatingLabelInputWithError name='repeat-password' label='Repeat Password' type='password' />
          </FormField>
          <Button className='big' onClick={this.onSubmit}>SIGN UP</Button>
        </Form>
      </div>
    )
  }
}

export default SignUpForm
