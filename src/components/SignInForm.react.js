import React from 'react'

import Form from './shared/Form.react'
import FormField from './shared/FormField.react'
import {FloatingLabelInputWithError} from './shared/Input.react'
import {Button} from './shared/Buttons.react'

import validators from '../helpers/validators'

import './signInForm.scss'

class SignInForm extends React.Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit() {
    // console.log(this.refs)
    console.log(this.refs.form.validate())
    console.log(this.refs.form.formData())
    // console.log(this.refs.form.errors())
  }

  render() {
    return (
      <div className='sign-in-form'>
        <h4>Sign in into Eventio.</h4>
        <p>Enter your details below.</p>
        <Form ref='form'>
          <FormField name='email' validator={validators.emailValidator}>
            <FloatingLabelInputWithError name='email' label='Email' />
          </FormField>
          <FormField name='password' validator={validators.passwordValidator}>
            <FloatingLabelInputWithError name='password' label='Password' type='password' />
          </FormField>
          <Button className='big' onClick={this.onSubmit}>Sign In</Button>
        </Form>
      </div>
    )
  }
}

export default SignInForm
