import React from "react";
import ParentHeader from "./Parent/ParentHeader";
import SearchBox from "./CommonBox/SearchBox";
import PostCategory from "./Parent/PostCategory";
import Filter from "./Parent/Filter";
import PostCard from "./Parent/PostCard";

const ParentOrign = () => {
  return (
    <div className="w-[90%]  ">
      <ParentHeader />
      <div className="bg-slate-200">
        <div className="w-[80%]  ">
          <SearchBox />
          <PostCategory />
        </div>
        <hr className="mt-6 mb-5" />
        <Filter />
        <div className="">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default ParentOrign;
