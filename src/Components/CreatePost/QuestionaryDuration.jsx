import React from "react";
import { BiDownArrow } from "react-icons/bi";

const QuestionaryDuration = () => {
  return (
    <div className="ml-4 mt-3 w-[70%] space-y-2">
      <div className=" flex justify-between items-center text-indigo-900 ">
        <div className="font-semibold">Questionary Duration</div>
      </div>
      <div className="flex items-center  bg-white  rounded-full p-1">
        <input
          type="text"
          name=""
          id=""
          className="w-full h-9 rounded-full"
          placeholder=" 1 day"
        />
        <BiDownArrow />
      </div>
    </div>
  );
};

export default QuestionaryDuration;
