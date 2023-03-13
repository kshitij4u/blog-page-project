import React from "react";
import "./style.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Month } from "../../Common/DateConverter";

const BlogList = ({
  blogList: {
    id,
    title,
    description,
    location,
    date,
    image,
    isFeatured,
  },
}) => {
  let address = location.split(",");
  const monthFunRes = Month(date);
  return (
    <div className="blogList-container">
      <div className="blogList-wrap">
        <div>
          <img
            className="blogList-img"
            src={image}
            alt="Networking Introvert"
          />
        </div>
        <div className="blogList-text">
          <h5>{title}</h5>
          <AiOutlineCalendar className="blogList-calendar-icon" />
          <span className="blogList-date">{`${monthFunRes.month} ${monthFunRes.year}`}</span>
          <br />
          <CiLocationOn />
          <span className="blogList-location-1">{address[0]}</span>
          <br />
          <span className="blogList-location-2">{address[1]}</span>
          <button className="blogList-button">
            <Link className="blogList-link" to={`/exploreblog/${id}`}>
              Explore Events ➝
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
