import Link from "next/link";
import Image from "next/link";
import React from "react";
import {RxSketchLogo, RxDashboard, RxPerson, RxAvatar} from "react-icons/rx"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {FiSettings} from "react-icons/fi"


const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block hover:scale-105 ease-in duration-300">
                <RxSketchLogo size={20}/>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-100 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-purple-200 my-4 p-3 rounded-lg inline-block hover:scale-105 ease-in duration-300">
                <RxDashboard size={20}/>
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-purple-200 my-4 p-3 rounded-lg inline-block hover:scale-105 ease-in duration-300">
                <RxPerson size={20}/>
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-purple-200 my-4 p-3 rounded-lg inline-block hover:scale-105 ease-in duration-300">
                <HiOutlineShoppingBag size={25}/>
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-purple-200 my-4 p-3 rounded-lg inline-block hover:scale-105 ease-in duration-300">
                <FiSettings size={25}/>
            </div>
          </Link>
        </div>
        <Link href="/">
            <div className="bg-purple-800 text-white my-4 p-3 rounded-lg inline-block hover:scale-105 ease-in duration-300">
                <RxAvatar size={25}/>
            </div>
          </Link>
      </div>
      
      <main className="ml-20 w-full">{children}</main>
      
    </div>
  );
};

export default Sidebar;
