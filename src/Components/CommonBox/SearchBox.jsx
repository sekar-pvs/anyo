import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div className="border-2 flex justify-between w-[85%] items-center  mt-4 ml-10 h-10 bg-white rounded-full  ">
      <div className="w-full ">
        <input
          className="text-xm w-full rounded-full"
          type="text"
          name=""
          id=""
          placeholder=" search post, user,sub topics"
        />
      </div>{" "}
      <BiSearch size={20} />
    </div>
  );
};

export default SearchBox;
