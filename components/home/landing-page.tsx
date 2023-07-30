import Image from "next/image";
import { Button } from "../ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

const LandingPage = () => {
    const { user, isLoading } = useUser();
    return (
        <div className="space-y-6 mt-6 px-2">
            <Image
                className="mx-auto"
                src="https://i.ibb.co/DRmPpTD/Red-Share-5.png"
                width={200}
                height={200}
                alt="Red Share Logo"
            />
            <div>
                <h1 className="text-4xl font-bold text-center">
                    Welcome to
                    <span className="text-red-500">
                        {" "}Red
                    </span> Share!
                </h1>
                <p className="text-justify mx-auto mt-2">
                    Red Share is the premier blood donation web app that connects donors with recipients in need. Join our online community to save lives through blood donation. Together, we can make a difference!
                </p>
            </div>
            <p className="text-lg font-medium text-center">
                Please login/signUp to use the app 👇
            </p>
            <div className="space-y-3">
                <a className="block" href="/api/auth/login">
                    <button
                        className="w-6/12 bg-red-100 border border-red-500 hover:bg-red-200 text-red-500 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
                        disabled={isLoading}
                    >
                        Login
                    </button>
                </a>
                <a className="block" href="/api/auth/signup">
                    <button
                        className="w-6/12 bg-gray-100 border border-gray-700 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
                        disabled={isLoading}
                    >
                        Sign Up
                    </button>
                </a>
            </div>
        </div>
    );
};

export default LandingPage;