import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Building, Eye } from "lucide-react";

const Gallery = () => {
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
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-green/10 text-brand-green border-brand-green/20">
            Our Facility
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Our Showroom</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our technology solutions firsthand at our professional showroom in Nakuru Town
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Office Entrance */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/529749b1-eccb-4a24-8db1-a32ef07b0e6d.png" 
                alt="Realest Technologies Office Entrance" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-brand-green text-white border-0">
                  <Building className="w-3 h-3 mr-1" />
                  Office Entrance
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Professional Office Space</h3>
              <p className="text-muted-foreground mb-4">
                Our modern office located in Nakuru Town Signature Building provides a professional 
                environment for consultations and business meetings.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-brand-green" />
                First Floor Room No.30, Opposite Naivas Supermarket
              </div>
            </CardContent>
          </Card>

          {/* Showroom Interior */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/07a8d482-974a-4028-a3f7-b52aa4f8a30f.png" 
                alt="Realest Technologies Showroom Interior" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-brand-red text-white border-0">
                  <Eye className="w-3 h-3 mr-1" />
                  Product Display
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Technology Showroom</h3>
              <p className="text-muted-foreground mb-4">
                Browse our extensive collection of tech products including cameras, routers, 
                computers, and electronic components in our well-organized showroom.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">IP Cameras</Badge>
                <Badge variant="secondary" className="text-xs">Routers</Badge>
                <Badge variant="secondary" className="text-xs">Electronics</Badge>
                <Badge variant="secondary" className="text-xs">Components</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Poster */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="relative">
              <img 
                src="/lovable-uploads/606431b9-b638-4ca8-a1f4-3bd2dedf6a3e.png" 
                alt="Realest Technologies Services Overview" 
                className="w-full h-auto object-contain bg-white"
              />
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-white/90 text-primary border-0">
                  Complete Services Overview
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-orange/5 rounded-2xl p-8 border border-brand-green/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit Our Showroom?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Come and see our extensive range of technology products and solutions. 
              Our expert team is ready to assist you with all your tech needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')}>
                <MapPin className="mr-2" />
                Get Directions
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                Schedule Visit
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;