import React from "react";
//import { AnyoData } from "./Context/AnyoContext";

import Header from "./Components/Header";
import UserCard from "./Components/UserCard";

import YourPost from "./Components/YourPost";
import CreatePost from "./Components/CreatePost";

const App = () => {
  return (
    <div className="h-screen ">
      <Header />
      <div className="flex justify-around mt-10 ">
        {/*  left  */}
        <div className=" w-[50%] ">
          <UserCard />
        </div>
        {/* right */}
        <CreatePost />
      </div>
    </div>
  );
};

export default App;
