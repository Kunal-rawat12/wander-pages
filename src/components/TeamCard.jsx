import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamCard = ({ name, role, imageUrl, bio }) => {
  return (
    <Card className="group text-center overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-24 h-24 mx-auto rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-travel-orange/20"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-travel-orange transition-colors duration-300">
          {name}
        </h3>
        <p className="text-travel-ocean font-semibold mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {bio}
        </p>
        <div className="flex justify-center gap-3">
          <button className="p-2 rounded-full bg-muted hover:bg-travel-orange hover:text-primary-foreground transition-all duration-300">
            <Linkedin className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full bg-muted hover:bg-travel-ocean hover:text-primary-foreground transition-all duration-300">
            <Twitter className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full bg-muted hover:bg-travel-sunset hover:text-primary-foreground transition-all duration-300">
            <Mail className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;