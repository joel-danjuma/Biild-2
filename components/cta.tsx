"use client";
import { Button } from "@nextui-org/react";
import ContactForm from "./contactForm";

const Cta = () => {
  return (
    <ContactForm />
    // <section className="pt-20 pb-20 relative w-full dark:bg-gray-800 bg-black text-white">
    //   <div className="relative items-center w-full px-5 py-7 mx-auto md:px-12 lg:px-16 max-w-7xl">
    //     <div className="max-w-3xl mx-auto text-center lg:p-10">
    //       <div>
    //         <p className="text-5xl tracking-tight dark:text-black">
    //           Subscribe and get{" "}
    //           <span className="lg:block">benefits from our newsletter</span>
    //         </p>
    //         <p className="mt-4 text-lg tracking-tight dark:text-gray-600">
    //           If you could kick the person in the pants responsible for most of
    //           your trouble, you wouldnt sit for a month. Imagine that, fam.
    //         </p>
    //       </div>
    //       <div className="flex flex-row justify-center items-center max-w-sm pt-8 pb-12 mx-auto md:pt-6">

    //         <Button
    //           color="primary"
    //           variant="bordered"
    //           size="lg"
    //           className="p-4"
    //         >
    //           <h1 className="p-4 text-3xl">Get Started</h1>
    //         </Button>
    //       </div>
    //       <div className="mx-auto sm:max-w-lg sm:flex absolute bottom-0 left-0 right-0 ml-auto mr-auto">
    //         <p className="mx-auto mt-3 text-xs text-gray-500">
    //           By subscribing, you agree with Biilds’s{" "}
    //           <a
    //             className="text-blue-600 hover:text-black unerline"
    //             target="_blank"
    //             href="#"
    //           >
    //             Terms of Service{" "}
    //           </a>
    //           and
    //           <a
    //             className="text-blue-600 hover:text-black"
    //             target="_blank"
    //             href="#"
    //           >
    //             {" "}
    //             Privacy Policy
    //           </a>
    //           .
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Cta;
