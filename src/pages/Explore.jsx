import SearchBar from "@/components/SearchBar";
import DestinationCard from "@/components/DestinationCard";
import TravelTabs from "@/components/TravelTabs";

const Explore = () => {
  const destinations = [
    {
      id: 1,
      title: "Tokyo, Japan",
      description: "Experience the vibrant culture, amazing food, and modern technology in Japan's bustling capital city.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=300&fit=crop",
      location: "Asia"
    },
    {
      id: 2,
      title: "Paris, France",
      description: "Discover the city of love with its iconic landmarks, world-class museums, and romantic atmosphere.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop",
      location: "Europe"
    },
    {
      id: 3,
      title: "Bali, Indonesia",
      description: "Relax in tropical paradise with beautiful beaches, ancient temples, and stunning rice terraces.",
      imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&h=300&fit=crop",
      location: "Asia"
    },
    {
      id: 4,
      title: "New York, USA",
      description: "Explore the city that never sleeps with its iconic skyline, Broadway shows, and diverse neighborhoods.",
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop",
      location: "North America"
    },
    {
      id: 5,
      title: "Santorini, Greece",
      description: "Marvel at stunning sunsets, whitewashed buildings, and crystal-clear waters in this Greek island paradise.",
      imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop",
      location: "Europe"
    },
    {
      id: 6,
      title: "Dubai, UAE",
      description: "Experience luxury shopping, ultramodern architecture, and desert adventures in this Middle Eastern gem.",
      imageUrl: "https://images.unsplash.com/photo-1512453979381-3e5b8b60a69c?w=500&h=300&fit=crop",
      location: "Middle East"
    },
    {
      id: 7,
      title: "Machu Picchu, Peru",
      description: "Journey to the ancient Incan citadel high in the Andes Mountains for a once-in-a-lifetime experience.",
      imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&h=300&fit=crop",
      location: "South America"
    },
    {
      id: 8,
      title: "Sydney, Australia",
      description: "Enjoy beautiful harbors, iconic architecture, and amazing beaches in Australia's vibrant coastal city.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      location: "Oceania"
    },
    {
      id: 9,
      title: "Iceland",
      description: "Witness otherworldly landscapes with glaciers, geysers, and the magical Northern Lights.",
      imageUrl: "https://images.unsplash.com/photo-1539066830810-4f565a37f7fe?w=500&h=300&fit=crop",
      location: "Europe"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
            Explore Destinations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover amazing places around the world and plan your next adventure
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar placeholder="Search destinations..." />
          </div>
        </div>

        {/* Travel Information Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <TravelTabs />
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              description={destination.description}
              imageUrl={destination.imageUrl}
              location={destination.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;