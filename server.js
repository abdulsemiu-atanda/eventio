const express = require('express')
const compression = require('compression')
const csp = require('helmet-csp')
const config = require('config')
const helmet = require('helmet')
const path = require('path')

const contentSecurityPolicy = require('./config/content_security_policy')
const port = process.env.PORT || 8080

const app = express()


const setConfig = (req, res, next) => {
  res.locals.config = config
  res.locals.config.environment = process.env.NODE_ENV

  next()
}


app.use(compression())
app.use(setConfig)
app.use(helmet.frameguard('sameorigin'))
app.use(helmet.noSniff())
app.use(helmet.xssFilter())
app.use(helmet.ieNoOpen())
app.use(helmet.hidePoweredBy())
app.use(csp(contentSecurityPolicy.CSP_CONFIG))

app.use(express.static(__dirname + '/build'))


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`app is listening on ${port}`))
