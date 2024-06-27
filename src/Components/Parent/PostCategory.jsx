import React, { useContext } from "react";
import { AnyoData } from "../../Context/AnyoContext";

const PostCategory = () => {
  const { postCategory } = useContext(AnyoData);
  return (
    <div className="flex space-x-3 text-sm font-semibold mt-5 ml-5 text-indigo-950 text-nowrap overflow-x-scroll ">
      {postCategory.map((data) => {
        return (
          <div key={data.id} className="border-2 p-1 rounded-xl bg-slate-300">
            {data.title}
          </div>
        );
      })}
    </div>
  );
};

export default PostCategory;
