const config = require('config')

module.exports = {
  CSP_CONFIG: {
    directives: {
      baseUri: ["'self'"],
      blockAllMixedContent: true,
      childSrc: ["'self'", config.API_URL],
      connectSrc: [
        "'self'",
        config.API_URL
      ],
      defaultSrc: ["'none'"],
      fontSrc: [
        "'self'",
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'use.fontawesome.com'
      ],
      formAction: ["'self'", config.API_URL],
      frameAncestors: ["'self'", config.API_URL],
      frameSrc: [
        "'self'",
        config.API_URL
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
