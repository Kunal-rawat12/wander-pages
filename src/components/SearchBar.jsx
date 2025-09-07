import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({ className = "", placeholder = "Search destinations...", large = false }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground ${large ? 'h-6 w-6' : 'h-5 w-5'}`} />
        <Input
          type="text"
          placeholder={placeholder}
          className={`${large ? 'h-14 pl-14 pr-32 text-lg' : 'h-12 pl-12 pr-28'} rounded-full border-2 border-border bg-background/90 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300`}
        />
        <Button 
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${large ? 'h-10 px-6' : 'h-8 px-4'} rounded-full bg-gradient-to-r from-travel-sunset to-travel-orange hover:shadow-lg transition-all duration-300`}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;