import React from "react";

export const Backs = () => {
  return (
    <button className="relative inline-flex items-center justify-center p-4 px-6 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        Kembali
      </span>
      <span className="relative invisible">Button Text</span>
    </button>
  );
};
