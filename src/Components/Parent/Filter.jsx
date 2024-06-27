import React from "react";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="flex justify-between items-center m-3">
      <div className="flex items-center space-x-2">
        <FaFilter /> <div>Filter</div>
      </div>
      <div className="flex  space-x-2">
        <div>Sort by</div>
        <div className="border-2 p-1 w-16 rounded-2xl text-center text-xs">
          Date
        </div>
      </div>
    </div>
  );
};

export default Filter;
