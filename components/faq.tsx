"use client";
import { faqs } from "@/config/constants";
import SectionTitle from "./section-title";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  return (
    <section id="faq" className="w-full h-full p-4 pb-20 ">
      <SectionTitle title="FAQs">
        The most common questions answered.
      </SectionTitle>
      <div className="w-full h-full container mx-auto flex flex-col items-center">
        {/* <h1 className="lg:text-6xl text-4xl pt-10 pb-10">FAQs</h1> */}
        <Accordion variant="light">
          <AccordionItem key="1" aria-label="Accordion 1" title={faqs[0].title}>
            {faqs[0].description}
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
