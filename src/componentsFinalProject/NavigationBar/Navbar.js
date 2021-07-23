import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import picture from "../../images/logo.png";
import HomePage from "../../pagesFinalProject/HomePage";
import AboutPage from "../../pagesFinalProject/AboutPage";
import PostsPage from "../../pagesFinalProject/PostsPage";
import LoginPage from "../../pagesFinalProject/LoginPage";

const Navbar = () => {
  return (
    <div className="container">
      <a href="/home" className="navbar-brand">
        <img src={picture} alt="" />
      </a>
      <div className="navbar-collapse">
        {/* <Router> */}
          <ul className="navbar-nav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <div class="search-bar clearfix">
              <form action="">
                <input
                  class="search-input"
                  type="text"
                  placeholder="Search..."
                  onfocus="this.value=''"
                />
                <button
                  class="btn-search"
                  type="submit"
                  onclick="handleSearch()"
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
                <span class="search-text"></span>
              </form>
            </div>
          </ul>

          {/* <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/posts" exact>
              <PostsPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Router> */}
      </div>
    </div>
  );
};

export default Navbar;