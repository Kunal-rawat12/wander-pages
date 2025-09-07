import TeamCard from "@/components/TeamCard";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Travel enthusiast with 10+ years of experience in the tourism industry. Passionate about making travel accessible to everyone."
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Head of Product",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Tech expert and digital nomad who loves creating user-friendly experiences that inspire people to explore the world."
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Travel Curator",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Adventure seeker and cultural explorer who specializes in finding unique and authentic travel experiences worldwide."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Director",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Creative storyteller who brings travel destinations to life through compelling content and innovative marketing strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
            About TripEase
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about making travel planning effortless and inspiring. Our mission is to help you discover 
            amazing destinations and create unforgettable memories around the world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-travel-ocean/10 to-travel-sunset/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-sunset to-travel-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Discover</h3>
                <p className="text-muted-foreground">
                  Find hidden gems and popular destinations tailored to your interests and preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-ocean to-travel-sunset rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Plan</h3>
                <p className="text-muted-foreground">
                  Create seamless travel itineraries with our intuitive planning tools and expert recommendations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-sunset to-travel-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Experience</h3>
                <p className="text-muted-foreground">
                  Make lasting memories with authentic local experiences and cultural immersion opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate travelers and experts dedicated to making your journey extraordinary
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                bio={member.bio}
              />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-muted/50">
              <h3 className="text-lg font-semibold mb-2 text-travel-orange">Authenticity</h3>
              <p className="text-sm text-muted-foreground">We promote genuine cultural experiences and local connections.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50">
              <h3 className="text-lg font-semibold mb-2 text-travel-ocean">Sustainability</h3>
              <p className="text-sm text-muted-foreground">We encourage responsible travel that protects our planet.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50">
              <h3 className="text-lg font-semibold mb-2 text-travel-sunset">Accessibility</h3>
              <p className="text-sm text-muted-foreground">Travel should be available and enjoyable for everyone.</p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50">
              <h3 className="text-lg font-semibold mb-2 text-travel-orange">Innovation</h3>
              <p className="text-sm text-muted-foreground">We constantly improve our platform with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;