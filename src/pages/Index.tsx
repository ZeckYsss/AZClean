import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";

import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import BeforeAfterSimple from "@/components/BeforeAfterSimple";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero /><br></br><br></br><br></br>
        <BeforeAfterSimple />
        <br></br><br></br><br></br>
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
