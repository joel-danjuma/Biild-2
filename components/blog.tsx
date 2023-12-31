import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-200 p-4 pb-20">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <ol
          className="relative grid grid-cols-1 gap-3 lg:grid-cols-2 sm:grid-cols-2"
          role="list"
        >
          <li className="space-y-3 px-3 py-2.5 lg:px-6 lg:py-5  bg-white">
            <a className="group" href="#">
              <div>
                <div className="py-3">
                  <div className="flex-shrink-0 block">
                    <div className="flex items-center">
                      <div></div>
                      <div className="ml-3">
                        <p className="text-sm text-black group-hover:text-blue-500">
                          Mikaela Andreuzza
                          <span className="text-gray-500">in</span>
                          Investiments ·
                          <span className="text-gray-500">4 days ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-medium leading-6 text-black">
                  The Hidden Danger of QR Codes
                </h3>
              </div>
              <p className="mt-5 text-base text-gray-500 line-clamp-3">
                In this article, I will be referring to various amazing Authors
                and resources I strongly recommend that you separately study
                them on your own. The references list is at the end of the
                article, enjoy reading! I will be referring to various amazing.
                In this article, I will.
              </p>
              <div className="py-3">
                <div>
                  <div className="inline-flex items-center justify-between w-full">
                    <div>
                      <p className="text-sm text-black group-hover:text-blue-500">
                        Investiments
                        <span className="text-gray-500">·</span>
                        10 min read
                      </p>
                    </div>
                    <div>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="space-y-3 px-3 py-2.5 lg:px-6 lg:py-5  bg-white">
            <a className="group" href="#">
              <div>
                <div className="py-3">
                  <div className="flex-shrink-0 block">
                    <div className="flex items-center">
                      <div></div>
                      <div className="ml-3">
                        <p className="text-sm text-black group-hover:text-blue-500">
                          Ulaffson
                          <span className="text-gray-500">in</span>
                          Investiments ·
                          <span className="text-gray-500">4 days ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-medium leading-6 text-black">
                  Metamask - Is It Really A Wallet?
                </h3>
              </div>
              <p className="mt-5 text-base text-gray-500 line-clamp-3">
                Each of us lives our own life. Everyday routines, people we
                meet, things we experience, the music we listen to, the food we
                eat, the culture that surrounds us, or even the way our
                apartment is set up. Every little detail impacts our lives in
                some way.
              </p>
              <div className="py-3">
                <div>
                  <div className="inline-flex items-center justify-between w-full">
                    <div>
                      <p className="text-sm text-black group-hover:text-blue-500">
                        Investiments
                        <span className="text-gray-500">·</span>
                        10 min read
                      </p>
                    </div>
                    <div>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Blog;
