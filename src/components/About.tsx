import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
              Your Trusted Tech Partner in 
              <span className="text-brand-green"> Nakuru</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in Nakuru Town at the Signature Building opposite Naivas Supermarket, 
              we're your neighborhood tech experts helping students, families, and small businesses 
              with all their technology needs at prices everyone can afford.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Friendly team that speaks your language",
                "Affordable prices with no hidden costs",
                "Same-day repairs for most problems",
                "Free advice and consultations",
                "We come to your home or office",
                "M-Pesa payments accepted"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" onClick={() => navigate('/contact')}>
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
                      To make technology simple and affordable for everyone in Nakuru. 
                      We believe everyone deserves access to good tech support and solutions.
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
                      To be the go-to tech shop in Nakuru where everyone feels welcome - from students 
                      needing computer help to shop owners wanting M-Pesa integration.
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
                      First Floor Room No.30 - Come visit us for friendly help and honest advice.
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
            <div className="text-4xl font-bold text-brand-green mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-brand-red mb-2">KES 5K+</div>
            <div className="text-muted-foreground">Starting Prices</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-brand-orange mb-2">Same Day</div>
            <div className="text-muted-foreground">Most Repairs</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">Daily</div>
            <div className="text-muted-foreground">We're Open</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;