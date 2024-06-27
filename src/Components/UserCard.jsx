import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AnyoData } from "../Context/AnyoContext";

const UserCard = () => {
  const { postbuttonBg, setPostButtonBg, buttonBg, setButtonBg } =
    useContext(AnyoData);

  return (
    <div className="bg-red-200 h-[100%] ">
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
            <div className=" text-indigo-900 font-semibold ">Your Circles</div>
            <div className="">
              <div className="flex space-x-6 ">
                {" "}
                <div className="flex justify-center items-center text-sm">
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

            {/*  circle End */}

            <hr className="mt-5" />
            <hr className="mt-6" />
            {/*  create button */}
            <Link to="/">
              {" "}
              <div
                className={`w-full border-2 rounded-2xl text-center mt-5 p-1 ${
                  buttonBg !== "AA"
                    ? "bg-indigo-950 text-white  font-semibold text-sm"
                    : "bg-white text-indigo-900  font-semibold text-sm"
                }`}
              >
                {" "}
                <button
                  onClick={() => {
                    setButtonBg("BB");
                  }}
                  className="w-full"
                >
                  Create Post
                </button>
              </div>
            </Link>
            {/* your post button */}

            <Link to="/post">
              {" "}
              <div
                className={`w-full border-2 rounded-2xl text-center mt-5 p-1 ${
                  buttonBg !== "BB"
                    ? "bg-indigo-950 text-white  font-semibold text-sm"
                    : "bg-white text-indigo-900 font-semibold text-sm"
                }`}
              >
                {" "}
                <button
                  onClick={() => {
                    setButtonBg("AA");
                  }}
                  className="w-full"
                >
                  Your Post
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
