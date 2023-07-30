import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateID(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}

export function dateFormater(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return `${month} ${day}, ${year} at ${time}`;
}
