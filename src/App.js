import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import PostsPage from "./pages/PostsPage";
// import ProfilePage from "./pages/ProfilePage";
// import LoginPage from "./pages/LoginPage";
// import PostDetails from "./pages/PostDetails";

import { useState } from "react";
import HomePage from "./pagesFinalProject/HomePage";
import "./css/style.css";
import "./css/reset.css";
import AboutPage from "./pagesFinalProject/AboutPage";
import PostsPage from "./pagesFinalProject/PostsPage";
import LoginPage from "./pagesFinalProject/LoginPage";
import Header from "./componentsFinalProject/Header/Header";

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    token: null,
    userId: null,
  });

  return (
    // <Router>
    //   <div className="app"></div>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/posts">Posts</Link>
    //         </li>
    //         <li>
    //           <Link to="/profile">Profile</Link>
    //         </li>
    //         <li>
    //           <Link to="/login">Login</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/" exact>
    //         <HomePage />
    //       </Route>
    //       <Route path="/posts" exact>
    //         <PostsPage />
    //       </Route>
    //       <Route path="/posts/:id">
    //         <PostDetails />
    //       </Route>
    //       <Route
    //         path="/profile"
    //         render={() => {
    //           if (currentUser.userId === null) {
    //             return (
    //               <LoginPage
    //                 currentUser={currentUser}
    //                 setCurrentUser={setCurrentUser}
    //                 title="You need to login before using this page"
    //               />
    //             );
    //           } else {
    //             return <ProfilePage currentUser={currentUser} />;
    //           }
    //         }}
    //       ></Route>
    //       <Route path="/login">
    //         <LoginPage
    //           currentUser={currentUser}
    //           setCurrentUser={setCurrentUser}
    //         />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <div className="app">
      <Router>
        <Switch>
          <Route path="/home" component={HomePage}>
            <HomePage />
          </Route>
          <Route path="/about" component={AboutPage}>
            <AboutPage />
          </Route>
          <Route path="/posts" exact component={PostsPage}>
            <PostsPage />
          </Route>
          <Route path="/login" component={LoginPage}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;