import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import "./navbar.scss";
import { Link } from "react-router-dom";
import { Logout } from "../../redux/actions/auth";
import logoImage from "../../images/istockphoto-1322037170-170667a-removebg-preview.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const {signinState: {userLogin}} = useSelector(state => state);
  const history = useHistory();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout =() => {
     dispatch(Logout())
     history.push('/login')
  }
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={logoImage}
            alt="logoImage"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <p>Welcome! {userLogin?.username?.charAt(0).toUpperCase() + userLogin?.username?.slice(1)}</p>
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="img"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
