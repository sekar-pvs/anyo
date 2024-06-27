import React, { useState } from "react";
//import Button from "./CommonBox/Button";

const UserCard = () => {
  const [buttonBg, setButtonBg] = useState(false);
  const [postbuttonBg, setPostButtonBg] = useState(false);

  return (
    <div className="bg-red-200 h-screen  ">
      <div className="h-fit  w-[50%]   p-2  ">
        <div className="mt-10 bg-white p-4 rounded-2xl w-full ml-60">
          <div className="flex  items-center space-x-2  ">
            <div>
              <img
                src="image.jpg"
                alt="userProfile"
                className=" h-12 w-12 rounded-full object-cover"
              />
            </div>
            <div className="text-xl text-indigo-900 font-semibold"> Surbhi</div>
          </div>
          <hr className="mt-3" />

          {/*  YOUR CIRCLES */}
          <div>
            <div className=" text-indigo-900 font-semibold">Your Circles</div>
            <div className="">
              <div className="flex space-x-6 ">
                {" "}
                <div className="flex justify-center items-center">
                  <div>
                    <img
                      src="image.jpg"
                      alt="userProfile"
                      className=" h-12 w-12 rounded-full object-cover"
                    />
                    <div className="text-xs">Parenting</div>
                  </div>
                </div>
                <div className="flex item-center justify-center ">
                  <div className="mt-3 flex-col items-center ">
                    <img
                      src="image.jpg"
                      alt="userProfile"
                      className=" h-12 w-12 rounded-full object-cover ml-3 "
                    />
                    <div className=" text-xs ">
                      <div className="text-center">Exclusive</div>
                      <div className="text-xs">Womensclub</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <img
                      src="image.jpg"
                      alt="userProfile"
                      className=" h-12 w-12 rounded-full object-cover ml-2"
                    />
                    <div className="text-xs">RelationShip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  circle End */}

          <hr className="mt-3" />
          <hr className="mt-6" />
          {/*  create button */}
          <div
            className={`w-full border-2 rounded-2xl text-center mt-5 p-1 ${
              buttonBg ? "bg-indigo-900 text-white" : "bg-white text-indigo-900"
            }`}
          >
            <button
              onClick={() => {
                setButtonBg(!buttonBg);
              }}
              className="w-full"
            >
              Create Post
            </button>
          </div>
          {/* your post button */}

          <div
            className={`w-full border-2 rounded-2xl text-center mt-5 p-1 ${
              postbuttonBg
                ? "bg-indigo-900 text-white"
                : "bg-white text-indigo-900"
            }`}
          >
            <button
              onClick={() => {
                setPostButtonBg(!postbuttonBg);
              }}
              className="w-full"
            >
              Your Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;