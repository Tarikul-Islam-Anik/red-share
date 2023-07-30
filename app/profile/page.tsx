import React from "react";
import { User } from "@/components/profile";
import HistoryList from "@/components/profile/history-list";
import { Navbar } from "@/components/shared";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="space-y-8">
        <User />
        <HistoryList />
      </div>
    </>
  );
};

export default Profile;
