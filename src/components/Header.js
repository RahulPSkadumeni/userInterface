import React, { useState } from "react";

import { faAngleDown } from "react-icons/fa6";
import { logo, logo2 } from "../Constants/constants";
import { Power } from "lucide-react";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <header className="w-full bg-blue-200  flex justify-between items-center">
      <div className="flex  w-1/2 sm:w-2/12  bg-white ">
        <img src={logo} alt="Company Logo" className=" w-14  " />
      </div>
      <div className="flex">
        <div className="  flex  w-56 pl-2  bg-white items-center rounded-lg">
          <img
            src={logo2}
            alt="Company Logo"
            className="w-6 h-6 bg-blue-300 rounded-full"
          />
          <button
            className=" flex   text-blue-500 px-3 py-2 "
            onClick={toggleModal}
          >
            Show Company Name
          </button>
        </div>
        <button
          className=" mx-1 p-1  bg-white items-center rounded-lg"
          onClick={toggleModal}
        >
          <div className="mx-2 text-lg">V</div>
        </button>
      </div>
      {modalOpen && (
        <div className="absolute   top-[10%] right-10 w-50 items-center justify-center rounded-lg bg-black bg-opacity-40 z-50">
          <div className=" bg-gray-200 flex-col p-4 rounded shadow-lg">
            <div>
              <div className=" flex m-1 p-1  bg-white items-center rounded-lg">
                <div className=" flex m-2 " onClick={toggleModal}>
                  <Power className="mr-2  text-blue-500" /> Logout
                </div>
              </div>
            </div>
            <div className="m-1 p-1  bg-white rounded-lg" onClick={toggleModal}>
              X
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
