"use client";

import Feeds from "@/components/home/feeds";
import { Navbar } from "@/components/shared";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user } = useUser();

  return user &&
    <>
    <Navbar />
    <Feeds />
  </>;
}
