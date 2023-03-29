import { loginStart, loginSuccess, logout, loginFailure } from "./AuthActions";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        status: null
      };
    case "LOGIN_SUCCESS":
  // Login user that is already registered to see the outcome...
  console.log(action.payload, "login reducer... sucesss")
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      console.log(action.payload, "login reducer...")
      return {
        userError: action.payload,
        isFetching: false,
        error: true,
      };     
    case "LOGOUT":
      return {
        user: null,
        isFetching: null,
        error: null,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
