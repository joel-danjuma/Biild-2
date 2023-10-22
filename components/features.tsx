import { FeaturesProps } from "@/types";

const Features = ({ title, description, children }: FeaturesProps) => {
  return (
    <section>
      <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full flex lg:flex-row flex-col mx-auto justify-center">
          <div className="max-w-md p-6 mx-auto lg:text-center">
            <div className="flex items-center justify-center w-32 h-32 mx-auto ">
              {children}
            </div>
            <p className="mt-4 text-xl font-medium leading-6 text-black">
              {title}
            </p>
            <p className="mt-3 text-lg text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
