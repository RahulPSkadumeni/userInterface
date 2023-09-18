import {
  Mail,
  MoveRight,
  Play,
  Ticket,
  UploadCloud,
  User2,
} from "lucide-react";
import React from "react";

const PlanCard2 = ({ plan }) => {
  return (
    <div className="  w-full  mt-5 p-2  mr-4 sm:flex  flex-col sm:flex-row shadow-2xl  text-start   rounded-2xl ">
      <div className=" p-3 ">
        <h1 className="font-semi-bold text-3xl">{plan.name}</h1>
        <p className="line-through">{plan.price}</p>
        <h1>{plan.offerPrice}</h1>
        <button
          className={` flex px-4 p-1 rounded-lg  bg-${plan.button_color}`}
        >
          Get Started <MoveRight className="pl-1 " />
        </button>
      </div>
      <div className="w-1/2  mx-1">
        what you will get:
        <ul>
          <li className="flex my-2 ">
            <User2 className="mr-2" /> {plan.benefits[0].users}
          </li>
          <li className="flex my-2">
            {plan.benefits[0]?.email ? (
              <>
                {plan.benefits[0]?.email && <UploadCloud className="mr-2" />}{" "}
                {plan.benefits[0]?.email}{" "}
              </>
            ) : null}
          </li>
          <li className="flex my-2">
            <Mail className="mr-2" />
            {plan.benefits[0].support}
          </li>
          <li className="flex my-2">
            <Ticket className="mr-2" />
            {plan.benefits[0].others}
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
