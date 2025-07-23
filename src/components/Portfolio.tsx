import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Laptop, Camera, Cpu, Wifi } from "lucide-react";

const portfolioItems = [
  {
    title: "E-Commerce Platform for Nakuru Electronics",
    category: "Web Development",
    description: "Modern e-commerce website with inventory management, payment integration, and mobile responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: Laptop,
    completion: "2024"
  },
  {
    title: "Security System for Corporate Office",
    category: "IP Camera Installation",
    description: "Complete security surveillance system with 24 HD cameras, night vision, and remote monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tech: ["HD Cameras", "NVR System", "Mobile App", "Cloud Storage"],
    icon: Camera,
    completion: "2024"
  },
  {
    title: "Aerial Mapping for Agricultural Project",
    category: "Drone Services",
    description: "Precision agriculture mapping using custom drones for crop monitoring and yield optimization.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    tech: ["Custom Drone", "GPS Mapping", "Thermal Imaging", "Data Analysis"],
    icon: Cpu,
    completion: "2023"
  },
  {
    title: "WiFi Infrastructure for Medical Center",
    category: "Network Setup",
    description: "Hospital-wide WiFi network with secure patient data handling and seamless connectivity across all departments.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop",
    tech: ["Enterprise WiFi", "Network Security", "VLAN Setup", "24/7 Monitoring"],
    icon: Wifi,
    completion: "2023"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            Our Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise through successful project implementations across various technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary border-0">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {item.completion}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-orange/5 rounded-2xl p-8 border border-brand-green/10">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether it's web development, security systems, drone services, or network setup - 
              we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;