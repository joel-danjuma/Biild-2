import { Clock } from "./icons";
import { Diamond } from "./icons";
import { Checkmark } from "./icons";
import Features from "@/components/features";
import { features } from "@/config/constants";
import Testimonials from "@/components/testimonials";
import SectionTitle from "@/components/section-title";
import AnimateText from "./motion/animateText";

const Benefits = () => {
  return (
    <section id="benefits" className="w-full h-full bg-gray-200 p-4">
      <SectionTitle title="We develop great websites that will you grow your business">
        {/* <AnimateText
          text=" Design as you know it is out the door. Design as you want it just
        arrived."
          className=""
          el="p"
        ></AnimateText> */}
        Design as you know it is out the door. Design as you want it just
        arrived.
      </SectionTitle>
      <div className="grid lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-1 grid-flow-col grid-cols-1 grid-rows-3 text-center -mt-10">
        <Features
          title={features[0].title}
          description={features[0].description}
        >
          <Clock />
        </Features>
        <Features
          title={features[1].title}
          description={features[1].description}
        >
          <Diamond />
        </Features>
        <Features
          title={features[2].title}
          description={features[2].description}
        >
          <Checkmark />
        </Features>
      </div>
      <Testimonials />
    </section>
  );
};

export default Benefits;
