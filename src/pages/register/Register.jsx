// src/pages/register/Register.jsx
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/auth";
import "./register.scss";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";
import FillingBottle from "react-cssfx-loading/lib/Messaging";

export default function Register() {
  const [nextInput, setNextInput] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
    username: ""
  });
  const history = useHistory();

  const { mutate, isPending, error } = useMutation({ 
    mutationFn: registerUser,
    onSuccess: (data) => {
      // console.log(data, "thus is reg")
      // if (data.status === 201) {
        history.push('/login');
      // }
    }
  });

  const handleStart = (e) => {
    e.preventDefault(); 
    setNextInput(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFinish = async (e) => {
    e.preventDefault();
    mutate(data);
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
        {error && <p className="exist-email">{error.message}</p>}
        
        {nextInput ? (
          <div className="gen">
            <div className="input">
              <input 
                name='email' 
                onChange={handleChange} 
                placeholder="youremail@gmail.com" 
                className="username_or_email" 
              />
              <button 
                className={data.email === '' ? "registerButtonDisabled" : "registerButton"} 
                onClick={handleStart} 
                disabled={data.email === ''}
              >
                Get Started
              </button>
            </div>
            <p>Have an account? <Link to="/login" style={{textDecoration:"none"}}><span className="sgn-clk">Sign In</span></Link></p>
          </div>
        ) : (
          <div className="genn">
            <form className="input">
              <input 
                name='username' 
                onChange={handleChange} 
                placeholder="Username" 
                className="user_name" 
              />
              <input 
                name='password' 
                onChange={handleChange} 
                type='password' 
                placeholder="Password" 
                className="password" 
              />
              <button 
                className={data.username === '' || data.password.length < 4 ? "registerButtonDisabled" : "registerButton"}
                disabled={data.username === '' || data.password.length < 4 || isPending}
                onClick={handleFinish}
              >
                {isPending ? (
                  <FillingBottle color="#ffffff" width="10px" height="10px" duration=".51s" />
                ) : "Start"}
              </button>
            </form>
            <p>Have an account? <Link to="/login" style={{textDecoration:"none"}}><span className="sgn-clk">Sign In</span></Link></p>
          </div>
        )}
      </div>
    </div>
  );
}