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

export const signUpActive = ({location}) => location.pathname.includes('sign-up')

/**
 * Returns token from localStorage
 * @returns {String|void}
 */
export const getToken = () => localStorage.getItem('authToken')

export const authText = ({location}) => {
  return (
    signUpActive({location}) ?
      {prompt: 'Already have an account?', linkText: 'SIGN IN'} :
      {prompt: "Don't have an account?", linkText: 'SIGN UP'}
  )
}

export const cleanRequestHeaders = data => ({authorization: data.authorization, 'refresh-token': data['refresh-token']})
