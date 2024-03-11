import React from "react";
import Feeds from "./Feeds";
import Posts from "./Posts";
import Albums from "./Albums";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts";
export default function App15() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Posts</Link>
        <Routes>
            <Route path="/"  element={<Feeds/>}></Route>
            <Route path="/post" element={<Posts/>}></Route>
            {/* <Route path="/albums" element={<Albums/>}></Route>
            <Route path="/photos" element={<Photos/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}
