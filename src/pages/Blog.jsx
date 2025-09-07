import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia You Must Visit",
      excerpt: "Discover breathtaking destinations off the beaten path that offer authentic cultural experiences and stunning natural beauty without the crowds.",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Travel Tips"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Budget Travel in Europe",
      excerpt: "Learn how to explore Europe's most beautiful cities without breaking the bank with our comprehensive guide to affordable accommodation, food, and transportation.",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Budget Travel"
    },
    {
      id: 3,
      title: "Sustainable Tourism: How to Travel Responsibly",
      excerpt: "Make a positive impact while exploring the world with these eco-friendly travel practices that benefit both local communities and the environment.",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop",
      author: "Emma Davis",
      date: "Dec 10, 2024",
      category: "Eco Travel"
    },
    {
      id: 4,
      title: "Street Food Adventures: A Culinary Journey Through Asia",
      excerpt: "Embark on a delicious journey through Asia's vibrant street food scene and discover the flavors that define each culture.",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop",
      author: "David Kim",
      date: "Dec 8, 2024",
      category: "Food & Culture"
    },
    {
      id: 5,
      title: "Digital Nomad Destinations: Where to Work Remotely",
      excerpt: "Find the perfect destinations for remote work with reliable internet, affordable living costs, and vibrant communities of digital nomads.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop",
      author: "Alex Thompson",
      date: "Dec 5, 2024",
      category: "Digital Nomad"
    },
    {
      id: 6,
      title: "Adventure Photography: Capturing Your Travels",
      excerpt: "Master the art of travel photography with expert tips on composition, lighting, and equipment to document your adventures beautifully.",
      imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop",
      author: "Lisa Martinez",
      date: "Dec 3, 2024",
      category: "Photography"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
            Travel Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired with travel stories, tips, and guides from fellow adventurers around the world
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              author={post.author}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;