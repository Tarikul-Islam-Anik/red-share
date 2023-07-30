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
const User = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Lives in Dhaka, Bangladesh.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Avatar className="w-48 h-48 ring-4 ring-gray-100">
          <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
          <AvatarFallback className="text-4xl">JD</AvatarFallback>
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
