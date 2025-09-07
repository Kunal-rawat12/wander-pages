import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const BlogCard = ({ title, excerpt, imageUrl, author, date, category }) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-muted">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-travel-orange text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-travel-orange transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Button variant="outline" className="w-full group-hover:bg-travel-orange group-hover:text-primary-foreground group-hover:border-travel-orange transition-all duration-300">
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;