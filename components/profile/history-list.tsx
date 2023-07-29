import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const HistoryList = () => {
  return (
    <Tabs defaultValue="previous-donations" className="space-y-6 w-auto mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="previous-donations">Previous Donations</TabsTrigger>
        <TabsTrigger value="previous-requests">Previous Requests</TabsTrigger>
      </TabsList>

      <TabsContent value="previous-donations">
        <p>Previous Donations</p>
      </TabsContent>

      <TabsContent value="previous-requests">
        <p>Previous Requests</p>
      </TabsContent>
    </Tabs>
  );
};

export default HistoryList;
