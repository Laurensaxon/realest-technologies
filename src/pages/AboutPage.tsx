import Header from "@/components/Header";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <About />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;