import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE
} from "../actionCreators"

const initialState = {
    user: {}
  };
  
  export const signupReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case USER_SIGNUP_REQUEST:
        return { ...state, loading: true };
      case USER_SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
        };
      case USER_SIGNUP_FAILURE:
        return { ...state, user: action.payload, loading: false};
      default:
        return state;
    }
  };


  export const signinReducer = (state = {}, action) => {

    switch (action.type) {
      case "LOGIN_SUCCESS":
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
  
