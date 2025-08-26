import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the latest technologies and frameworks shaping the future of web development, from AI integration to progressive web apps.",
    image: "/lovable-uploads/07a8d482-974a-4028-a3f7-b52aa4f8a30f.png",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Mobile-First Design: Why It's Essential for Modern Businesses",
    excerpt: "Learn why mobile-first design approach is crucial for business success and how to implement it effectively in your projects.",
    image: "/lovable-uploads/529749b1-eccb-4a24-8db1-a32ef07b0e6d.png",
    author: "Mike Chen",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Design"
  },
  {
    id: 3,
    title: "Maximizing ROI with Custom Software Solutions",
    excerpt: "Explore how custom software development can drive significant returns on investment for businesses of all sizes.",
    image: "/lovable-uploads/606431b9-b638-4ca8-a1f4-3bd2dedf6a3e.png",
    author: "David Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Business"
  }
];

const Blog = () => {
  const { ref: elementRef, isInView: isVisible } = useIntersectionObserver();
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-brand-blue to-brand-orange bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and insights from the world of technology and digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant hover:shadow-premium border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/90 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full font-medium backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/blog')}
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;