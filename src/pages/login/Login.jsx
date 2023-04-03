import {  useState } from "react";
import { login } from "../../authContext/apiCalls";
import { Link, useHistory } from "react-router-dom";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import FillingBottle from "react-cssfx-loading/lib/Messaging";
import "./login.scss";
import { useDispatch, useSelector} from 'react-redux'
import { Logout } from "../../redux/actions/auth";
import { useEffect } from "react";

export default function Login() {
  const {signUpState: {user}} = useSelector(state => state);
  const {signinState: {status, errorMessage}} = useSelector(state => state);
  const [email, setEmail] = useState(user?.data?.email || "");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null)
  const dispatch = useDispatch();
  const history = useHistory();


  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login({ email, password }))
  };
 
  useEffect(() => {
    if(status === 200) {
      history.push('/')
    }
    if(errorMessage){
      setLoginError(errorMessage)
      setLoading(false);
    }
  }, [status, history, errorMessage])

  const redirect = () => {
    dispatch(Logout())
    history.push('/register')
 }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={logoImage}
            alt="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <p className="error-signin">{loginError}</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!loading ? <button className={email === "" || password === "" ? "loginButton-disabled" : "loginButton"} 
             onClick={handleLogin} disabled={email === ''|| password === ''}>
            Sign In
          </button> :
          <button className="loginButton" onClick={handleLogin}>
          <FillingBottle color="#ffffff" width="10px" height="10px" duration=".51s" />
        </button>
           }
          <span onClick={redirect}>
            New to Watchnow? <Link to={'/register'}><b>Sign up now.</b></Link> 
          </span>
        </form>
      </div>
    </div>
  );
}
