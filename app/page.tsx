"use client";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Benefits from "@/components/benefits";
import Services from "@/components/services";
import MarqueeComponent from "@/components/marquee";
import Testimonials from "@/components/testimonials";

const Home = () => {
  return (
    <section className="scroll-smooth">
      <Hero />
      <MarqueeComponent />
      <Benefits />
      <Testimonials />
      <Services />
      <Faq />
      <Cta />
      <Footer />
    </section>
  );
};

export default Home;
