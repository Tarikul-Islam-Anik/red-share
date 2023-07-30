"use client";

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
import { useUser } from "@auth0/nextjs-auth0/client";

const getInitials = (firstName: string, lastName: string) => {
  const first = firstName ? firstName.charAt(0).toUpperCase() : "";
  const last = lastName ? lastName.charAt(0).toUpperCase() : "";
  return `${first}${last}`;
};

const User = () => {
  const { user, isLoading } = useUser();

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>{user?.given_name}</CardTitle>
            <CardDescription>Lives in Dhaka, Bangladesh.</CardDescription>
          </div>
          <div>
            <a href="/api/auth/logout">
              <Button variant="destructive" disabled={isLoading}>
                Logout
              </Button>
            </a>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Avatar className="w-48 h-48 ring-4 ring-gray-100">
          <AvatarImage src={user?.picture} />
          <AvatarFallback className="text-4xl">
            {user?.family_name}
          </AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge variant="secondary">Blood Group: 0(+ve)</Badge>
        <Button>Call now</Button>
      </CardFooter>
    </Card>
  );
};

export default User;
