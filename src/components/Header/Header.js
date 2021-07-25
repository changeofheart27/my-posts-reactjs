import React from "react";
import Navbar from "../NavigationBar/Navbar";
import "../../css/style.css";
import "../../css/reset.css";
import { useLocation } from "react-router";

const Header = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  //console.log(location);

  return (
    <header class={"masthead " + location}>
      <div class="overlay"></div>
      <nav className="navbar navbar-expand-lg">
        <Navbar />
      </nav>
      <div class="clearfix"></div>

      <div class="page-heading">
        <div class="container">
          {location === "home" ? (
            <>
              <h1 class="heading">Ocean Nguyen</h1>
              <span class="sub-heading">Enginner/Video Creator</span>
            </>
          ) : location === "about" ? (
            <>
              <h1 class="heading">About me</h1>
              <span class="sub-heading">This is what I do.</span>
            </>
          ) : (
            <>
              <h1 class="heading">Posts</h1>
              <span class="sub-heading">New posts every week.</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;