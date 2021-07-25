import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import picture from '../../images/logo.png';

const Navbar = () => {
  return (
    <div className="container d-flex">
      <div className="flex-grow-1">
        <a href="/home" className="navbar-brand">
          <img src="https://duongnd2016.gitlab.io/img/ocean_logo.png" alt="" />
        </a>
      </div>

      <div className="navbar-collapse flex-grow-0">
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
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
