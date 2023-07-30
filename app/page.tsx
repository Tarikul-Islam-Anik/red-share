"use client";

import Feeds from "@/components/home/feeds";
import LandingPage from "@/components/home/landing-page";
import { Navbar } from "@/components/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import { userInfo } from "os";
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
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </>
  }
  return (!user && !isLoading) &&
  <>
    <LandingPage />
  </>;
}
