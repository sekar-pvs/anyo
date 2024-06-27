import React from "react";
import CreatPostHeader from "./CreatePost/CreatPostHeader";
import PostContent from "./CreatePost/PostContent";
import WritePost from "./CreatePost/WritePost";

const CreatePost = () => {
  return (
    <div className="w-[50%]    ">
      <CreatPostHeader />
      <PostContent />
      <WritePost />
    </div>
  );
};

export default CreatePost;
