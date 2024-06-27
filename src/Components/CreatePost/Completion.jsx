import React from "react";

const Completion = () => {
  return (
    <div className="ml-4 mt-3 w-[70%] space-y-2">
      <div className=" flex justify-between items-center text-indigo-900 ">
        <div className="font-semibold">Completion</div>
      </div>
      <div className="h-28  text-indigo-950 rounded-t mt-1 ">
        <textarea
          name=""
          id=""
          className="h-full w-full "
          placeholder="Write a message that will be shown to user after they complete the questionary"
        ></textarea>
      </div>
    </div>
  );
};

export default Completion;
