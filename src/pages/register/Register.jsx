import { useRef } from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import FillingBottle from "react-cssfx-loading/lib/Messaging";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  // const handleLogin = () => {
  //   history.push("/login")
  // }
  
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      const res = await axios.post("https://watchnowapp.herokuapp.com/api/auth/register", { email,username, password });
      if(res.status === 201){
        setLoading(true)
        setTimeout(() => history.push('/login'), 1000 ) 
      }
    } catch (err) {}
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={logoImage}
            alt="logo"
          />
          {/* <button className="loginButton">Sign In</button> */}
        </div>
      </div>
      <div className="container">
        <h1>Watchnow more entertainment...</h1>
        <h2>Watch anywhere. Watch anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="gen">
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
          <p>Have an account?  <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><span className="sgn-clk">Sign In</span></Link></p>
          </div>
        ) : (
          <div className="genn">
            <form className="input">
              <input type="email" placeholder="email" ref={usernameRef} />
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
              {loading ? (<FillingBottle color="#ffffff" width="10px" height="10px" duration=".51s" />) : "Start"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
