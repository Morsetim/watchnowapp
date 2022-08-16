import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
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
