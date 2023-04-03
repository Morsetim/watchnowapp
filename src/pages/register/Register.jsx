import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./register.scss";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import FillingBottle from "react-cssfx-loading/lib/Messaging";
import { signup } from "../../redux/actions/auth";
import { useEffect } from "react";


export default function Register() {
  const { user, errorMessage, tempStatus } = useSelector(state => state.signUpState)
  const [loading, setLoading] = useState(false);
  const [nextInput, setNextInput] = useState(true);
  const [existEmail, setExistEmail ] = useState(null)
  const [data, setData] = useState({
    email: "",
    password: "",
    username: ""
  });
  const dispatch = useDispatch();
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
    if(user?.status === 201 && tempStatus === 201){
      setLoading(false);
      setTimeout(() => history.push('/login'), 1000)
    }
    // eslint-disable-next-line 
  }, [user, tempStatus])

  useEffect(() => {
    if(errorMessage){
      setExistEmail(errorMessage)
      setLoading(false);
    }
  },[errorMessage])
  
  const handleFinish = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await dispatch(signup(data));
    } catch (err) { 
      console.log(err)
    }
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
        <p className="exist-email">{existEmail}</p>
        <p></p>
        {nextInput ? (
          <div className="gen">
          <div className="input">
            <input name='email' onChange={handleChange} placeholder="youremail@gmail.com" className="username_or_email" />
            <button className={data.email === ''? "registerButtonDisabled" : "registerButton"} onClick={handleStart} disabled={data.email === ''}>
              Get Started
            </button>
          </div>
          <p>Have an account?  <Link to="/login" style={{textDecoration:"none"}}><span className="sgn-clk">Sign In</span></Link></p>
          </div>
        ) : (
          <div className="genn">
            <form className="input">
              <input name='username' onChange={handleChange} placeholder="Username" className="user_name" />
              <input name='password' onChange={handleChange} type='password' placeholder="Password" className="password" />
              <button className={data.username === ''|| data.password === ''? "registerButtonDisabled":"registerButton"}
               disabled={data.username === ''|| data.password === ''}
               onClick={handleFinish} >
              {loading ? (<FillingBottle color="#ffffff" width="10px" height="10px" duration=".51s" />) : "Start"}
              </button>
            </form>
              <p>Have an account?  <Link to="/login" style={{textDecoration:"none"}}><span className="sgn-clk">Sign In</span></Link></p>
          </div>
        )}
      </div>
    </div>
  );
}
