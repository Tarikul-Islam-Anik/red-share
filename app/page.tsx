"use client";

import LandingPage from "@/components/home/landing-page";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const { user, isLoading } = useUser();

  useEffect(() => {
      if(user) {
        redirect('/feed');
      }
  }, [user])
  if (isLoading) {
    return <>
      <div className="h-screen flex items-center">
        <ReloadIcon className="h-24 w-24 animate-spin mx-auto text-red-500" />
      </div>    
    </>
  }
  return (!user && !isLoading) &&
  <>
    <LandingPage />
  </>;
}
