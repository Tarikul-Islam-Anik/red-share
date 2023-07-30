import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateID } from "@/lib/utils";

interface TextareaWithLabelProps extends React.ComponentProps<typeof Textarea> {
  label: string;
  bottomText?: string;
}

export function TextareaWithLabel({
  label,
  bottomText = "",
  ...props
}: TextareaWithLabelProps) {
  const ID = generateID(label);
  return (
    <div className="w-full flex flex-col space-y-4">
      <Label htmlFor={ID}>{label}</Label>
      <Textarea {...props} id={ID} />
      <p className="text-sm text-muted-foreground">{bottomText}</p>
    </div>
  );
}
