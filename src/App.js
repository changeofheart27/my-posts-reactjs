import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import LoginFormPage from "./pages/LoginFormPage";
import { useState } from "react";
import CurrentUserContext from "./context/currentUserContext";

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    token: null,
    userId: null,
  });

    return (
      <Router>
        <CurrentUserContext.Provider value={
          {currentUser: currentUser, 
          setCurrentUser: setCurrentUser}
        } />
        <div className="app"></div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/posts">
              <PostsPage/>
            </Route>
            <Route path="/profile">
              <ProfilePage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>
            <Route path="/login">
              <LoginPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
};

export default App;