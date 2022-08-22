import {  useState } from "react";
import { login } from "../../authContext/apiCalls";
import { Link } from "react-router-dom";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import "./login.scss";
import {useDispatch} from 'react-redux'

export default function Login() {
  const [email, setEmail] = useState("badman@test.com");
  const [password, setPassword] = useState("123456");


const dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
  };

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
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Watchnow? <Link to={'/register'}><b>Sign up now.</b></Link> 
          </span>
        </form>
      </div>
    </div>
  );
}
