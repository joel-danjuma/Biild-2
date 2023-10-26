import { Clock } from "./icons";
import { Radial } from "./icons";
import { Diamond } from "./icons";
import { Checkmark } from "./icons";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import SectionTitle from "@/components/section-title";

type FeatureType = {
  title: string;
  description: string;
};

const features: FeatureType[] = [
  {
    title: "Quick delivery",
    description:
      "Receive your design and development projects within a few business days on average, Monday to Monday.",
  },
  {
    title: "Unique and all yours",
    description:
      "Each project is unique and we strive to produce original code and designs made especially for you.",
  },
  {
    title: "Top-notch quality",
    description:
      "We put in our utmost into each project, and it definately shows, we aim for the best quality",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="w-full h-full p-4 bg-gray-200 )">
      <SectionTitle title="We don't try to reinvent the wheel We Just develop Imaginatively">
        Design as you know it is out the door. Design as you want it just
        arrived.
      </SectionTitle>
      <div className="grid lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-1 grid-flow-col grid-cols-1 grid-rows-3">
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
