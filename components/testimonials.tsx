import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full h-full lg:px-0 px-2 pt-20 pb-20">
      <div className="px-8 py-24 mx-auto max-w-7xl lg:px-16 md:px-12 xl:px-36 dark:bg-slate-900 bg-gray-400 rounded-lg ">
        <div className="max-w-2xl mx-auto text-center">
          <p className="pb-4 text-base text-black">
            When building projects, going from an idea to a working version is
            crucial. We at Biild are focused on transforming your ideas into
            working Applications that fit your needs. We are always about the
            details and never spare the time and effort required for the quality
            we produce.
          </p>
          <div className="justify-center mt-4 space-y-4">
            <p className="text-sm font-medium text-black">
              Joel Danjuma, Lead developer - Biild
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
