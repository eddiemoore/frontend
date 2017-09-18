import { Meteor } from 'meteor/meteor'
import { push } from 'react-router-redux'

export const LOGIN_ERROR = 'login_error'
export const LOGIN_PROCESS = 'login_process'

export function submitCredentials (email, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_PROCESS
    })
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        dispatch({
          type: LOGIN_ERROR,
          value: err
        })
      } else {
        dispatch(push('/unit/new'))
      }
    })
  }
}
