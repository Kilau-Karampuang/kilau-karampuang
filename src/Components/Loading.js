import { FiCommand } from "react-icons/fi";
import React from "react";

export default function Loading() {
  return (
    <div className="w-screen h-screen fixed flex flex-col justify-center items-center top-0 backdrop-blur-[5px] z-[999]">
      <FiCommand className="text-grey-dark text-2xl animate-spin" size={60} />
    </div>
  );
}
