import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h2>
          <Link className="homeLink-tag-1" to="/">
            Blog
          </Link>
        </h2>
        <Link className="homeLink-tag-2" to={"/allblogs"}>
          All Blogs
        </Link>
      </div>
    </div>
  );
};

export default Header;
