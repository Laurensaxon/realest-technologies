import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollEnhancer from "@/components/ScrollEnhancer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <ScrollEnhancer />
      <Header />
      <Hero />
      <div className="pt-8">
        <Services />
        <Portfolio />
        <Blog />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;