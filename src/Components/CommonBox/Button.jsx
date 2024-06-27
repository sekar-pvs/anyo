import React from "react";

const Button = ({ BtnName, onClick }) => {
  return (
    <div
      className={`w-full border-2 rounded-2xl text-center mt-5 ${
        onClick ? "bg-indigo-900 text-white" : "bg-white text-indigo-900"
      }`}
    >
      <button onClick={onClick} className="w-full">
        {BtnName}
      </button>
    </div>
  );
};

export default Button;
