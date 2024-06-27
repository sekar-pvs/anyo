import React from "react";
import UserCard from "./UserCard";
import CreatePost from "./CreatePost";

const MainCreatePost = () => {
  return (
    <div className="flex justify-around mt-3 ">
      {/*  left  */}
      <div className=" w-[50%] ">
        <UserCard />
      </div>
      {/* right */}
      {/* <YourPost /> */}

      <CreatePost />
    </div>
  );
};

export default MainCreatePost;
