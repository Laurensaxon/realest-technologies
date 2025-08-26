import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the latest technologies and frameworks shaping the future of web development, from AI integration to progressive web apps.",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing how we build web applications. From automated code generation to intelligent user interfaces, AI is becoming an integral part of the development process.</p>
      
      <h2>Key Trends in 2024</h2>
      <h3>1. AI-Powered Development</h3>
      <p>Machine learning models are now being integrated directly into development workflows, helping developers write cleaner, more efficient code and catch bugs before they reach production.</p>
      
      <h3>2. Progressive Web Apps (PWAs)</h3>
      <p>PWAs continue to bridge the gap between web and mobile applications, offering native-like experiences while maintaining the accessibility of web technologies.</p>
      
      <h3>3. WebAssembly Adoption</h3>
      <p>WebAssembly is enabling high-performance applications in the browser, allowing developers to run code written in languages like C++ and Rust at near-native speeds.</p>
      
      <h2>Impact on Businesses</h2>
      <p>These technological advances are creating new opportunities for businesses to engage with customers more effectively and build more robust digital experiences.</p>
      
      <h2>Conclusion</h2>
      <p>As we move forward, staying updated with these trends will be crucial for developers and businesses alike. The future of web development is bright, with exciting possibilities on the horizon.</p>
    `,
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
    content: `
      <h2>The Mobile Revolution</h2>
      <p>With over 60% of web traffic coming from mobile devices, designing for mobile-first is no longer optional. It's a necessity for business success.</p>
      
      <h2>Benefits of Mobile-First Design</h2>
      <h3>Improved User Experience</h3>
      <p>Mobile-first design ensures that your website provides an optimal experience on the devices your users are most likely to use.</p>
      
      <h3>Better Performance</h3>
      <p>Starting with mobile constraints forces you to prioritize content and optimize for performance from the beginning.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Start with the smallest screen size and progressively enhance for larger screens. This approach ensures that your core functionality works everywhere.</p>
    `,
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
    content: `
      <h2>Understanding Custom Software ROI</h2>
      <p>Custom software solutions offer businesses the flexibility and efficiency that off-the-shelf products simply cannot match.</p>
      
      <h2>Key ROI Drivers</h2>
      <h3>Process Automation</h3>
      <p>Custom software can automate repetitive tasks, reducing labor costs and minimizing human error.</p>
      
      <h3>Competitive Advantage</h3>
      <p>Unique software solutions can differentiate your business from competitors and create new revenue streams.</p>
      
      <h2>Measuring Success</h2>
      <p>Track metrics like time savings, error reduction, and revenue growth to quantify the impact of your custom software investment.</p>
    `,
    image: "/lovable-uploads/606431b9-b638-4ca8-a1f4-3bd2dedf6a3e.png",
    author: "David Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Business"
  }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === Number(id));
  
  usePageSEO({
    title: post?.title || "Blog Post Not Found",
    description: post?.excerpt || "Blog post not found",
    keywords: `${post?.category}, blog, technology, ${post?.author}`.toLowerCase(),
    canonicalUrl: `https://realesttechnologies.com/blog/${id}`
  });

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = `https://realesttechnologies.com/blog/${id}`;
  const shareText = post.title;

  const shareOnSocial = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 border-b pb-6">
              <span className="text-sm font-medium">Share:</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => shareOnSocial('facebook')}
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => shareOnSocial('twitter')}
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => shareOnSocial('linkedin')}
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-headings:font-heading"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">
                Get in touch with our experts to discuss your technology needs.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Get Started Today
              </Button>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;