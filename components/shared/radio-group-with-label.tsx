import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generateID } from "@/lib/utils";

interface RadioGroupWithLabelProps
  extends React.ComponentProps<typeof RadioGroup> {
  label: string;
  items: string[];
}

const RadioGroupWithLabel = ({
  label,
  items,
  ...props
}: RadioGroupWithLabelProps) => {
  return (
    <RadioGroup {...props}>
      <div className="flex my-4 space-x-4">
        <Label>{label}</Label>
        {items.map((item, index) => {
          const ID = generateID(item);
          return (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={ID} />
              <Label htmlFor={ID}>{item}</Label>
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default RadioGroupWithLabel;
