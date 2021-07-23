import React from "react";
import Navbar from "../NavigationBar/Navbar";
import "../../css/style.css";
import "../../css/reset.css";

const Header = () => {
  return (
    <header class="masthead">
      <div class="overlay"></div>
      <nav className="navbar">
        <Navbar />
      </nav>
      <div class="clearfix"></div>

      <div class="page-heading">
        <div class="container">
          <h1 class="heading">Ocean Nguyen</h1>
          <span class="sub-heading">Enginner/Video Creator</span>
        </div>
      </div>
    </header>
  );
};

export default Header;