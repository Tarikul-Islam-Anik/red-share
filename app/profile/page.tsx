'use client';

import React from "react";
import { User } from "@/components/profile";
import HistoryList from "@/components/profile/history-list";
import { Navbar } from "@/components/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ReloadIcon } from "@radix-ui/react-icons";

const Profile = () => {
  const { user, isLoading } = useUser() || {};
  if (isLoading) {
    return <>
      <div className="h-screen flex items-center">
        <ReloadIcon className="h-24 w-24 animate-spin mx-auto text-red-500" />
      </div>    
    </>
  }
  return (
    <>
      <Navbar />
      <div className="space-y-8">
        <User user={user} isLoading={isLoading} />
        <HistoryList />
      </div>
    </>
  );
};

export default Profile;
