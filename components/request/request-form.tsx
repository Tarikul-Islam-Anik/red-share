import React from "react";
import {
  InputWithLabel,
  SelectWithLabel,
  SwitchWithLabel,
  TextareaWithLabel,
} from "./../shared";

const RequestForm = () => {
  return (
    <form className="flex flex-col space-y-6">
      <InputWithLabel label="Title" />
      <SelectWithLabel
        label="Blood Group"
        placeholder="Select blood group"
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
      />
      <SwitchWithLabel label="Urgent" />
      <InputWithLabel label="Location" />
      <TextareaWithLabel
        label="Reason"
        placeholder="Type your reason here"
        bottomText="Please provide a valid reason for your request. Max 500 characters."
        maxLength={500}
        rows={6}
      />
    </form>
  );
};

export default RequestForm;
