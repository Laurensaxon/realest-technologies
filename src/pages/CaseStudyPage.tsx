import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Zap } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform Development",
    category: "Web Development",
    description: "Built a comprehensive online marketplace with advanced features",
    image: "/lovable-uploads/07a8d482-974a-4028-a3f7-b52aa4f8a30f.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: Zap,
    completion: "2024",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>We developed a comprehensive e-commerce platform for a growing retail business, featuring advanced inventory management, secure payment processing, and a responsive design that works seamlessly across all devices.</p>
      
      <h2>Challenges</h2>
      <ul>
        <li>Complex inventory management across multiple warehouses</li>
        <li>Integration with existing ERP systems</li>
        <li>High-performance requirements for peak shopping periods</li>
        <li>Multi-currency and multi-language support</li>
      </ul>
      
      <h2>Solutions</h2>
      <h3>Advanced Architecture</h3>
      <p>We implemented a microservices architecture using React for the frontend and Node.js for the backend, ensuring scalability and maintainability.</p>
      
      <h3>Performance Optimization</h3>
      <p>Implemented advanced caching strategies, CDN integration, and database optimization to handle high traffic loads during peak shopping periods.</p>
      
      <h3>Payment Integration</h3>
      <p>Integrated multiple payment gateways including Stripe, PayPal, and local payment methods to maximize conversion rates.</p>
      
      <h2>Results</h2>
      <ul>
        <li>300% increase in online sales within the first quarter</li>
        <li>50% reduction in cart abandonment rate</li>
        <li>99.9% uptime during Black Friday sales</li>
        <li>40% improvement in page load times</li>
      </ul>
    `,
    client: "RetailCorp",
    duration: "6 months",
    liveUrl: "https://example-ecommerce.com"
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure and user-friendly banking app with biometric authentication",
    image: "/lovable-uploads/529749b1-eccb-4a24-8db1-a32ef07b0e6d.png",
    tech: ["React Native", "Firebase", "Blockchain", "AI"],
    icon: Zap,
    completion: "2024",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>We created a secure mobile banking application with cutting-edge features including biometric authentication, real-time fraud detection, and AI-powered financial insights.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Biometric authentication (fingerprint and face recognition)</li>
        <li>Real-time transaction notifications</li>
        <li>AI-powered spending insights and budgeting tools</li>
        <li>Blockchain-based transaction verification</li>
        <li>Multi-language support</li>
      </ul>
      
      <h2>Security Measures</h2>
      <p>Implemented bank-grade security including end-to-end encryption, tokenization, and advanced fraud detection algorithms.</p>
      
      <h2>Results</h2>
      <ul>
        <li>95% customer satisfaction rating</li>
        <li>80% reduction in support calls</li>
        <li>60% increase in mobile banking adoption</li>
        <li>Zero security incidents since launch</li>
      </ul>
    `,
    client: "SecureBank",
    duration: "8 months",
    liveUrl: "https://securebank-app.com"
  },
  {
    id: 3,
    title: "IoT Smart City Platform",
    category: "IoT Development",
    description: "Comprehensive smart city management system with real-time monitoring",
    image: "/lovable-uploads/606431b9-b638-4ca8-a1f4-3bd2dedf6a3e.png",
    tech: ["Python", "IoT", "Machine Learning", "Cloud"],
    icon: Zap,
    completion: "2023",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>Developed an IoT-based smart city platform that integrates traffic management, energy monitoring, waste management, and environmental sensors into a unified dashboard.</p>
      
      <h2>System Components</h2>
      <h3>Traffic Management</h3>
      <p>Real-time traffic monitoring and adaptive signal control to reduce congestion by 35%.</p>
      
      <h3>Energy Monitoring</h3>
      <p>Smart grid integration with predictive analytics for optimal energy distribution.</p>
      
      <h3>Environmental Monitoring</h3>
      <p>Air quality sensors providing real-time pollution data and automated alerts.</p>
      
      <h2>Technology Stack</h2>
      <p>Built using Python for data processing, machine learning models for predictive analytics, and cloud infrastructure for scalable data storage and processing.</p>
      
      <h2>Impact</h2>
      <ul>
        <li>35% reduction in traffic congestion</li>
        <li>25% energy savings across the city</li>
        <li>Real-time environmental monitoring for 500,000+ residents</li>
        <li>40% improvement in emergency response times</li>
      </ul>
    `,
    client: "Smart City Initiative",
    duration: "12 months",
    liveUrl: "https://smartcity-dashboard.com"
  }
];

const CaseStudyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = portfolioItems.find(p => p.id === Number(id));
  
  usePageSEO({
    title: caseStudy?.title || "Case Study Not Found",
    description: caseStudy?.description || "Case study not found",
    keywords: `case study, ${caseStudy?.category}, ${caseStudy?.tech?.join(', ')}`.toLowerCase(),
    canonicalUrl: `https://realesttechnologies.com/case-study/${id}`
  });

  if (!caseStudy) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Portfolio</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">
                {caseStudy.category}
              </span>
            </div>
          </div>

          {/* Case Study Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {caseStudy.description}
            </p>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-6 p-6 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client</h3>
                <p className="text-muted-foreground">{caseStudy.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">{caseStudy.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Completed</h3>
                <p className="text-muted-foreground">{caseStudy.completion}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Live Project Link */}
            {caseStudy.liveUrl && (
              <div className="border-b pb-6">
                <Button 
                  variant="outline" 
                  onClick={() => window.open(caseStudy.liveUrl, '_blank')}
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </Button>
              </div>
            )}
          </header>

          {/* Case Study Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-headings:font-heading prose-ul:text-foreground prose-li:text-foreground"
            dangerouslySetInnerHTML={{ __html: caseStudy.fullDescription }}
          />

          {/* Call to Action */}
          <footer className="mt-12 pt-8 border-t text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business. 
              Our team of experts is ready to turn your vision into reality.
            </p>
            <div className="space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/')}
              >
                View More Projects
              </Button>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;