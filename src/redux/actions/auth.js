import axios from 'axios';

import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGOUT 
} from '../actionCreators';


export const signup = (data) => dispatch => {
  dispatch({
    type: USER_SIGNUP_REQUEST
  })

  axios.post(`https://watchnow-bcknd-morsetim.onrender.com/api/auth/register`, data).then(user => {
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: user
    })
  }).catch(e => {
    dispatch({
      type: USER_SIGNUP_FAILURE,
      error: e?.response.data.message
    })
  })
}
export const Logout = () => (dispatch) => {
  localStorage.clear()
  dispatch({
    type: USER_LOGOUT 
  })
}