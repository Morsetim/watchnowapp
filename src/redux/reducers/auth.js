import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILURE,
    USER_LOGOUT
} from "../actionCreators";

import { loginStart, loginSuccess, loginFailure, logout} from "../../authContext/AuthActions";


const initialState = {
    user: {},
    errorMessage: null,
    tempStatus: null,
    loading: null,
    userLogin: null,
    status: null
  };
  
  export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_SIGNUP_REQUEST:
        return { ...state, loading: true };
        case USER_SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          tempStatus: action.payload.status
        };
      case USER_SIGNUP_FAILURE:
        return { ...state, errorMessage: action.error, loading: false};
        case USER_LOGOUT:
          return {
             ...state,
             errorMessage: null,
             tempStatus: null
             }
      default:
        return state;
    }
  };


  export const signinReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { ...state, loading: true }
      case USER_SIGNIN_SUCCESS:
        console.log(action.payload, "reduzer login")
        return {
          userLogin: action.payload.data,
          loading: false,
          error: false,
          status: action.payload.status
        };
      // case "LOGIN_FAILURE":
      //   return {
      //     user: null,
      //     isFetching: false,
      //     error: true,
      //   };
        case USER_LOGOUT:
          return {
            userLogin: null,
            status: null,
            error: false,
          };
      default:
        return state;
    }
  };
  
