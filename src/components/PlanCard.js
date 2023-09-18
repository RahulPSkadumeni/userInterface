import { Mail, MoveRight, Play, UploadCloud, User2 } from "lucide-react";
import React from "react";

const PlanCard = ({ plan }) => {
  console.log("whbhedhfda", plan);
  return (
    <div className="shadow-xl flex-auto  md:w-48 p-3 m-5 sm:mr-2 py-5 text-start rounded-2xl transform transition-transform hover:scale-105 hover:bg-sky-200">
      <h1 className="font-semibold text-2xl">{plan.name}</h1>
      <p className="line-through">{plan.price}</p>
      <h1>{plan.offerPrice}</h1>
      <button className={`flex px-4 p-1 rounded-lg bg-${plan.button_color}`}>
        Get Started <MoveRight className="pl-1" />
      </button>
      <div className="border-b-2 text-black my-5"></div>
      what you will get:
      <ul>
        <li className="flex my-2">
          <User2 className="mr-2" />
          {plan.benefits[0].users}
        </li>
        <li className="flex my-2">
          <UploadCloud className="mr-2" /> {plan.benefits[0].email}
        </li>
        <li className="flex my-2">
          <Mail className="mr-2" /> {plan.benefits[0].support}
        </li>
      </ul>
      <div></div>
      <h1 className="underline flex justify-center font-semibold cursor-pointer">
        EXPLORE FEATURES <Play className="ml-1 text-yellow-500" />
      </h1>
    </div>
  );
};

export default PlanCard;
