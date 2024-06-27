import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import MainCreatePost from "./Components/MainCreatePost";
import MainYourPost from "./Components/MainYourPost.jsx";

const App = () => {
  return (
    <div className="h-fit ">
      <Header />
      <Routes>
        <Route path="/" element={<MainCreatePost />} />
        <Route path="/post" element={<MainYourPost />} />
      </Routes>
    </div>
  );
};

export default App;
