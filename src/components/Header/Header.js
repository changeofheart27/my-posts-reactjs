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
    <header className={"masthead " + location}>
      <div className="overlay"></div>
      <nav className="navbar navbar-expand-lg">
        <Navbar />
      </nav>
      <div className="clearfix"></div>

      <div className="page-heading">
        <div className="container">
          {location === "home" ? (
            <>
              <h1 className="heading">Ocean Nguyen</h1>
              <span className="sub-heading">Enginner/Video Creator</span>
            </>
          ) : location === "about" ? (
            <>
              <h1 className="heading">About me</h1>
              <span className="sub-heading">This is what I do.</span>
            </>
          ) : (
            <>
              <h1 className="heading">Posts</h1>
              <span className="sub-heading">New posts every week.</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;