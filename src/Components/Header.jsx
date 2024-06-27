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
    <div className="flex justify-around items-center">
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
            <TbBrandWechat size={40} className="text-center" />
          </div>
          <div>Listener Chat</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            {/* <RiWechatPayLine /> */} <RiWechatPayLine size={40} />
          </div>
          <div>Expert Chat</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            {/* <RiWechatLine /> */} <TbBrandWechat size={40} />
          </div>
          <div>Session</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            <RiWechatLine size={40} /> {/* <TbBrandWechat  /> */}
          </div>
          <div>Circles</div>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            <MdLiveTv size={40} />
          </div>
          <div className="text-center">Live</div>
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
