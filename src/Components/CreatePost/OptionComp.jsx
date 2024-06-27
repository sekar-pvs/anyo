import React from "react";
import { BiPlus } from "react-icons/bi";

const OptionComp = () => {
  return (
    <div className="ml-4 mt-3 w-[70%] space-y-2">
      <div className=" flex justify-between items-center text-indigo-900 ">
        <div className="font-semibold">Options</div>
        <div className=" border-2 border-indigo-900 p-2  rounded-xl">
          <button className=" flex items-center space-x-2 gap-2 w-full ">
            {" "}
            <BiPlus /> Add Options
          </button>
        </div>
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          className="w-full h-9 rounded-xl"
          placeholder="Option 1"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          className="w-full h-9 rounded-xl"
          placeholder="Option 2"
        />
      </div>
    </div>
  );
};

export default OptionComp;
