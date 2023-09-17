import React, { useState } from "react";
import Menu from "./Menu";
import PlanCard from "./PlanCard";
import SecondaryContainer from "./SecondaryContainer";
const MainContainer = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex  ">
      <Menu />
      <div className="ml-10 mt-5 w-full  ">
        <div className="flex justify-between">
          <h1 className="text-lg text-left font-semibold  ml-10">
            Choose a plan that's just right for you!
          </h1>
          <div className="flex items-center border mr-5 rounded-full bg-slate-100  ">
            <button
              className={`${
                selectedOption === "monthly" ? "bg-blue-500 text-white" : ""
              } px-4 py-2 rounded-full`}
              onClick={() => handleToggle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`${
                selectedOption === "annually" ? "bg-blue-500 text-white" : ""
              } px-4 py-2 rounded-full`}
              onClick={() => handleToggle("annually")}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="flex justify-between  ">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
        <SecondaryContainer />
        <div>
          <h1 className="text-sky-500">
            * Some unique features are provided as add-ons with individual plans
            for each features
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
