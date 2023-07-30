import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { dateFormater } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface RequestCardProps {
  title: string;
  description: string;
  urgency: boolean;
  bloodType: string;
  bagQuantity: number;
  location: string;
  contactNumber: string;
  within: string;
  status: boolean;
  createdAt: string;
  className?: string;
}
const RequestCard = ({
  title,
  description,
  urgency,
  bloodType,
  bagQuantity,
  location,
  contactNumber,
  status,
  createdAt,
  className,
}: RequestCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="">
          {title}{" "}
          {urgency && (
            <Badge variant={urgency ? "destructive" : "default"}>Urgent</Badge>
          )}
        </CardTitle>
        <CardDescription>
          {location} &bull; {dateFormater(createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="space-x-4 flex">
          <Badge variant="secondary" className="font-bold text-sm">
            {bloodType}
          </Badge>
          <span>{bagQuantity} bags </span>
        </div>
        <Button>Respond</Button>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;
