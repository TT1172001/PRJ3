// import library
import React from "react";
import { Link } from "react-router-dom";
// import components
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header bg-light">
      <nav
        className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle"
      >
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Instagram-Clone
          </h1>
        </Link>

        {/* Search component */}
        <Search />

        {/* Menu component */}
        <Menu />
      </nav>
    </div>
  );
};

export default Header;
