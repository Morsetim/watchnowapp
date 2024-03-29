import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {useSelector} from 'react-redux'

const App = () => {
  const {user} = useSelector(state => state.signinState);
  const { userLogin }= useSelector(state => state.signinState);
  const isAuthenticated =  localStorage.getItem("watch_now_token");


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user || isAuthenticated ? <Home /> : <Redirect to="/register" />}
        </Route>
        {/* <Route path="/register">{!user || status === 200 ? <Register /> : <Redirect to="/" />}</Route> */}
        {/* <Route path="/register"><Register /></Route>
        <Route path="/login"><Login /></Route> */}
        <Route path="/register">{!user ? <Register /> : <Redirect to="/" />}</Route>
        <Route path="/login">{user || userLogin ? <Redirect to="/" /> : <Login /> } </Route> 
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login /> } </Route> */}
        {/* <Route path="/login">{status === 200 ? <Redirect to="/" /> : <Login /> } </Route>  */}
        {isAuthenticated && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series"/>
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
         )} 
      </Switch>
    </Router>
  );
};

export default App;
