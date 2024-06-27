import React from "react";

const ParentHeader = () => {
  return (
    <div className="flex justify-between ml-10 mr-48 ">
      <div className="flex space-x-2">
        <div>
          <img
            src="image.jpg"
            alt="userProfile"
            className=" h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="text-indigo-950">
          <div className="font-semibold">Parenting</div>
          <div className="text-xs">10k Threads</div>
        </div>
      </div>
      <div className=" h-fit bg-indigo-950 text-white p-2 rounded-2xl">
        <button> Create Post</button>
      </div>
    </div>
  );
};

export default ParentHeader;
