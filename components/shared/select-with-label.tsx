import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectWithLabelProps extends React.ComponentProps<typeof Select> {
  label: string;
  placeholder: string;
  values: string[];
}

export function SelectWithLabel({
  label,
  placeholder,
  values,
  ...props
}: SelectWithLabelProps) {
  return (
    <Select {...props}>
      <div className="flex space-x-4 items-center">
        <Label>{label}</Label>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {values.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </div>
    </Select>
  );
}
