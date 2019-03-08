const webpack = require('webpack')
const configValue = require('./webpackTools').configValue

const globalVariablesPlugin = new webpack.DefinePlugin({
  _DEV_: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development')),
  API_KEY: process.env.API_KEY || configValue('API_KEY'),
  API_HOST:  process.env.API_HOST || configValue('API_HOST')
})

module.exports = globalVariablesPlugin
