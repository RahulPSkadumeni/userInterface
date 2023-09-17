import {
  Clock4,
  Flame,
  HelpCircle,
  Home,
  LayoutDashboard,
  Library,
  MessagesSquare,
  Music2,
  Newspaper,
  Power,
  Puzzle,
  Radio,
  Sprout,
  ThumbsUp,
  Trophy,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Profile from "./Profile";

const Menu = () => {
  const isMenuOpen = useState(true);
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col w-[200px] shadow-2xl  m-1  md:w-2/12 h-screen">
      <div className="flex-grow ">
        <ul className=" ">
          <Link to="/">
            <div className="flex shadow-lg">
              <Profile />
            </div>
          </Link>
          <Link to="/">
            <div className="flex space-x-2  bg-sky-300 hover:bg-white cursor-pointer rounded-r-lg mr-5 mt-5 p-1 items-center shadow-lg">
              <LayoutDashboard className=" text-blue-500" />
              <h1 className="my-1 font-semibold">Dash Board</h1>
            </div>
          </Link>
          <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-r-lg mr-5 mt-5 p-1 items-center shadow-sm">
            <Sprout className=" text-blue-500 " />
            <h1 className="my-1 font-semibold">Perks</h1>
          </div>
          <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-r-lg mr-5 mt-5 p-1 items-center shadow-sm">
            <Puzzle className=" text-blue-500" />
            <h1 className="my-1 font-semibold">Addons</h1>
          </div>
          <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-r-lg mr-5 mt-5 p-1 items-center shadow-sm">
            <HelpCircle className=" text-blue-500" />
            <h1 className="my-1 font-semibold">FAQ</h1>
          </div>
          <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-r-lg mr-5 mt-5 p-1 items-center shadow-sm">
            <MessagesSquare className=" text-blue-500" />
            <h1 className="my-1 font-semibold">Support</h1>
          </div>
        </ul>
      </div>
      <div className=" flex m-2  font-semibold cursor-pointer">
        <Power className="mr-2 mb-12 text-blue-500  " /> Logout
      </div>
    </div>
  );
};

export default Menu;
