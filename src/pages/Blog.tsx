import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia You Must Visit",
      excerpt: "Discover breathtaking destinations off the beaten path that offer authentic experiences and stunning natural beauty without the crowds.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Destinations"
    },
    {
      id: 2,
      title: "Budget Travel Guide: How to See the World for Less",
      excerpt: "Learn practical tips and strategies to travel more while spending less, from finding cheap flights to budget accommodation options.",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Travel Tips"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Solo Female Travel",
      excerpt: "Essential safety tips, destination recommendations, and empowering advice for women traveling alone around the world.",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      category: "Solo Travel"
    },
    {
      id: 4,
      title: "Sustainable Tourism: How to Travel Responsibly",
      excerpt: "Learn how to minimize your environmental impact while traveling and support local communities in your destinations.",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      author: "David Green",
      date: "March 8, 2024",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "Food Adventures: Street Food Around the World",
      excerpt: "Embark on a culinary journey through vibrant street food scenes from Bangkok to Mexico City and discover flavors that will change your perspective.",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      author: "Lisa Park",
      date: "March 5, 2024",
      category: "Food & Culture"
    },
    {
      id: 6,
      title: "Digital Nomad Paradise: Top Remote Work Destinations",
      excerpt: "Explore the best cities for digital nomads with reliable internet, affordable living costs, and vibrant communities.",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
      author: "Alex Thompson",
      date: "March 3, 2024",
      category: "Digital Nomad"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-travel-sunset to-travel-orange bg-clip-text text-transparent">
              Travel
            </span>
            <span className="text-foreground"> Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired with travel stories, tips, and guides from around the world
          </p>
        </div>

        {/* Blog Grid */}
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