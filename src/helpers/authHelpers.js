import jwt from 'jwt-decode'

export const decodeToken = token => jwt(token)

/**
 * Checks if a token has expired
 * @param {string} token - Valid jwt token
 * @returns {boolean}
 */
export const isTokenExpired = token => decodeToken(token).exp < Date.now() / 1000

export const signUpActive = ({location}) => location.pathname.includes('sign-up')

/**
 * Returns token from localStorage
 * @param {String} key - token key
 * @returns {String|void}
 */
export const getToken = key => localStorage.getItem(key)

export const authText = ({location}) =>
  signUpActive({location})
    ? {prompt: 'Already have an account?', linkText: 'SIGN IN'}
    : {prompt: "Don't have an account?", linkText: 'SIGN UP'}

export const cleanRequestHeaders = data => ({
  authorization: data.authorization,
  'refresh-token': data['refresh-token']
})

export const setToken = (key, token) => localStorage.setItem(key, token)

export const removeToken = keys => {
  if (_DEV_) console.warn('No clearing of session unless you are doing so from SIGN IN page.')

  keys.forEach(key => localStorage.removeItem(key))
}

export const isLoggedIn = () => {
  const authToken = getToken('authToken')

  return authToken && !isTokenExpired(authToken)
}
