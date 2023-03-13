import React from "react";
import "./style.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Month } from "../../Common/DateConverter";

const BlogItems = ({
  blogs: {
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
    <div>
      {isFeatured ? (
        <div className="blogItems-container">
          <div className="blogItems-wrap">
            <div>
              <img
                className="blogItems-img"
                src={image}
                alt="Networking Introvert"
              />
            </div>
            <div className="blogItems-text">
              <h5>{title}</h5>
              <AiOutlineCalendar className="blogItems-calendar-icon" />
              <span className="blogItems-date">{`${monthFunRes.month} ${monthFunRes.year}`}</span>
              <br />
              <CiLocationOn />
              <span className="blogItems-location-1">
                {address[0]}
              </span>
              <br />
              <span className="blogItems-location-2">
                {address[1]}
              </span>
              <button className="blogItems-button">
                <Link
                  to={`/exploreblog/${id}`}
                  className="blogItems-link"
                >
                  Explore Events ➝
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BlogItems;
