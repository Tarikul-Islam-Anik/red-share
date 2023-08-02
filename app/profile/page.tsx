import React from "react";
import { User } from "@/components/profile";
import HistoryList from "@/components/profile/history-list";

const Profile = () => {
  return (
    <div className="space-y-8">
      <User />
      <HistoryList />
    </div>
  );
};

export default Profile;
