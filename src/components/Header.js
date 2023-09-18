import React, { useState } from "react";

import { faAngleDown } from "react-icons/fa6";
import { logo, logo2 } from "../Constants/constants";
import {
  HelpCircle,
  LayoutDashboard,
  MessagesSquare,
  Power,
  Puzzle,
  Sprout,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <header className="w-full bg-blue-200 flex  justify-between items-center  ">
      <div className="flex   w-1/4 sm:w-56     relative bg-white items-center justify-center shadow-2xl">
        <img
          src={logo}
          alt="Company Logo"
          className="  h-16 p-2   transition-transform hover:scale-125 "
        />
      </div>

      <div className="flex">
        <div className="  flex  w-56 pl-3  bg-white items-center rounded-lg hover:bg-emerald-400  ">
          <img
            src={logo2}
            alt="Company Logo"
            className="w-6 h-6 bg-blue-300 rounded-full transition-transform hover:scale-105"
          />
          <button className=" flex   text-blue-500 hover:text-white px-3 py-2  ">
            Show Company Name
          </button>
        </div>
        <button className=" mx-1 p-1  bg-white items-center rounded-lg">
          <div className="mx-2 text-lg">V</div>
        </button>
        <button
          className="mx-1 p-1 bg-white items-center rounded-lg inline-block md:hidden "
          onClick={toggleModal}
        >
          <div className="mx-2 text-lg">=</div>
        </button>
      </div>
      {modalOpen && (
        <div className="absolute   top-[10%] right-10 w-50 items-center justify-center rounded-lg bg-sky-300 bg-opacity-80 z-50">
          <div className=" bg-gray-200 flex-col m-2 p-4 rounded shadow-lg">
            <div className="ml-2">
              <Link to="/">
                <div className="flex space-x-2  bg-sky-300 hover:bg-white cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-lg">
                  <LayoutDashboard className=" text-blue-500" />
                  <h1 className="my-1 font-semibold">Dash Board</h1>
                </div>
              </Link>
              <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-sm">
                <Sprout className=" text-blue-500 " />
                <h1 className="my-1 font-semibold">Perks</h1>
              </div>
              <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-sm">
                <Puzzle className=" text-blue-500" />
                <h1 className="my-1 font-semibold">Addons</h1>
              </div>
              <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-sm">
                <HelpCircle className=" text-blue-500" />
                <h1 className="my-1 font-semibold">FAQ</h1>
              </div>
              <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-sm">
                <MessagesSquare className=" text-blue-500" />
                <h1 className="my-1 font-semibold">Support</h1>
              </div>
              <div className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-sm">
                <Power className=" text-blue-500  " />
                <h1 className="my-1 font-semibold"> Logout</h1>
              </div>
              <div
                onClick={toggleModal}
                className="flex space-x-2  hover:bg-sky-300 cursor-pointer rounded-lg mr-5 mt-5 p-1 items-center shadow-sm"
              >
                <div className="text-blue-500">X</div>
                <h1 className="my-1 pl-3  font-semibold">Close</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
