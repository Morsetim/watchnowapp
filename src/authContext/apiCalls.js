import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login =  (user) => async (dispatch)  => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`https://watchnowapp.herokuapp.com/api/auth/login`, user);
    localStorage.setItem("user" , JSON.stringify((res.data)))
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
