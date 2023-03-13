import React from "react";
import "./style.css";
import Header from "../Common/Header";
import Blog from "./Blogs";

const InitialPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Blog page */}
      <Blog />
    </div>
  );
};

export default InitialPage;
