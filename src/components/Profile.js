import React from "react";
import { userProfile } from "../Constants/constants";

const Profile = () => {
  return (
    <div className="w-full ">
      <img
        src={userProfile.profilePicture}
        alt="profilePicture "
        className=" rounded-full p-4"
      />
      <h1 className="text-lg font-bold">{userProfile.name}</h1>
      <p>{userProfile.email}</p>
    </div>
  );
};

export default Profile;
