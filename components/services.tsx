import SectionTitle from "@/components/section-title";
import { Divider } from "@nextui-org/react";

const services = [
  "Websites",
  "Mobile apps",
  "Logos & branding",
  "Design systems",
  "SAAS",
  "Wireframes",
  "Stationery",
  "Pitch decks",
  "Slide decks",
  "Direct mail",
  "Infographics",
  "Brochures",
  "Signage",
  "Brand guides",
  "Social media graphics",
  "Billboards",
  "Trade show banners",
  "Email graphics",
  "Resumes",
  "Business cards",
  "Packaging",
  "Blog graphics",
  "Digital ads",
  "Icons",
];
const Services = () => {
  return (
    <section id="services" className="p-4 pb-20">
      <SectionTitle title=" Apps, websites, logos & more.">
        These are the services we offer.
      </SectionTitle>
      <div className="flex justify-center">
        <div className="lg:container lg:mx-auto min-h-screen w-full lg:border-4 border-4 border-black dark:border-white lg:p-12 p-4 lg:grid lg:grid-cols-3 lg:grid-rows-7 grid-cols-1 lg:gap-20 gap-8">
          {services.map((service: string, i: number) => {
            return (
              <ul
                key={i}
                className="flex flex-col justify-center text-justify text-xl"
              >
                <li>{service}</li>
                <Divider />
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
