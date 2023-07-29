"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import RequestCard from "./request-card";
import { ScrollArea } from "@/components/ui/scroll-area";

let requests = [
  {
    title: "Urgent Blood Donation",
    description: "Looking for blood donors for a critical surgery.",
    urgency: true,
    bloodType: "AB+",
    bagQuantity: 3,
    location: "City Hospital",
    contactNumber: "123-456-7890",
    within: "3 hours",
    status: false,
    createdAt: "2023-07-28 10:00:00",
  },
  {
    title: "Blood Donors Needed",
    description: "Blood donation drive at the local community center.",
    urgency: false,
    bloodType: "O-",
    bagQuantity: 10,
    location: "Community Center",
    contactNumber: "987-654-3210",
    within: "24 hours",
    status: true,
    createdAt: "2023-07-28 14:30:00",
  },
  {
    title: "Emergency Blood Request",
    description: "Seeking blood donors for an accident victim.",
    urgency: true,
    bloodType: "A+",
    bagQuantity: 2,
    location: "General Hospital",
    contactNumber: "456-789-0123",
    within: "2 hours",
    status: false,
    createdAt: "2023-07-28 18:15:00",
  },
  {
    title: "Blood Donors for Cancer Patient",
    description: "A cancer patient needs blood transfusion support.",
    urgency: false,
    bloodType: "B+",
    bagQuantity: 5,
    location: "Oncology Center",
    contactNumber: "567-890-1234",
    within: "48 hours",
    status: true,
    createdAt: "2023-07-27 08:00:00",
  },
  {
    title: "Urgent Plasma Donation",
    description: "Looking for plasma donors for a COVID-19 patient.",
    urgency: true,
    bloodType: "AB-",
    bagQuantity: 1,
    location: "Red Cross Center",
    contactNumber: "789-012-3456",
    within: "6 hours",
    status: true,
    createdAt: "2023-07-26 22:45:00",
  },
  {
    title: "O+ Blood Donors Needed",
    description: "Urgently seeking O+ blood donors.",
    urgency: false,
    bloodType: "O+",
    bagQuantity: 4,
    location: "City Blood Bank",
    contactNumber: "111-222-3333",
    within: "4 hours",
    status: false,
    createdAt: "2023-07-29 09:30:00",
  },
  {
    title: "Emergency O+ Blood Request",
    description: "O+ blood required for a patient in critical condition.",
    urgency: true,
    bloodType: "O+",
    bagQuantity: 2,
    location: "Central Hospital",
    contactNumber: "444-555-6666",
    within: "2 hours",
    status: false,
    createdAt: "2023-07-29 14:00:00",
  },
];

const Feeds = () => {
  const [filter, setFilter] = useState(
    requests.filter((request) => request.bloodType === "O+")
  );

  return (
    <Tabs
      defaultValue="blood-group"
      className="space-y-6 w-[300px] sm:w-[350px] mx-auto"
      onValueChange={(value) => {
        if (value === "blood-group") {
          setFilter(requests.filter((request) => request.bloodType === "O+"));
        } else if (value === "urgent") {
          setFilter(requests.filter((request) => request.urgency));
        } else if (value === "show-all") {
          setFilter(requests);
        }
      }}
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="blood-group">O(+ve)</TabsTrigger>
        <TabsTrigger value="urgent">Urgent</TabsTrigger>
        <TabsTrigger value="show-all">Show all</TabsTrigger>
      </TabsList>

      <TabsContent value="blood-group">
        <ScrollArea className="h-[82vh] pr-4">
          {filter.map((request, index) => (
            <RequestCard className="my-4" key={index} {...request} />
          ))}
        </ScrollArea>
      </TabsContent>

      <TabsContent value="urgent">
        <ScrollArea className="h-[82vh] pr-4">
          {filter.map((request, index) => (
            <RequestCard className="my-4" key={index} {...request} />
          ))}
        </ScrollArea>
      </TabsContent>

      <TabsContent value="show-all">
        <ScrollArea className="h-[82vh] pr-4">
          {filter.map((request, index) => (
            <RequestCard className="my-4" key={index} {...request} />
          ))}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};

export default Feeds;
