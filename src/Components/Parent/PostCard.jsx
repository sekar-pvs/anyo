import React, { useContext } from "react";
import { AnyoData } from "../../Context/AnyoContext";
import { BiFlag, BiHeart, BiMenu, BiStar } from "react-icons/bi";
import { RiWechatPayLine } from "react-icons/ri";

const PostCard = () => {
  const { post } = useContext(AnyoData);
  console.log(post);
  return (
    <div className="">
      {post.map((data) => {
        return (
          <div
            key={data.id}
            className="bg-white w-96  m-5 p-2 border-2 border-red-200 rounded-xl"
          >
            <div className=" flex justify-between items-center m-2">
              <div className="border-2 bg-red-200 p-1 rounded-xl text-indigo-950 font-semibold">
                {" "}
                Parenting
              </div>
              <div className="flex space-x-2">
                <BiFlag /> <BiStar /> <BiMenu />
              </div>
            </div>
            <div className=" flex items-center justify-between ">
              <div className="flex space-x-2 items-center">
                <div className="p-2">
                  <img
                    src={`${data.img}.jpg`}
                    alt=""
                    className=" h-10 w-10 rounded-full object-cover"
                  />
                </div>{" "}
                <div> {data.name}</div>
              </div>
              <div className="text-xs">{data.date}</div>
            </div>
            <div className="text-balance text-sm">{data.text}</div>
            <div className="flex justify-between items-center p-2">
              <div className="flex space-x-2 items-center">
                <BiHeart /> {data.likes}
              </div>
              <div>{data.comments}</div>
            </div>
            <div className="flex justify-around ">
              <div>
                <BiHeart size={30} />
              </div>
              <div>
                <RiWechatPayLine size={30} />
              </div>
              <div>view all post by users</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
