import jwt from 'jwt-decode'

/**
 * Checks if a token has expired
 * @param {string} token - Valid jwt token
 * @returns {boolean}
 */
export const isTokenExpired = token => {
  const decoded = jwt(token)

  return decoded.exp < Date.now() / 1000
}

/**
 * Returns token from localStorage
 * @returns {String|void}
 */
export const getToken = () => localStorage.getItem('authToken')
