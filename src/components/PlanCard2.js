import { Mail, MoveRight, Play, UploadCloud, User2 } from "lucide-react";
import React from "react";

const PlanCard2 = () => {
  return (
    <div className=" flex shadow-xl  w-1/2 m-10 py-5 text-start px-5 rounded-2xl ">
      <div className=" w-1/2 mx-1">
        <h1 className="font-semi-bold text-3xl">Basic</h1>
        <p>$899.099/mo</p>
        <h1>$9.99/mo</h1>
        <button className="  flex px-4 p-1 rounded-lg bg-orange-200">
          Get Started <MoveRight className="pl-1 " />
        </button>
      </div>
      <div className="w-1/2  mx-1">
        what you will get:
        <ul>
          <li className="flex my-2 ">
            <User2 className="mr-2" /> 5GB of storage space
          </li>
          <li className="flex my-2">
            <UploadCloud className="mr-2" /> Unlimited users and projects
          </li>
          <li className="flex my-2">
            <Mail className="mr-2" /> Free SSL certificate
          </li>
        </ul>
        <div></div>
        <h1 className="underline flex justify-center font-semibold">
          EXPLORE FEATURES <Play className="ml-1 text-yellow-500" />
        </h1>
      </div>
    </div>
  );
};

export default PlanCard2;
