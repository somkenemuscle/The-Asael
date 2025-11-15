'use client';
import HeroSection from "@/app/components/ui/HeroSection";
import Services from "./components/ui/Services";
import Gallery from "./components/ui/Gallery";
import Footer from "./components/ui/Footer";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Gallery />
      <Footer />
    </div>
  )
}


export default Homepage;