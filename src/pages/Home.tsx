import SearchBar from "@/components/SearchBar";
import QuickSearchButtons from "@/components/QuickSearchButtons";
import heroImageUrl from "@/assets/hero-landscape.jpg";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Discover Your Next
            <span className="block bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
            Explore amazing destinations around the world with TripEase
          </p>
        </div>

        {/* Search Section */}
        <div className="w-full max-w-4xl">
          <SearchBar 
            large 
            className="mb-8"
            placeholder="Where would you like to go?" 
          />
          <QuickSearchButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;