import { Mail, MoveRight, Play, UploadCloud, User2 } from "lucide-react";
import React from "react";

const PlanCard = () => {
  return (
    <div className="shadow-xl  w-1/3 mx-10 py-5 text-start px-5 rounded-2xl ">
      <h1 className="font-semi-bold text-3xl">Basic</h1>
      <p>$899.099/mo</p>
      <h1>$9.99/mo</h1>
      <button className="  flex px-4 p-1 rounded-lg bg-orange-200">
        Get Started <MoveRight className="pl-1 " />
      </button>
      <div className="border-b-2 text-black my-5 "></div>
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
  );
};

export default PlanCard;
