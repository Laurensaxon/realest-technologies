import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
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
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold border border-brand-green/20">
                About Realest Technologies
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Pioneering Technology Solutions in 
              <span className="text-brand-green"> Kenya</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in Nakuru Town at the Signature Building opposite Naivas Supermarket, 
              Realest Technologies has been at the forefront of technological innovation, 
              delivering cutting-edge solutions that transform businesses and communities.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Expert team with 5+ years of experience",
                "Comprehensive technology solutions under one roof",
                "24/7 customer support and maintenance",
                "Competitive pricing with quality guarantee",
                "Local presence with global standards"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')}>
              Learn More About Us
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-brand-green">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To render impeccable technology solutions that empower businesses 
                      and individuals to achieve their digital transformation goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-brand-red">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading technology solutions provider in East Africa, 
                      recognized for innovation, quality, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-brand-orange">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Nakuru Town Signature Building, Opposite Naivas Supermarket, 
                      First Floor Room No.30 - Easily accessible and ready to serve you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-brand-green mb-2">100+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-brand-red mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-brand-orange mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;