import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

const DestinationCard = ({ title, description, imageUrl, location }: DestinationCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-travel-ocean mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{location}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-travel-orange transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;