import SearchBar from "@/components/SearchBar";
import DestinationCard from "@/components/DestinationCard";

const Explore = () => {
  const destinations = [
    {
      id: 1,
      title: "Tokyo, Japan",
      description: "Experience the perfect blend of traditional culture and modern innovation in Japan's bustling capital city.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      location: "Asia"
    },
    {
      id: 2,
      title: "Paris, France",
      description: "Discover the city of lights, with its iconic architecture, world-class cuisine, and romantic atmosphere.",
      imageUrl: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80",
      location: "Europe"
    },
    {
      id: 3,
      title: "Bali, Indonesia",
      description: "Relax in tropical paradise with stunning beaches, ancient temples, and lush rice terraces.",
      imageUrl: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80",
      location: "Southeast Asia"
    },
    {
      id: 4,
      title: "New York, USA",
      description: "Experience the energy of the city that never sleeps, from Broadway to Central Park.",
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
      location: "North America"
    },
    {
      id: 5,
      title: "Iceland",
      description: "Witness breathtaking natural wonders including geysers, waterfalls, and the Northern Lights.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      location: "Northern Europe"
    },
    {
      id: 6,
      title: "Dubai, UAE",
      description: "Marvel at modern architecture, luxury shopping, and desert adventures in this cosmopolitan city.",
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      location: "Middle East"
    },
    {
      id: 7,
      title: "Sydney, Australia",
      description: "Enjoy iconic landmarks, beautiful beaches, and vibrant culture in Australia's harbour city.",
      imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
      location: "Oceania"
    },
    {
      id: 8,
      title: "Santorini, Greece",
      description: "Experience stunning sunsets, white-washed buildings, and crystal-clear waters in the Aegean Sea.",
      imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
      location: "Southern Europe"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sticky Search Bar */}
        <div className="sticky top-20 z-40 mb-12 bg-background/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <SearchBar className="max-w-2xl mx-auto" />
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
              Explore
            </span>
            <span className="text-foreground"> Destinations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places around the world and plan your perfect getaway
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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