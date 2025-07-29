import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Contact = () => {
  const { ref: sectionRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could add form submission logic
    alert('Thank you for your message! We will get back to you soon.');
  };

  const openSocialMedia = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/RealestTechnologies',
      twitter: 'https://twitter.com/Realesttech',
      instagram: 'https://instagram.com/RealestTech',
      youtube: 'https://youtube.com/RealestTechnologies',
      website: 'https://www.realesttechnologies.com'
    };
    
    const url = urls[platform as keyof typeof urls];
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <section ref={sectionRef} id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold border border-brand-green/20 hover:bg-brand-green/20 transition-all duration-300">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-brand-green to-brand-orange bg-clip-text text-transparent">Contact Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and bring your vision to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className={`lg:col-span-1 transition-all duration-1000 ${isInView ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <Card className="h-full hover:shadow-premium transition-all duration-500 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Reach Out to Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:0769925907" className="text-muted-foreground hover:text-brand-green transition-colors">
                      0769 925 907
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:realest.technologies@gmail.com" className="text-muted-foreground hover:text-brand-red transition-colors">
                      realest.technologies@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Nakuru Town Signature Building<br />
                      Opposite Naivas Supermarket<br />
                      First Floor Room No.30
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-200" onClick={() => openSocialMedia('facebook')}>
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-200" onClick={() => openSocialMedia('twitter')}>
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-pink-50 hover:border-pink-200" onClick={() => openSocialMedia('instagram')}>
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-red-50 hover:border-red-200" onClick={() => openSocialMedia('youtube')}>
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p>@Realest Technologies</p>
                    <p>@Realesttech</p>
                    <p>@Realest Tech</p>
                    <p>Realest Technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${isInView ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{animationDelay: '0.2s'}}>
            <Card className="hover:shadow-premium transition-all duration-500 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input type="tel" placeholder="Your phone number" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interest</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background" required>
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ip-camera">IP Camera Installation</option>
                      <option value="computer-sales">Computer Sales & Assembly</option>
                      <option value="drone-services">Drone Services</option>
                      <option value="wifi-installation">WiFi Installation</option>
                      <option value="pcb-design">PCB Design</option>
                      <option value="it-consultancy">IT Consultancy</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full group hover:shadow-glow transition-all duration-500 hover:scale-105" type="submit">
                    <Send className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Website */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-brand-green/5 to-brand-orange/5 border-brand-green/20">
            <CardContent className="p-0">
              <h3 className="font-semibold mb-2">Visit Our Website</h3>
              <p className="text-muted-foreground mb-4">www.realesttechnologies.com</p>
              <Button variant="outline" onClick={() => openSocialMedia('website')}>Visit Website</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;