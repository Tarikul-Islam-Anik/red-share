import { generateID } from "@/lib/utils";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";

interface InputWithLabelProps extends InputProps {
  label: string;
}

export function InputWithLabel({ label, ...props }: InputWithLabelProps) {
  const ID = generateID(label);
  return (
    <div className="space-y-2">
      <Label htmlFor={ID}>{label}</Label>
      <Input id={ID} {...props} />
    </div>
  );
}
