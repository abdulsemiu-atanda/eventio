import validate from 'validate.js'

const template = (name, data, constraints) => {
  const errors = {name, error: validate(data, constraints, {format: 'flat'})}

  return errors
}

const validators = {
  template,
  emailValidator: (name, data) => {
    const constraints = {
      [name]: {
        presence: true,
        email: {message: '^Wrong email address'}
      }
    }

    return template(name, data, constraints)
  },
  confirmPasswordValidator: (name, data) => {
    const constraints = {
      [name]: {
        presence: true,
        equality: 'password'
      }
    }

    return template(name, data, constraints)
  },
  passwordValidator: (name, data) => {
    const constraints = {
      [name]: {
        presence: true,
        length: {
          minimum: 6,
          message: '^Password is too short (minimum of 6 characters required)'
        }
      }
    }

    return template(name, data, constraints)
  },
  required: (name, data) => {
    const constraints = {
      [name]: {presence: true}
    }

    return template(name, data, constraints)
  }
}

export default validators
