import { TbBrandWechat } from "react-icons/tb"; // first

const { createContext, useState } = require("react");

export const AnyoData = createContext({});

const AnyoContext = ({ children }) => {
  const data = "sekar";
  const [buttonBg, setButtonBg] = useState("BB");
  const [postbuttonBg, setPostButtonBg] = useState(false);
  const headerData = [
    {
      id: 1,
      name: "Listener Chat",
      icon: <TbBrandWechat />,
    },
    {
      id: 2,
      name: "Expert Chat",
      icon: "RiWechatPayLine ",
    },
    {
      id: 3,
      name: "Session",
      icon: "RiWechatPayLine ",
    },
    {
      id: 4,
      name: "Circles",
      icon: "RiWechatLine ",
    },
    {
      id: 5,
      name: "Live",
      icon: "MdLiveTv ",
    },
  ];

  const postCategory = [
    {
      id: 1,
      title: "ALL POST",
    },
    {
      id: 2,
      title: "MODERATION REQUIRED",
    },
    {
      id: 3,
      title: "STARRED",
    },
    {
      id: 4,
      title: "FLAGGED",
    },
    {
      id: 5,
      title: "BLOCKED",
    },
  ];

  const post = [
    {
      id: 1,
      name: "sekar",
      text: "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius ducimus veritatis non rem, fugiat blanditiis totam? Tenetur sed recusandae, nemo doloribus similique, consectetur iure, voluptatem nesciunt quam animi quos",
      img: "image",
      likes: "26",
      date: "10s",
      comments: "6 comments",
      stared: "true",
      flagged: "true",
    },
    {
      id: 2,
      name: "riya",
      text: "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius ducimus veritatis non rem, fugiat blanditiis totam? Tenetur sed recusandae, nemo doloribus similique, consectetur iure, voluptatem nesciunt quam animi quos lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius ducimus veritatis non rem, fugiat blanditiis totam? Tenetur sed recusandae, nemo doloribus similique, consectetur iure, voluptatem nesciunt quam animi quos",
      img: "image",
      likes: "26",
      date: "10s",
      comments: "6 comments",
      stared: "true",
      flagged: "true",
    },
  ];
  return (
    <AnyoData.Provider
      value={{
        data,
        headerData,
        postCategory,
        post,
        buttonBg,
        setButtonBg,
        postbuttonBg,
        setPostButtonBg,
      }}
    >
      {children}
    </AnyoData.Provider>
  );
};

export default AnyoContext;
