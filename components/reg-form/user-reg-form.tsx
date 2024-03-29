"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  InputWithLabel,
  RadioGroupWithLabel,
  SelectWithLabel,
} from "../shared";
import { useUser } from "@auth0/nextjs-auth0/client";
import { initialValueUserInfo } from "@/lib/initialValues";

interface UserRegFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegForm({ className, ...props }: UserRegFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDonor, setIsDonor] = React.useState<boolean>(false);
  const [userInfo, setUserInfo] = React.useState<object>(initialValueUserInfo);
  const { user } = useUser();
  const { name, email } = user || {};
  
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-5">
          <div className="grid gap-3">
            <InputWithLabel
              label="Full name"
              placeholder="Your name"
              type="text"
              autoCapitalize="true"
              autoCorrect="off"
              disabled={isLoading}
              value={name || ""}
              required
            />
            <InputWithLabel
              label="Phone"
              placeholder="01x-xxx-xxxx"
              type="tel"
              autoComplete="phone"
              disabled={isLoading}
              required
            />
            <InputWithLabel
              label="Email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <InputWithLabel
              label="Address"
              placeholder="Your current address"
              type="text"
              autoComplete="address"
              disabled={isLoading}
              required
            />
            <RadioGroupWithLabel
              label="Siging up as: "
              items={["Donor", "Recipient"]}
              onValueChange={(value) => setIsDonor(value === "Donor")}
              required
            />

            {isDonor && (
              <SelectWithLabel
                label="Blood Group"
                placeholder="Select Blood Group"
                values={[
                  "A (+ve)",
                  "A (-ve)",
                  "B (+ve)",
                  "B (-ve)",
                  "AB (+ve)",
                  "AB (-ve)",
                  "O (+ve)",
                  "O (-ve)",
                ]}
                required
              />
            )}
            <InputWithLabel type="file" label="Upload your photo" />
          </div>
          <Button disabled={isLoading} className="bg-red-500">
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
