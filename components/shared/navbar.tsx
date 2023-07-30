import React from "react";
import Link from "next/link";
import {
  DashboardIcon,
  PlusIcon,
  PersonIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Navigations = [
  {
    name: "Feeds",
    href: "/",
    icon: DashboardIcon,
  },
  {
    name: "Add request",
    href: "/add-request",
    icon: PlusIcon,
  },
  {
    name: "History",
    href: "/history",
    icon: CounterClockwiseClockIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: PersonIcon,
  },
];

const Navbar = () => {
  return (
    <TooltipProvider delayDuration={300}>
      <header className="px-2 py-4 border-t bottom-0 absolute w-full">
        <nav>
          <ul className="flex justify-around">
            {Navigations.map((nav, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <li>
                    <Link
                      href={nav.href}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "flex flex-col items-center"
                      )}
                    >
                      <nav.icon className="w-5 h-5" />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{nav.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </nav>
      </header>
    </TooltipProvider>
  );
};

export default Navbar;
