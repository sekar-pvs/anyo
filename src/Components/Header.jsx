import React, { useContext } from "react";
//import { RiWechatPayLine } from "react-icons/pi"; //sess
import { MdLiveTv } from "react-icons/md"; //live
import { TbBrandWechat } from "react-icons/tb"; // first
import { RiWechatPayLine } from "react-icons/ri"; //ex
import { RiWechatLine } from "react-icons/ri";
import { AnyoData } from "../Context/AnyoContext";

const Header = () => {
  const { headerData } = useContext(AnyoData);
  console.log(headerData);
  return (
    <div className="flex justify-around items-center mt-5">
      {/*  {headerData.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{`<${data.icon}/>`}</div>
          </div>
        );
      })} */}
      <div className="flex justify-center items-center space-x-10">
        <div>
          <div className="flex items-center justify-center ">
            <TbBrandWechat size={30} className="text-center" />
          </div>
          <div className="text-sm">Listener Chat</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            {/* <RiWechatPayLine /> */} <RiWechatPayLine size={30} />
          </div>
          <div className="text-sm">Expert Chat</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            {/* <RiWechatLine /> */} <TbBrandWechat size={30} />
          </div>
          <div className="text-sm">Session</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            <RiWechatLine size={30} /> {/* <TbBrandWechat  /> */}
          </div>
          <div className="text-sm">Circles</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            <MdLiveTv size={30} />
          </div>
          <div className="text-center text-sm">Live</div>
        </div>
      </div>
      <div>
        <div className=" flex space-x-5 items-center">
          <div className=" text-indigo-900 font-semibold">Expert App</div>
          <div className=" border-2 p-2 text-indigo-900 w-fit rounded-xl">
            {" "}
            username{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
