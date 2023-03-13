import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import InitialPage from "./Components/Home";
import ExploreBlog from "./Components/ExplorBlog";
import AllBlogs from "./Components/AllBlogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<InitialPage />} />
          <Route path="/exploreblog/:id" element={<ExploreBlog />} />
          <Route path="/allblogs/" element={<AllBlogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
