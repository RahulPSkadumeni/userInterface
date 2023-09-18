import React from "react";
import PlanCard2 from "./PlanCard2";
import { plan2 } from "../Constants/constants";

const SecondaryContainer = () => {
  return (
    <div className=" flex flex-col sm:flex-row  w-full flex-wrap space-x-4  ">
      <div className="w-full sm:flex justify-center  ">
        {plan2
          ? plan2.map((plan, index) => <PlanCard2 key={index} plan={plan} />)
          : null}
      </div>
    </div>
  );
};

export default SecondaryContainer;
