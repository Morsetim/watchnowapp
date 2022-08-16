import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILURE
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


  export const signinReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { ...state};
  
      case USER_SIGNIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
        };
      case USER_SIGNIN_FAILURE:
        return { ...state, user: action.payload, loading: false};
      default:
        return state;
    }
  };
  
