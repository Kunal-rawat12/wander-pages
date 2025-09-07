import TeamCard from "@/components/TeamCard";
import { Globe, Users, Award, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&q=80",
      bio: "Passionate traveler with 15+ years of experience exploring over 60 countries and helping others discover the world."
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Travel Expert",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Adventure seeker and cultural enthusiast specializing in off-the-beaten-path destinations and authentic experiences."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Content Creator",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "Travel writer and photographer capturing the beauty of destinations through compelling stories and stunning visuals."
    }
  ];

  const stats = [
    { icon: Globe, label: "Countries Covered", value: "150+" },
    { icon: Users, label: "Happy Travelers", value: "50K+" },
    { icon: Award, label: "Travel Awards", value: "25+" },
    { icon: Heart, label: "5-Star Reviews", value: "10K+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">About </span>
            <span className="bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
              TripEase
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about making travel accessible, enjoyable, and unforgettable for everyone. 
            Our mission is to connect you with amazing destinations and experiences around the world.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-travel-orange to-travel-sunset p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-travel-ocean to-travel-blue bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              TripEase was born from a simple belief: travel should be easy, inspiring, and accessible to everyone. 
              Founded in 2020 by a group of passionate travelers, we started with a mission to remove the barriers 
              that often make trip planning overwhelming and expensive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team has collectively visited over 150 countries and understands the challenges travelers face. 
              From finding authentic local experiences to navigating complex booking processes, we've been there. 
              That's why we created a platform that simplifies every aspect of travel planning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, TripEase helps thousands of travelers discover their perfect destinations, connect with local 
              cultures, and create memories that last a lifetime. Whether you're planning a weekend getaway or 
              a months-long adventure, we're here to make your journey extraordinary.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-foreground">Meet Our </span>
            <span className="bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate travelers and experts dedicated to helping you explore the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default About;