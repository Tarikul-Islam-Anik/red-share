"use client";

import Feeds from "@/components/home/feeds";
import LandingPage from "@/components/home/landing-page";
import { Navbar } from "@/components/shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
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
        <div className="flex justify-center align bg-slate-500">
          <Image src={'https://cdn.auth0.com/blog/hello-auth0/loader.svg'} alt="Loading..." height={100} width={100} />
        </div>
      </>
  }
  return (!user && !isLoading) &&
  <>
    <LandingPage />
  </>;
}
