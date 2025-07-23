import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "John Kamau",
    company: "Nakuru Electronics Ltd",
    rating: 5,
    text: "Realest Technologies transformed our business with their professional website and e-commerce platform. Sales increased by 300% within the first month!",
    service: "Web Development"
  },
  {
    name: "Mary Wanjiku",
    company: "Secure Homes Kenya",
    rating: 5,
    text: "Excellent IP camera installation service. The team was professional, punctual, and the security system works flawlessly. Highly recommended!",
    service: "IP Camera Installation"
  },
  {
    name: "David Mwangi",
    company: "Aerial Survey Co.",
    rating: 5,
    text: "Their drone services are top-notch. From aerial photography to custom drone design, they delivered beyond our expectations. Great team!",
    service: "Drone Services"
  },
  {
    name: "Grace Achieng",
    company: "Nakuru Medical Center",
    rating: 5,
    text: "Professional WiFi installation and network setup. Our medical facility now has reliable internet throughout. Thank you Realest Technologies!",
    service: "WiFi Installation"
  }
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-green/10 text-brand-green border-brand-green/20">
            Client Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied customers who have experienced our exceptional technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-green">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-brand-green/30 mr-3" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-muted-foreground mb-6">
            Experience the same level of excellence and professional service that our clients rave about
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
            Start Your Project Today
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;