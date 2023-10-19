"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section id="faq" className="w-full h-screen bg-gray-300 pb-20 p-4 ">
      <div className="w-full h-full container mx-auto flex flex-col items-center">
        <h1 className="lg:text-6xl text-4xl lg:pt-20 lg:pb-20 pt-10 pb-10">
          FAQs
        </h1>
        <Accordion variant="light">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6" title="Accordion 6">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="7" aria-label="Accordion 7" title="Accordion 7">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      {/* <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div>
          <div className="max-w-2xl">
            <p className="text-4xl text-black">
              Frequent questions and answers
            </p>
            <p className="max-w-2xl mt-4 text-lg tracking-tight text-gray-600">
              Because we wonder all day around
            </p>
          </div>
        </div>
        <div className="w-full mx-auto mt-12 text-left">
          <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="p-4 mx-auto lg:max-w-7xl lg:p-0">
              <ul
                role="list"
                className="grid grid-cols-2 gap-4 list-none lg:grid-cols-3 lg:gap-12"
              >
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Can I used Lexingtøn Themes for my site?
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Upswing securities passively index inverse bondholders
                    capitalization financial health Moodys debt managed.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Will i get updates?
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Upswing securities passively index inverse bondholders
                    capitalization financial health Moodys debt managed.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      How much do disputes cost?
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Upswing securities passively index inverse bondholders
                    capitalization financial health Moodys debt managed.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      How do refunds work?
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Plus, our platform is constantly evolving to meet the
                    changing needs.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Is there a fee to use Google Pay?
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Plus, our platform is constantly evolving to meet the
                    changing needs.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Customer support
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    Plus, our platform is constantly evolving to meet the
                    changing needs.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Faq;
