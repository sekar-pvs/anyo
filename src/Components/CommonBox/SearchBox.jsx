import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div className="border-2 flex justify-between w-96 items-center rounded-2xl mt-4 ml-9 h-9">
      <div className="w-full">
        <input
          className="text-xm w-full rounded-xl"
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
