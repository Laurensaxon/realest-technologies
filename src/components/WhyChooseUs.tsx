import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Headphones,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for all our services",
    color: "bg-brand-green"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with 5+ years of experience in technology solutions",
    color: "bg-brand-red"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all projects with comprehensive warranties",
    color: "bg-brand-orange"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality and attention to detail",
    color: "bg-primary"
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security measures to protect your data and systems",
    color: "bg-brand-green"
  },
  {
    icon: Headphones,
    title: "Free Consultation",
    description: "Complimentary project assessment and technology consultation services",
    color: "bg-brand-red"
  }
];

const achievements = [
  { number: "100+", label: "Projects Completed", description: "Successfully delivered across all service categories" },
  { number: "50+", label: "Happy Clients", description: "Businesses and individuals served in Nakuru and beyond" },
  { number: "5+", label: "Years Experience", description: "Proven track record in technology solutions" },
  { number: "24/7", label: "Support Available", description: "Continuous assistance for all our clients" },
  { number: "99%", label: "Client Satisfaction", description: "Exceptional service quality and customer care" },
  { number: "30+", label: "Technologies", description: "Expertise across diverse technology platforms" }
];

const WhyChooseUs = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose Realest Technologies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Technology Partner</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our comprehensive approach to technology solutions, 
            combining expertise, reliability, and exceptional customer service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                <div className="text-sm text-white/80">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-brand-green/10 text-brand-green border-brand-green/20">
              Our Process
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              How We Deliver Excellence
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From initial consultation to project completion and ongoing support, 
              we follow a proven methodology that ensures success at every step.
            </p>

            <div className="space-y-6">
              {[
                { step: "01", title: "Consultation & Analysis", desc: "Understanding your needs and requirements" },
                { step: "02", title: "Planning & Design", desc: "Creating detailed project roadmap and specifications" },
                { step: "03", title: "Implementation", desc: "Expert execution with regular progress updates" },
                { step: "04", title: "Testing & Delivery", desc: "Thorough quality assurance and project handover" },
                { step: "05", title: "Support & Maintenance", desc: "Ongoing assistance and system optimization" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-brand-green">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-brand-green" />
                  <h4 className="font-bold text-lg">Local Presence</h4>
                </div>
                <p className="text-muted-foreground">
                  Based in Nakuru with deep understanding of local business needs and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-brand-red">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-brand-red" />
                  <h4 className="font-bold text-lg">Competitive Pricing</h4>
                </div>
                <p className="text-muted-foreground">
                  Transparent, fair pricing with no hidden costs and flexible payment options.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-brand-orange">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-brand-orange" />
                  <h4 className="font-bold text-lg">Future-Ready Solutions</h4>
                </div>
                <p className="text-muted-foreground">
                  Scalable technology solutions designed to grow with your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their businesses with our technology solutions.
          </p>
          <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')}>
            Get Started Today
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;