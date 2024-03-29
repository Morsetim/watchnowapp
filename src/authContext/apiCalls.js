import axios from "axios";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_FAILURE, USER_SIGNIN_SUCCESS, USER_LOGOUT } from "../redux/actionCreators";

export const login = (user) => async (dispatch)  => {
  dispatch({
        type: USER_SIGNIN_REQUEST
       })
  try {
    const res = await axios.post(`https://watchnow-bcknd-morsetim.onrender.com/api/auth/login`, user);
    localStorage.setItem("user" , JSON.stringify((res.data)))
    localStorage.setItem("watch_now_token" , JSON.stringify((res.data.accessToken)))
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: res
    })
  } catch (err) {
    console.log(err.response, "erreeeerrr")
    dispatch({
      type: USER_SIGNIN_FAILURE,
      error: err.response.data
    })
  }
};

export const Logout = () => (dispatch) => {
  localStorage.clear()
  dispatch({
    type: USER_LOGOUT 
  })
}