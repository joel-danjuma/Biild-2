"use client";
// import Image from "next/image";
import { HeroBg } from "./icons";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { FallInPlace } from "./motion/fallInPlace";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

// import { GithubIcon } from "@/components/icons";

export default function Hero() {
  // bg-[url('../public/hole.svg')] dark:bg-[url('../public/hole-2.svg')] bg-no-repeat bg-cover bg-center
  return (
    <section className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-12 relative z-0 ">
      <div className="dark:bg-black bg-white bg-opacity-70 dark:bg-opacity-70 absolute top-0 w-full h-full z-10"></div>
      <div className="w-full h-full lg:flex hidden justify-center ">
        {" "}
        <HeroBg />
      </div>
      {/* <FallInPlace className="w-full h-full flex justify-center" delay={0.2}> */}
      <div className="inline-block max-w-4xl text-center justify-center space-y-8 z-20 absolute lg:top-20 top-10 lg:pt-30 pt-20">
        <h1 className={title({ color: "violet", size: "lg" })}>Biild&nbsp;</h1>
        <br />
        <h1 className={title({ size: "lg" })}>An &nbsp;</h1>
        <h1 className={title({ size: "lg" })}>Innovative &nbsp;</h1>
        <br />
        <h1 className={title({ color: "violet", size: "lg" })}>Web&nbsp;</h1>
        <br />
        <h1 className={title({ size: "lg" })}>Design & Development Firm.</h1>
        <h2 className={subtitle({ size: "sm" })}>
          Focused on Responsive, Fast and Modern UI.
        </h2>
        <div className="flex justify-center">
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
      {/* </FallInPlace> */}
    </section>
  );
}
