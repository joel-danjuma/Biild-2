import { Tick } from "./icons";
import { Tier } from "@/types/typings";
import { tiers } from "@/config/constants";
import SectionTitle from "./section-title";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-200 p-4 pb-20">
      <SectionTitle title="Pricing">
        These are our offers and different tiers of service
      </SectionTitle>
      <div className="relative flex flex-col justify-center items-center w-full px-8  mx-auto md:px-12 lg:px-14 max-w-7xl">
        <div className="space-y-12 overflow-hidden bg-white border lg:rounded-3xl lg:p-20 lg:space-y-0 w-full">
          <div className="relative flex lg:flex-row flex-col  w-full p-4 ">
            {tiers.map((tier: Tier, i: number) => {
              return (
                <div key={i} className="w-full rounded-none py-4 lg:px-4">
                  <p className="flex items-baseline mt-4 text-black">
                    <span className="lg:text-3xl text-2xl font-bold tracking-tight text-black">
                      {tier.price}
                    </span>
                  </p>
                  <div className="lg:px-4 lg:py-5 px-2 border-b">
                    <div className="flex flex-wrap items-baseline -mt-2 -ml-2">
                      <h3 className="mt-2 text-lg text-black">{tier.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {tier.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4">
                    <a
                      href={process.env.URL + "/#contact"}
                      className="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                      aria-label={`Get Started`}
                    >
                      Get Started
                    </a>
                  </div>
                  {tier.benefits.map((benefit: string, i: number) => {
                    return (
                      <div
                        key={i}
                        role="list"
                        className="flex flex-col mt-10 text-sm text-black"
                      >
                        <div className="flex flex-row gap-2">
                          <Tick size={24} />
                          <ul>
                            <li className="flex items-center">
                              <span className="ml-4"> {benefit} </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
