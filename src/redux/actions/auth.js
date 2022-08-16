import axios from 'axios';

import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE
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


export const signIn = (data) => dispatch => {
    dispatch({
        type: USER_SIGNIN_REQUEST
    })
    axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`).then(user => {
        console.log(user, "Logged IN user............");
        // dispatch({
        //     type: USER_SIGNIN_SUCCESS,
        //     payload: user.data
        // })
    })
    // .catch(e => {
    //     dispatch({
    //       type: USER_SIGNIN_FAILURE,
    //       error: e.message
    //     })
    //   })
}