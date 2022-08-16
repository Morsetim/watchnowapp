import axios from 'axios';

import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from '../actionCreators';


export const signup = (data) => dispatch => {
  dispatch({
    type: USER_SIGNUP_REQUEST
  })

  axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, data).then(user => {
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: user.data
    })

    console.log(user.data, "user.datauser.datauser.datauser.data")
  }).catch(e => {
    dispatch({
      type: USER_SIGNUP_FAILURE,
      error: e.message
    })
  })
}
