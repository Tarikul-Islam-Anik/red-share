"use client";

import Feeds from "@/components/home/feeds";
import { Navbar } from "@/components/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Home() {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <>
      <div className="h-screen flex items-center">
        <ReloadIcon className="h-24 w-24 animate-spin mx-auto text-red-500" />
      </div>    
    </>
  }
  return user &&
    <>
    <Navbar />
    <Feeds />
    
  </>;
}
