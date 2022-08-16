import { combineReducers } from "redux";
import { signupReducer, signinReducer} from "./auth"

const rootReducer = combineReducers({
    signUpState: signupReducer,
    signinState: signinReducer
});

export default rootReducer;