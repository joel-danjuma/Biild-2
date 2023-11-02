"use client";
import { useRef } from "react";
import FormButton from "./formButton";
import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
  // Ref here is used to clear the inputs of the form
  const ref = useRef<HTMLFormElement>(null);
  return (
    <section
      id="contact"
      className="bg-black text-white w-full h-full pt-20 pb-20"
    >
      <form
        ref={ref}
        action={async (formData) => {
          // ref reset runs client side before SendEmail is invoked on the backend
          ref.current?.reset();
          await sendEmail(formData);
        }}
      >
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="lg:text-6xl text-4xl pt-10 pb-10">Contact Us</h1>
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
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">{/*  */}</div>
              <FormButton />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
