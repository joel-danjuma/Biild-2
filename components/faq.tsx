"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
  {
    title: "Who are the developers ?",
    description:
      "We are a team of experienced developers with an average of 3 years of experience developing mobile and web applications. As we are a small team, you will work directly with a dedicated rep. Also, all design requests such as animations or illustrations are managed by our in house designers.",
  },
  {
    title: "What kind of applications can you develop?",
    description:
      "Our Developers are conversant with various technologies, and can develop most kinds of applications. We are specialized in developig web applications, mobile applications, API's and Web3 applications. ",
  },
  {
    title: "What Technology stack do you develop with?",
    description:
      "  Our Primary focus is developing for the web and mobile, as such, we work With NextJs, Flutter and Javascript on The front end. We also develop Web3 Applicatiions using Alchemy SDK to connect and deploy to any EVM blockchain.",
  },
  {
    title: "How fast will I receive my project?",
    description:
      "On average, most development requests are completed in 2 weeks or less. However, more complex requests can take longer.",
  },
  {
    title: "What if I don't like the design?",
    description:
      "We Provide up to two free revisions on design Projects, However, We Do not offer revisions for Mobile and Web Development projects, as all design revisions will be completed before the start of the development.",
  },

  {
    title: "Are there any refunds if I don't like the service?",
    description:
      "Due to the high quality nature of the work, there will be no refunds issued.",
  },
  {
    title: "Are there any refunds if I don't like the service?",
    description:
      "Due to the high quality nature of the work, there will be no refunds issued.",
  },
];

const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section id="faq" className="w-full h-full dark:bg-black pt-20 pb-20 p-4 ">
      <div className="w-full h-full container mx-auto flex flex-col items-center">
        <h1 className="lg:text-6xl text-4xl">FAQs</h1>
        <Accordion variant="light">
          <AccordionItem key="1" aria-label="Accordion 1" title={faqs[0].title}>
            {faqs[0].description}
            {/* {description} */}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title={faqs[1].title}>
            {faqs[1].description}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title={faqs[2].title}>
            {faqs[2].description}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title={faqs[3].title}>
            {faqs[3].description}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title={faqs[4].title}>
            {faqs[4].description}
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6" title={faqs[5].title}>
            {faqs[5].description}
          </AccordionItem>
          <AccordionItem key="7" aria-label="Accordion 7" title={faqs[6].title}>
            {faqs[6].description}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
