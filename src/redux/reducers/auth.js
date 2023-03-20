import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_LOGOUT
} from "../actionCreators"

const initialState = {
    user: {},
    errorMessage: null,
    tempStatus: null
  };
  
  export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_SIGNUP_REQUEST:
        return { ...state, loading: true };
        case USER_SIGNUP_SUCCESS:
        console.log(action, "register reducer")
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
      case "LOGIN_SUCCESS":
        console.log(action.payload, "new action")
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
        };
        case "LOGOUT":
          return {
            user: null,
            isFetching: false,
            error: false,
          };
      default:
        return state;
    }
  };
  
