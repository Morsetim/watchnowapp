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
  const savedEmail = user?.data?.email;
  const [email, setEmail] = useState(user?.data?.email || savedEmail);
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();


  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login({ email, password }))
  };

  const redirect =() => {
    dispatch(Logout())
    history.push('/register')
 }

//  useEffect(() => {
//   redirect()
//  }, [user])

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
          {!loading ? <button className="loginButton" onClick={handleLogin}>
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
