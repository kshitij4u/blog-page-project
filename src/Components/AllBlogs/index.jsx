import React, { useState } from "react";
import "./style.css";
import Header from "../Common/Header";
import BlogList from "./BlogList";
import { blogData } from "../../Config/data";
import { Month } from "../Common/DateConverter";

const AllBlogs = () => {
  const [getMonth, setGetMonth] = useState("");
  const [getYear, setGetYear] = useState("");
  const [allBlogs, setAllBlogs] = useState(blogData);

  const key = "date";
  const arrayUniqueByKey = [
    ...new Map(blogData.map((item) => [item[key], item])).values(),
  ];
  // console.log(arrayUniqueByKey);

  const getMonthHandler = (e) => {
    const month = e.target.value;
    setGetMonth(month);
  };

  const getYearHandler = (e) => {
    const year = e.target.value;
    setGetYear(year);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (getMonth === "" && getMonth === "") {
      alert("Please enter Month & Year");
      return setAllBlogs(allBlogs);
    }
    const allBlogList = blogData;
    const filterBlog = allBlogList.filter((blog) => {
      const newDate = blog.date.split("-");
      switch (newDate[1]) {
        case "01":
          newDate[1] = "Jan";
          break;
        case "02":
          newDate[1] = "Feb";
          break;
        case "03":
          newDate[1] = "Mar";
          break;
        case "04":
          newDate[1] = "Apr";
          break;
        case "05":
          newDate[1] = "May";
          break;
        case "06":
          newDate[1] = "Jun";
          break;
        case "07":
          newDate[1] = "Jul";
          break;
        case "08":
          newDate[1] = "Aug";
          break;
        case "09":
          newDate[1] = "Sep";
          break;
        case "10":
          newDate[1] = "Oct";
          break;
        case "11":
          newDate[1] = "Nov";
          break;
        case "12":
          newDate[1] = "Dec";
          break;
        default:
          newDate[1] = "Null";
      }

      if (newDate[0] === getYear && newDate[1] === getMonth) {
        return blog;
      }
    });
    return setAllBlogs(filterBlog);
  };

  return (
    <div>
      <Header />
      {/* <SearchBar /> */}
      <div className="searchBar-container">
        <div className="searchBar-wrap">
          <form onSubmit={formSubmitHandler}>
            <label htmlFor="year" className="searchBar-label">
              Year {}
            </label>
            <select
              name="year"
              className="searchBar-select"
              onChange={(e) => getYearHandler(e)}
            >
              <option value="select-year">-- Select year --</option>
              {arrayUniqueByKey.map((blogs, id) => {
                const date = blogs.date.split("-");
                let year = date[0];
                return (
                  <option key={id} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            <label htmlFor="month" className="searchBar-label">
              Month
            </label>
            <select
              name="month"
              className="searchBar-select"
              onChange={(e) => getMonthHandler(e)}
            >
              <option value="select-month">-- Select month --</option>
              {arrayUniqueByKey.map((blogs, id) => {
                const monthFunRes = Month(blogs.date);
                return (
                  <option key={id} value={monthFunRes.month}>
                    {monthFunRes.month}
                  </option>
                );
              })}
            </select>
            <button className="searchBar-button">Submit</button>
          </form>
        </div>
      </div>
      {allBlogs.map((blogList) => {
        return <BlogList blogList={blogList} key={blogList.id} />;
      })}
    </div>
  );
};
export default AllBlogs;
