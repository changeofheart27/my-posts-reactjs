import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import PostEditPage from "./pages/PostEditPage";
import AdminStatisticPage from "./pages/AdminStatisticPage";
import Logout from "./components/Logout/Logout";

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    token: localStorage.getItem("token") ?? ""
  });

  console.log("Token: " + localStorage.getItem("token"));

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage currentUser={currentUser} />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/posts" exact>
            <PostsPage currentUser={currentUser} />
          </Route>
          <Route
            path="/post/postdetails/:id"
            render={() => {
              if (currentUser.token.length === 0) {
                return (
                  <LoginPage
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    message="Please login to continue"
                  />
                );
              } else {
                return <PostDetailsPage currentUser={currentUser} />;
              }
            }}
          ></Route>
          <Route
            path="/post/postedit/:id"
            render={() => {
              if (currentUser.token.length === 0) {
                return (
                  <LoginPage
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    message="Please login to continue"
                  />
                );
              } else {
                return <PostEditPage currentUser={currentUser} />;
              }
            }}
          ></Route>
          <Route
            path="/login"
            // render={() => {
            //   if (currentUser.token.length === 0) {
            //     return (
            //       <LoginPage
            //         currentUser={currentUser}
            //         setCurrentUser={setCurrentUser}
            //       />
            //     );
            //   }
            // }}
          >
            <LoginPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route
            path="/logout"
            // render={() => {
            //   return (
            //     <LoginPage
            //       currentUser={currentUser}
            //       setCurrentUser={setCurrentUser}
            //       title="You have been signed out"
            //     />
            //   );
            // }}
          >
            <Logout
              currentUser={currentUser}
              title="You have been signed out"
            />
          </Route>
          <Route path="/admin/statistic">
            <AdminStatisticPage currentUser={currentUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;