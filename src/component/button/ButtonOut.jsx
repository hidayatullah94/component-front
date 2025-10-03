import React from "react";

export const ButtonOut = () => {
  return (
    <button className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded hover:bg-white group">
      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
        Button Text
      </span>
    </button>
  );
};
