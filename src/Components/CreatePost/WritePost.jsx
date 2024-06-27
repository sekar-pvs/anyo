import React from "react";
import { BiImage, BiMenu, BiVideo } from "react-icons/bi";
import { CgPoll } from "react-icons/cg";

import QuestionComp from "./QuestionComp";
import OptionComp from "./OptionComp";
import QuestionaryDuration from "./QuestionaryDuration";
import Completion from "./Completion";
import CreateQuesBTN from "./CreateQuesBTN";
import NextBtn from "./NextBtn";

const WritePost = () => {
  return (
    <div className="w-[90%] bg-slate-100 p-2 mt-3  ">
      <div className="ml-4">
        <div className="text-indigo-950 font-semibold">
          Write Post <span className="text-red-600">*</span>
        </div>
        <div className="h-52 w-[70%] text-indigo-950 rounded-xl mt-1 ">
          <textarea
            name=""
            id=""
            className="h-full w-full rounded-xl "
            placeholder="Write Your Thoughts..."
          ></textarea>
        </div>
      </div>
      <div>
        <hr className=" w-[65%] ml-7" />
        <div className="flex ml-4 space-x-6  text-indigo-900 bg-white w-[68%] h-16  items-center p-2 rounded-b ">
          <BiImage size={30} />
          <BiVideo size={30} />
          <CgPoll size={30} />
          <BiMenu size={30} />
        </div>
      </div>

      {/* Question 1 */}
      <QuestionComp />
      <OptionComp />
      <QuestionaryDuration />
      <Completion />
      <CreateQuesBTN />
      <NextBtn />
    </div>
  );
};

export default WritePost;
