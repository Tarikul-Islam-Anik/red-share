import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Appbar } from "@/components/shared";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Share",
  description:
    "Welcome to Red Share, the premier blood donation web app that connects donors with recipients in need. Join our online community to save lives through blood donation. Together, we can make a difference!",
  keywords: [
    "blood donation",
    "donate blood online",
    "blood donor community",
    "life-saving",
    "blood bank",
    "online blood donation platform",
    "give blood",
    "blood drive",
    "save lives",
    "Red Share",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <main className="max-w-lg mx-auto relative bg-white flex flex-col min-h-screen">
            <Appbar />
            <div className="p-6">{children}</div>
            <Navbar />
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
