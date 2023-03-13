import React from "react";
import "./style.css";
import BlogItems from "../BlogItems";
import { blogData } from "../../../Config/data";

const Blog = () => {
  return (
    <div>
      {blogData.map((blogs) => {
        return <BlogItems blogs={blogs} key={blogs.id} />;
      })}
    </div>
  );
};
export default Blog;
