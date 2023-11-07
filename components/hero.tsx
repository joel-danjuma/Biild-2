"use client";
// import Image from "next/image";
import { HeroBg } from "./icons";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";

export default function Hero() {
  // bg-[url('../public/hole.svg')] dark:bg-[url('../public/hole-2.svg')] bg-no-repeat bg-cover bg-center
  return (
    <section>
      <div className="w-full h-[100vh] flex flex-row items-center justify-center gap-8 relative">
        <div className="lg:flex hidden dark:bg-black bg-white bg-opacity-70 dark:bg-opacity-70 absolute top-0 w-full h-full z-10"></div>
        {/* <div className="w-full h-full lg:flex hidden justify-center relative ">
          <HeroBg />
        </div> */}

        <div className="flex flex-col justify-center lg:p-0 p-4 text-center z-20 absolute top-0 lg:pt-24 pt-20 h-full w-full ">
          <h1 className={title({ size: "xl" })}>
            Innovative <br />{" "}
            <span
              className={`${title({ color: "violet", size: "xl" })} pt-5 pb-5`}
            >
              Web
            </span>{" "}
            <br /> Design And Development Firm &nbsp;
          </h1>

          <h2 className={`${subtitle({ size: "sm" })} pt-4 pb-4`}>
            Focused on Responsive, Fast and Modern UI.
          </h2>
          <div className="flex justify-center pt-5 pb-5">
            <Link
              href={"#contact"}
              className={buttonStyles({
                color: "primary",
                radius: "lg",
                variant: "shadow",
                size: "lg",
              })}
            >
              Get Started With Us
            </Link>
          </div>
          <div className="z-20">
            <small>Designs that are gauranteed to inspire 🚀</small>
          </div>
        </div>
      </div>
    </section>
  );
}
