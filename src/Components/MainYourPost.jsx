import React from "react";
import UserCard from "./UserCard";
import YourPost from "./YourPost";

const MainYourPost = () => {
  return (
    <div className="flex justify-around mt-3 ">
      {/*  left  */}
      <div className=" w-[50%] ">
        <UserCard />
      </div>
      {/* right */}
      <YourPost />

      {/*  <CreatePost /> */}
    </div>
  );
};

export default MainYourPost;
