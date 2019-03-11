const config = require('config')

module.exports = {
  CSP_CONFIG: {
    directives: {
      baseUri: ["'self'"],
      blockAllMixedContent: true,
      childSrc: ["'self'", config.API_HOST],
      connectSrc: [
        "'self'",
        config.API_HOST
      ],
      defaultSrc: ["'none'"],
      fontSrc: [
        "'self'",
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'use.fontawesome.com'
      ],
      formAction: ["'self'", config.API_HOST],
      frameAncestors: ["'self'", config.API_HOST],
      frameSrc: [
        "'self'",
        config.API_HOST
      ],
      imgSrc: ["'self'"],
      mediaSrc: ["'self'"],
      objectSrc: ["'none'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'use.fontawesome.com'
      ],
      styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'use.fontawesome.com'],
    }
  }
}
