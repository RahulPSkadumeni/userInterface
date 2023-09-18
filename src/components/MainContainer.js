import React, { useState } from "react";
import Menu from "./Menu";
import PlanCard from "./PlanCard";
import SecondaryContainer from "./SecondaryContainer";
import { plans } from "../Constants/constants";
const MainContainer = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");
  console.log(plans);
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col w-screen">
      <div className="flex w-full">
        <Menu />
        <div className="ml-5 sm:ml-16 sm:mr-16 mt-4 w-full">
          <div className="flex justify-between">
            <h1 className="text-sm md:text-lg text-left font-semibold">
              Choose a plan that's just right for you!
            </h1>
            <div className="ml-5 sm:ml-0 mt-2 sm:mt-0 flex items-center border mr-5 rounded-full w-44 sm:h-10 bg-slate-100">
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

          <div className="flex justify-center flex-wrap space-x-4">
            {plans
              ? plans.map((plan, index) => <PlanCard key={index} plan={plan} />)
              : null}

            <SecondaryContainer />
          </div>

          <div>
            <h1 className="text-sky-500">
              * Some unique features are provided as add-ons with individual
              plans for each feature
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
// className = "";
// <Menu />
// <div className="ml-5 mt-5 w-1/4 md:w-10/12   ">
//   <div className=" sm:flex justify-between">
//     <h1 className="text-sm  md:text-lg text-left font-semibold  ">
//       Choose a plan that's just right for you!
//     </h1>
//     <div className=" ml-5 sm:ml-0 mt-2 sm:mt-0 flex items-center border mr-5 rounded-full w-44 sm:h-10  bg-slate-100  ">
//       <button
//         className={`${
//           selectedOption === "monthly" ? "bg-blue-500 text-white " : ""
//         } px-4 py-2 rounded-full`}
//         onClick={() => handleToggle("monthly")}
//       >
//         Monthly
//       </button>
//       <button
//         className={`${
//           selectedOption === "annually" ? "bg-blue-500 text-white" : ""
//         } px-4 py-2 rounded-full`}
//         onClick={() => handleToggle("annually")}
//       >
//         Annually
//       </button>
//     </div>
//   </div>

//   <div className="flex-col sm:flex-row flex  justify-between w-full  p-10 ">
//     <PlanCard />
//     <PlanCard />
//     <PlanCard />
//   </div>
//   <SecondaryContainer />
//   <div>
//     <h1 className="text-sky-500">
//       * Some unique features are provided as add-ons with individual plans
//       for each features
//     </h1>
//   </div>
// </div>
