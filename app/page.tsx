"use client";

import LandingPage from "@/components/home/landing-page";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Loader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default function Home() {
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      redirect("/feed");
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="grid place-content-center h-screen">
          <div className="flex space-x-2 items-center">
            <Loader /> <span>Loading...</span>
          </div>
        </div>
      </>
    );
  }
  return (
    !user &&
    !isLoading && (
      <div className="grid place-content-center h-screen">
        <LandingPage />
      </div>
    )
  );
}
