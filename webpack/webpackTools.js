const config = require('config')

const configValue = key => JSON.stringify(config.get(key))

module.exports = {
  configValue
}
