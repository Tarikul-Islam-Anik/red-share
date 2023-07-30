import Image from "next/image";
import { Button } from "../ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

const LandingPage = () => {
  const { user, isLoading } = useUser();
  return (
    <div className="space-y-6 mt-6 px-2 ">
      <Image
        className="mx-auto"
        src="https://i.ibb.co/DRmPpTD/Red-Share-5.png"
        width={200}
        height={200}
        alt="Red Share Logo"
      />
      <div>
        <h1 className="text-4xl leading-relaxed  text-center font-bold">
          Welcome to
          <span className="text-red-500"> Red</span> Share!
        </h1>
        <p className="mx-auto mt-2 text-center">
          Red Share is the premier blood donation web app that connects donors
          with recipients in need. Join our online community to save lives
          through blood donation. Together, we can make a difference!
        </p>
      </div>
      <p className="text-lg font-medium text-center">
        Please login/signUp to use the app 👇
      </p>
      <div className="space-y-3 flex flex-col justify-center items-center">
        <a className="block" href="/api/auth/login">
          <Button className="w-48" disabled={isLoading}>
            Login
          </Button>
        </a>
        <a className="block" href="/api/auth/signup">
          <Button className="w-48" variant="secondary" disabled={isLoading}>
            Sign Up
          </Button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
