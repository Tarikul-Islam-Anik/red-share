import { Metadata } from "next";
import Link from "next/link";
import { UserRegForm } from "@/components/reg-form/user-reg-form";

export const metadata: Metadata = {
  title: "Authentication - Blood Share",
  description: "Authentication page for Blood Share",
  keywords: ["blood", "share", "authentication", "login", "register"],
};

export default function Register() {

  return (
    <>
      <div className="h-screen grid max-w-none grid-cols-1">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Complete Registration
            </h1>
            <p className="text-sm text-muted-foreground">
              Complete all the fields below to complete your registration. 
            </p>
          </div>
          <UserRegForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
