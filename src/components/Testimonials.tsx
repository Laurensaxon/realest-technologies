import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Emma Thompson",
    company: "Thompson Retail Ltd",
    rating: 5,
    text: "Realest Technologies transformed our online presence completely. Their team delivered a stunning e-commerce platform that increased our sales by 300% in just 6 months.",
    service: "E-commerce Development"
  },
  {
    name: "James Mitchell",
    company: "Mitchell Engineering",
    rating: 5,
    text: "The custom CRM system they built for us has streamlined our operations perfectly. Professional, efficient, and always available for support.",
    service: "Custom Software"
  },
  {
    name: "Lisa Rodriguez",
    company: "Rodriguez Marketing",
    rating: 5,
    text: "Outstanding mobile app development! They understood our vision perfectly and delivered beyond our expectations. Highly recommended!",
    service: "Mobile Development"
  },
  {
    name: "Robert Chen",
    company: "Chen Consulting",
    rating: 5,
    text: "Their digital transformation strategy helped us modernize our entire business. The ROI has been incredible, and their ongoing support is exceptional.",
    service: "Digital Strategy"
  }
];

const Testimonials = () => {
  const { ref: elementRef, isInView: isVisible } = useIntersectionObserver();
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-brand-orange/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-brand-blue to-brand-orange bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-premium border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/90 relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="w-12 h-12 text-primary/20 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed italic text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.company}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;