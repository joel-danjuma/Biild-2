import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full h-full lg:px-0 px-2 pt-20 pb-20">
      <div className="px-8 py-24 mx-auto max-w-7xl lg:px-16 md:px-12 xl:px-36 dark:bg-slate-900 bg-gray-400 ">
        <div className="max-w-2xl mx-auto text-center">
          <p className="pb-4 text-base text-black">
            When building projects, going from an idea to a working version is
            crucial. Unwrappeds components have been extremely useful for
            quickly mocking up a landing page. I can now focus more time on my
            app, and less time worrying about the first impression my project
            will get. I really love the attention to detail in these blocks.
            Michael has always impressed me with the quality he produces.
          </p>
          <div className="justify-center mt-4 space-y-4">
            <p className="text-sm font-medium text-black">
              Sam Samuel, Lead marketing specialist -
              <span className="font-medium text-blue-500">Company</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
