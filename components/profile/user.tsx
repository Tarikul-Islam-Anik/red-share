import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { UserProfile } from "@auth0/nextjs-auth0/client";

const User = ({user, isLoading}:{user?: UserProfile, isLoading: boolean}) => {
  const { name, picture } = user || {};
  console.log(user);
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>
              Lives in Dhaka, Bangladesh.
            </CardDescription>
          </div>
          <div>
            <a href="/api/auth/logout">
              <Button className="bg-red-500" disabled={isLoading}>Logout</Button>
            </a>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Avatar className="w-48 h-48 ring-4 ring-gray-100">
          <AvatarImage src={picture || undefined} />
          <AvatarFallback className="text-4xl">JD</AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge variant="secondary">Blood Group: 0(+ve)</Badge>
        {/* <Button>Call now</Button> */}
      </CardFooter>
    </Card>
  );
};

export default User;
