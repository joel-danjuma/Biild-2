// import { SlCalender } from "react-icons/sl";
// import { MdLocalPhone } from "react-icons/md";
// import { BsArrowCounterclockwise } from "react-icons/bs";
// import { LiaShippingFastSolid } from "react-icons/lia";
import Image from "next/image";
import logo from "@/public/vercel.svg";

const features = [
  {
    logo: logo,
    description:
      "We have a quick response and delivery time for you web development needs",
  },
  {
    logo: logo,
    description:
      "We have a quick response and delivery time for you web development needs",
  },
  {
    logo: logo,
    description:
      "We have a quick response and delivery time for you web development needs",
  },
];

const Features = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="grid w-full grid-cols-1 mx-auto lg:grid-cols-3">
          <div className="max-w-md p-6 mx-auto lg:text-center">
            <div className="flex items-center justify-center w-32 h-32 mx-auto ">
              <Image src={logo} alt="logo" width={32} height={32}></Image>
            </div>
            <p className="mt-4 text-lg font-medium leading-6 text-black">
              Developer experience
            </p>
            <p className="mt-3 text-base text-gray-500">
              I am so happy, my dear friend, so absorbed in the exquisite sense
              of mere tranquil existence, that I neglect my talents.
            </p>
            <div className="flex justify-center gap-3 mt-10">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                href="#"
              >
                <span> Read more &nbsp; → </span>
              </a>
            </div>
          </div>
          <div className="max-w-md p-6 mx-auto lg:text-center">
            <div className="flex items-center justify-center w-32 h-32 mx-auto ">
              <Image src={logo} alt="logo" width={32} height={32}></Image>
            </div>
            <p className="mt-4 text-lg font-medium leading-6 text-black">
              Designers go-to app
            </p>
            <p className="mt-3 text-base text-gray-500">
              I am so happy, my dear friend, so absorbed in the exquisite sense
              of mere tranquil existence, that I neglect my talents.
            </p>
            <div className="flex justify-center gap-3 mt-10">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                href="#"
              >
                <span> Read more &nbsp; → </span>
              </a>
            </div>
          </div>
          <div className="max-w-md p-6 mx-auto lg:text-center">
            <div className="flex items-center justify-center w-32 h-32 mx-auto ">
              <Image src={logo} alt="logo" width={32} height={32}></Image>
            </div>
            <p className="mt-4 text-lg font-medium leading-6 text-black">
              Designers go-to app
            </p>
            <p className="mt-3 text-base text-gray-500">
              I am so happy, my dear friend, so absorbed in the exquisite sense
              of mere tranquil existence, that I neglect my talents.
            </p>
            <div className="flex justify-center gap-3 mt-10">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                href="#"
              >
                <span> Read more &nbsp; → </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>
    //   <div className="mx-w-xl h-full mt-10 lg:justify-center lg:flex lg:items-center hidden ">
    //     <div className="grid grid-flow-col grid-cols-4 gap-4 lg:text-4xl text-2xl text-center text-black justify-between w-full">
    //       {/* <LiaShippingFastSolid /> */}
    //       {features.map((feature, i) => (
    //         <div
    //           key={i}
    //           className="flex flex-col items-center justify-center gap-10"
    //         >
    //           <Image
    //             src={feature.logo}
    //             alt="logo"
    //             width={32}
    //             height={32}
    //           ></Image>
    //           <h1 className="lg:text-lg text-sm">{feature.description}</h1>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Features;
