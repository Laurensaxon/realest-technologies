import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAnalytics } from "@/hooks/useAnalytics";
import { usePerformance } from "@/hooks/usePerformance";
import { useErrorBoundary } from "@/hooks/useErrorBoundary";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import OptimizedImage from "@/components/OptimizedImage";
import { BlogPostSkeleton } from "@/components/ui/loading-skeleton";
import { ErrorFallback } from "@/components/ErrorFallback";
import BackToTop from "@/components/BackToTop";
import { useState, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the latest technologies and frameworks shaping the future of web development, from AI integration to progressive web apps.",
    content: "Artificial Intelligence is revolutionizing how we build web applications. From automated code generation to intelligent user interfaces, AI is becoming an integral part of the development process...",
    image: "/lovable-uploads/07a8d482-974a-4028-a3f7-b52aa4f8a30f.png",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    featured: true
  },
  {
    id: 2,
    title: "Mobile-First Design: Why It's Essential for Modern Businesses",
    excerpt: "Learn why mobile-first design approach is crucial for business success and how to implement it effectively in your projects.",
    content: "With over 60% of web traffic coming from mobile devices, designing for mobile-first is no longer optional. It's a necessity for business success...",
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
    content: "Custom software solutions offer businesses the flexibility and efficiency that off-the-shelf products simply cannot match...",
    image: "/lovable-uploads/606431b9-b638-4ca8-a1f4-3bd2dedf6a3e.png",
    author: "David Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Business"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Small Businesses",
    excerpt: "A comprehensive guide to migrating your business to the cloud safely and efficiently while maximizing cost savings.",
    content: "Cloud migration can seem daunting for small businesses, but with the right strategy, it can unlock significant cost savings and scalability...",
    image: "/lovable-uploads/b6e04550-d39f-454a-b17c-0bbfa4c78c66.png",
    author: "Jennifer Liu",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Cloud Computing"
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Modern Websites",
    excerpt: "Essential security measures every business should implement to protect their digital assets and customer data.",
    content: "In today's digital landscape, cybersecurity is not just an IT concern—it's a business imperative that affects every aspect of your operations...",
    image: "/lovable-uploads/07a8d482-974a-4028-a3f7-b52aa4f8a30f.png",
    author: "Robert Kim",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Security"
  },
  {
    id: 6,
    title: "The Rise of Progressive Web Apps (PWAs)",
    excerpt: "Understanding how PWAs bridge the gap between web and mobile applications, offering native-like experiences.",
    content: "Progressive Web Apps represent the future of web development, combining the reach of the web with the functionality of native mobile apps...",
    image: "/lovable-uploads/529749b1-eccb-4a24-8db1-a32ef07b0e6d.png",
    author: "Alex Thompson",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Web Development"
  }
];

const categories = ["All", "Web Development", "Design", "Business", "Cloud Computing", "Security"];

const BlogPage = () => {
  const { ref: elementRef, isInView: isVisible } = useIntersectionObserver();
  const navigate = useNavigate();
  const { trackPageView, trackBlogInteraction } = useAnalytics();
  const { error, captureError, clearError } = useErrorBoundary();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  usePerformance();

  useEffect(() => {
    trackPageView({ page: '/blog', title: 'Tech Insights & Innovation' });
    
    // Simulate loading completion
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [trackPageView]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleBlogClick = (postId: number) => {
    try {
      trackBlogInteraction('post_click', postId);
      navigate(`/blog/${postId}`);
    } catch (err) {
      captureError(err as Error, 'BlogPage');
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    trackBlogInteraction('search', value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackBlogInteraction('filter', category);
  };

  if (error) {
    return <ErrorFallback error={error} onRetry={clearError} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-brand-orange/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={elementRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-brand-blue to-brand-orange bg-clip-text text-transparent">
              Tech Insights & Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights, industry trends, and practical guides from our technology experts.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 h-12 bg-white/80 backdrop-blur-sm border-white/20"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className="transition-all duration-300"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  variant="hero"
                  onClick={() => navigate('/blog/add')}
                  className="hover:shadow-glow transition-all duration-300"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Blog Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Featured Article</h2>
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant border border-white/20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <OptimizedImage 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    className="hover:shadow-glow transition-all duration-300"
                    onClick={() => handleBlogClick(featuredPost.id)}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }, (_, i) => (
                <BlogPostSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant hover:shadow-premium border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/90 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    onClick={() => handleBlogClick(post.id)}
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  trackBlogInteraction('clear_filters');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPage;