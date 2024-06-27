import React from "react";

const PostContent = () => {
  return (
    <div className="flex justify-start mt-5 ml-5">
      <div className="text-xs border-2 p-2 rounded-2xl text-indigo-950 font-semibold bg-red-200">
        1.Write Post{" "}
      </div>

      <div className="text-xs border-2 p-2 rounded-2xl text-indigo-950 font-semibold ml-10 ">
        2. Sub topics & Notification Details{" "}
      </div>
      <hr />
      <div className="text-xs border-2 p-2 rounded-2xl text-indigo-950 font-semibold ml-10  w-20 text-center ">
        3.Post
      </div>
    </div>
  );
};

export default PostContent;
