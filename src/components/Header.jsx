import React from "react";
import { BiCart } from "react-icons/bi";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex-1"></div> {/* Left spacer */}
        <div className="flex text-xl justify-center">
          <div className="flex gap-x-20">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Cart</p>
            <p className="cursor-pointer">About</p>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <BiCart size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
