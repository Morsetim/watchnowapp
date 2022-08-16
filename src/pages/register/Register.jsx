import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./register.scss";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import FillingBottle from "react-cssfx-loading/lib/Messaging";
import { signup } from "../../redux/actions/auth";
import { useEffect } from "react";


export default function Register() {
  const [loading, setLoading] = useState(false);
  const [nextInput, setNextInput] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
    username: ""
  });

  const { user } = useSelector(state => state.signUpState)

  const history = useHistory();

  const handleStart = (e) => {
    e.preventDefault();
    setNextInput(false)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if(user.isAdmin === false){
      setTimeout(() => history.push('/login'), 1000) 
    }
    return () => {
      setData({}); // This worked for me
    };
  }, [user])
  const dispatch = useDispatch();
  
  const handleFinish = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await dispatch(signup(data));
      if(res.status === 201){
        setTimeout(() => history.push('/login'), 1000) 
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
        </div>
      </div>
      <div className="container">
        <h1>Watchnow more entertainment...</h1>
        <h2>Watch anywhere. Watch anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {nextInput ? (
          <div className="gen">
          <div className="input">
            <input name='email' onChange={handleChange} placeholder="youremail@gmail.com" className="username_or_email" />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
          <p>Have an account?  <Link to="/login" style={{textDecoration:"none"}}><span className="sgn-clk">Sign In</span></Link></p>
          </div>
        ) : (
          <div className="genn">
            <form className="input">
              <input name='username' onChange={handleChange} placeholder="Firstname" className="user_name" />
              <input name='password' onChange={handleChange} type='password' placeholder="Password" className="password" />
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
