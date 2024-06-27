import React from "react";
import { BiPlus } from "react-icons/bi";

const QuestionComp = () => {
  return (
    <div className="ml-4 mt-3 w-[70%] space-y-2">
      <div className=" flex justify-between items-center text-indigo-900 ">
        <div className="font-semibold">Question</div>
        <div className=" border-2 border-indigo-900 p-2  rounded-full">
          <button className=" flex items-center space-x-2 gap-2 w-full ">
            {" "}
            <BiPlus /> Add Queston
          </button>
        </div>
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          className="w-full h-9 rounded-xl"
          placeholder="Enter Your Question"
        />
      </div>
    </div>
  );
};

export default QuestionComp;
