import { Button } from "@/components/ui/button";

const QuickSearchButtons = () => {
  const countries = [
    { name: "India", flag: "🇮🇳" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "USA", flag: "🇺🇸" },
    { name: "UK", flag: "🇬🇧" },
    { name: "South Korea", flag: "🇰🇷" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
      {countries.map((country) => (
        <Button
          key={country.name}
          variant="outline"
          className="w-full md:w-auto px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border hover:bg-travel-orange hover:text-primary-foreground hover:border-travel-orange transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <span className="mr-2">{country.flag}</span>
          {country.name}
        </Button>
      ))}
    </div>
  );
};

export default QuickSearchButtons;