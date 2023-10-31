// import React from "react";
import { Divider } from "@nextui-org/react";
import { sendEmail } from "@/utils/sendEmail";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white w-full h-full pt-20 pb-20"
    >
      <form
        action={async (formData) => {
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
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Get Started
                </button>
              </div>
              {/* <Divider /> */}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
