"use client";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import Benefits from "@/components/benefits";
import Services from "@/components/services";
import Divider from "@/components/divider-section";
import MarqueeComponent from "@/components/marquee";
import { Doodle2, HeroDoodle, Person } from "@/components/icons";

const Home = () => {
  return (
    <section>
      <Hero />
      <MarqueeComponent />
      <Benefits />
      {/* <Divider props={[{ image: HeroDoodle, size: 100 }]} /> */}
      <Services />
      {/* <Divider props={[{ image: Doodle2, size: 100 }]} /> */}
      <Pricing />
      <Faq />
      {/* <Blog /> */}
      <Cta />
      <Footer />
    </section>
  );
};

export default Home;
