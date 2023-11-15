"use client";
import { useRef } from "react";
import FormButton from "./formButton";
import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
  // Ref here is used to clear the inputs of the form
  const ref = useRef<HTMLFormElement>(null);
  return (
    <section id="contact" className="bg-black text-white w-full h-full pt-20">
      <form
        ref={ref}
        action={async (formData) => {
          // ref reset is used to clear the form and runs on the client side before SendEmail is invoked on the backend
          ref.current?.reset();
          await sendEmail(formData);
        }}
      >
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="lg:text-6xl text-4xl pt-10 pb-10">Contact Us</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We Look Forward to working with you on your next Big Project.{" "}
              <br />
              Contact us below if you have any more questions or are ready to
              commit to your new Project.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full flex flex-col items-center">
                <FormButton />
              </div>
            </div>
          </div>
          <div className="p-2 w-full pt-8 mt-8 space-y-5 border-t flex flex-col items-center border-gray-200 text-center">
            <a
              className="text-indigo-500 w-full"
              href="mailto:Leojjad@gmail.com"
              aria-label={`Biild@Gmail.com | Send us an Email`}
            >
              Biild@Gmail.com
            </a>
            {/* <div className="flex flex-row justify-center w-full">
              <a href="#" className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="ml-4 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="#" className="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
