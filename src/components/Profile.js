import React from "react";
import { userProfile } from "../Constants/constants";

const Profile = () => {
  return (
    <div className="w-full pb-5">
      <img
        src={userProfile.profilePicture}
        alt="profilePicture "
        className=" rounded-full p-4"
      />
      <h1 className="text-lg font-bold">{userProfile.name}</h1>
      <p1>{userProfile.email}</p1>
    </div>
  );
};

export default Profile;
