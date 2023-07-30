import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { generateID } from "@/lib/utils";

interface SwitchWithLabelProps extends React.ComponentProps<typeof Switch> {
  label: string;
}

export function SwitchWithLabel({ label, ...props }: SwitchWithLabelProps) {
  const ID = generateID(label);
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor={ID}>{label}</Label>
      <Switch id={ID} {...props} />
    </div>
  );
}
