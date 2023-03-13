import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./style.css";
import Header from "../Common/Header";
import { blogData } from "../../Config/data";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Month } from "../Common/DateConverter";

const ExploreBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogData.find((blog) => blog.id === id);
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  const monthFunRes = blog ? Month(blog.date) : Month("");

  return (
    <>
      <div className="exploreBlog-container-2">
        <Header />
        {blog ? (
          <div className="exploreBlog-container-1">
            <h1>{blog.title}</h1>

            <div className="exploreblog-wrap">
              <div className="exploreBlog-wrap-2">
                <div>
                  <img
                    src={blog.image}
                    alt="Networking for introvert"
                    className="exploreBlog-img"
                  />
                </div>
                <div>
                  <AiOutlineCalendar className="exploreBlog-calendar-icon" />
                  <br />
                  <span className="exploreBlog-date">
                    {monthFunRes.month} {monthFunRes.year}
                  </span>
                  <br />
                  <CiLocationOn className="exploreBlog-location-icon" />
                  <br />
                  <span className="exploreBlog-location">
                    {blog.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="exploreBlog-desc-div">
              <p className="exploreBlog-desc">{blog.description}</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default ExploreBlog;
