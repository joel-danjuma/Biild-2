"use client";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import Benefits from "@/components/benefits";
import Services from "@/components/services";
import Divider from "@/components/divider-section";
import MarqueeComponent from "@/components/marquee";
import { Doodle, HeroDoodle } from "@/components/icons";

const Home = () => {
  return (
    <section className="scroll-smooth">
      <Hero />
      <MarqueeComponent />
      <Benefits />
      <Divider
        props={[
          { image: HeroDoodle, size: 100 },
          // { image: Doodle, size: 100 },
          // { image: Doodle, size: 100 },
        ]}
      />
      <Services />
      <Divider
        props={[
          { image: Doodle, size: 100 },
          { image: Doodle, size: 100 },
          { image: Doodle, size: 100 },
        ]}
      />
      <Pricing />
      <Divider
        props={[
          { image: Doodle, size: 100 },
          { image: Doodle, size: 100 },
          { image: Doodle, size: 100 },
        ]}
      />
      <Faq />
      <Cta />
      <Footer />
    </section>
  );
};

export default Home;
