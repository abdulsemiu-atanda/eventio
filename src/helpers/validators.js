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
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: '^Email is not valid.'
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
          message: '^Password is too short (minimum of 6 characters required).'
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
