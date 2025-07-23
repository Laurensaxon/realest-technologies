import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const openSocialMedia = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/RealestTechnologies',
      twitter: 'https://twitter.com/Realesttech',
      instagram: 'https://instagram.com/RealestTech',
      youtube: 'https://youtube.com/RealestTechnologies'
    };
    
    const url = urls[platform as keyof typeof urls];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b6e04550-d39f-454a-b17c-0bbfa4c78c66.png" 
                alt="Realest Technologies Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">Realest</h1>
                <p className="text-brand-orange -mt-1">Technologies</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Rendering impeccable technology solutions that transform businesses and empower innovation. 
              Your trusted partner for all your technology needs in Nakuru and beyond.
            </p>

            <div className="space-y-3">
              <a href="tel:0769925907" className="flex items-center space-x-3 hover:text-brand-orange transition-colors">
                <Phone className="w-5 h-5 text-brand-orange" />
                <span>0769 925 907</span>
              </a>
              <a href="mailto:realest.technologies@gmail.com" className="flex items-center space-x-3 hover:text-brand-orange transition-colors">
                <Mail className="w-5 h-5 text-brand-orange" />
                <span>realest.technologies@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>Nakuru Town Signature Building, First Floor Room No.30</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-brand-orange transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-brand-orange transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-brand-orange transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-brand-orange transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/80">Web Development</li>
              <li className="text-white/80">IP Camera Installation</li>
              <li className="text-white/80">Computer Sales</li>
              <li className="text-white/80">Drone Services</li>
              <li className="text-white/80">WiFi Setup</li>
              <li className="text-white/80">PCB Design</li>
              <li className="text-white/80">IT Consultancy</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/80">
            <p>&copy; 2024 Realest Technologies. All rights reserved.</p>
            <p className="text-sm">www.realesttechnologies.com</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-white/80">Follow us:</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-brand-orange" onClick={() => openSocialMedia('facebook')}>
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-brand-orange" onClick={() => openSocialMedia('twitter')}>
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-brand-orange" onClick={() => openSocialMedia('instagram')}>
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-brand-orange" onClick={() => openSocialMedia('youtube')}>
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Back to Top */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop}
            className="text-white hover:bg-white/10 hover:text-brand-orange"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;