import moment from 'moment'
import validate from 'validate.js'

validate.extend(validate.validators.datetime, {
  parse: function(value, options) {
    return +moment.utc(value)
  },
  format: function(value, options) {
    var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
    return moment.utc(value).format(format)
  }
})

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
  dateValidator: (name, data) => {
    const constraints = {
      [name]: {
        presence: true,
        datetime: {
          dateOnly: true,
          earliest: moment.utc().toISOString()
        }
      }
    }
    return template(name, data, constraints)
  },
  numberValidator: (name, data) => {
    const constraints = {
      [name]: {
        presence: true,
        numericality: {
          onlyInteger: true,
          greaterThan: 0
        }
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
