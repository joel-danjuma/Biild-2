import { Tick } from "./icons";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-200 pt-20 pb-20">
      <div className="relative flex flex-col justify-center items-center w-full px-8  mx-auto md:px-12 lg:px-16 max-w-7xl">
        <h1 className="lg:text-6xl text-4xl pb-20">Pricing</h1>
        <div className="space-y-12 overflow-hidden bg-white border lg:rounded-3xl lg:p-20 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div className="relative flex flex-col p-4">
            <div className="flex-1">
              <p className="flex items-baseline mt-4 text-black">
                <span className="text-5xl font-light tracking-tight text-black">
                  $249
                </span>
              </p>
              <div className="px-4 py-5 border-b">
                <div className="flex flex-wrap items-baseline -mt-2 -ml-2">
                  <h3 className="mt-2 text-lg text-black">
                    Great Team License
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    For SAAS, personal &amp; clients
                  </p>
                </div>
              </div>
              <div className="flex">
                <a
                  href="#"
                  className="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  aria-describedby="tier-hobby"
                >
                  Button
                </a>
              </div>
              <ul
                role="list"
                className="flex flex-col order-last mt-10 text-sm text-black gap-y-3"
              >
                <li className="flex items-center">
                  <Tick />

                  <span className="ml-4"> Connect 1 websites </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Connect up to 2 bank accounts </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Track up to 15 credit cards </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Analytics support </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Export up to 3 months data </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex flex-col p-4">
            <div className="flex-1">
              <p className="flex items-baseline mt-4 text-black">
                <span className="text-5xl font-light tracking-tight text-black">
                  $59
                </span>
              </p>
              <div className="px-4 py-5 border-b">
                <div className="flex flex-wrap items-baseline -mt-2 -ml-2">
                  <h3 className="mt-2 text-lg text-black">Standard License</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    For personal and clients
                  </p>
                </div>
              </div>
              <div className="flex">
                <a
                  href="#"
                  className="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  aria-describedby="tier-company"
                >
                  Button
                </a>
              </div>
              <ul
                role="list"
                className="flex flex-col order-last mt-10 text-sm text-black gap-y-3"
              >
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Connect 80 websites </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Connect up to 5 bank accounts </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Track up to 50 credit cards </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Analytics support </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Export up to 12 months data </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Cloud service 24/7 </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Track in multiple users </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex flex-col p-4">
            <div className="flex-1">
              <p className="flex items-baseline mt-4 text-black">
                <span className="text-5xl font-light tracking-tight text-black">
                  $0
                </span>
              </p>
              <div className="px-4 py-5 border-b">
                <div className="flex flex-wrap items-baseline -mt-2 -ml-2">
                  <h3 className="mt-2 text-lg text-black">Test license</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Great for testing &amp; understanding.
                  </p>
                </div>
              </div>
              <div className="flex">
                <a
                  href="#"
                  className="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  aria-describedby="tier-hobby"
                >
                  Button
                </a>
              </div>
              <ul
                role="list"
                className="flex flex-col order-last mt-10 text-sm text-black gap-y-3"
              >
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Connect unlimited websites </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Connect up to 15 bank accounts </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Track up to 200 credit cards </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Analytics support </span>
                </li>
                <li className="flex items-center">
                  <Tick />
                  <span className="ml-4"> Export up to 24 months data </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
