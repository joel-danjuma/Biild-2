"use client";
// import Image from "next/image";
import { HeroBg } from "./icons";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

// import { GithubIcon } from "@/components/icons";

export default function Hero() {
  // bg-[url('../public/hole.svg')] dark:bg-[url('../public/hole-2.svg')] bg-no-repeat bg-cover bg-center
  return (
    <section className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-12 relative  z-0 ">
      <div className="dark:bg-black bg-white bg-opacity-70 dark:bg-opacity-70 absolute top-0 w-full h-full z-10"></div>
      <div className="w-full h-full lg:flex hidden justify-center ">
        {" "}
        <HeroBg />
      </div>

      <div className="inline-block max-w-4xl text-center justify-center space-y-12 z-20 absolute lg:top-20 top-10 lg:pt-30 pt-20 ">
        <h1 className={title({ size: "xl" })}>Innovative &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "xl" })}>Web&nbsp;</h1>
        <br />
        <h1 className={title({ size: "xl" })}>Design & Development Firm.</h1>
        <h2 className={subtitle({ size: "sm" })}>
          Focused on Responsive, Fast and Modern UI.
        </h2>
        <div className="flex justify-center">
          <Link
            isExternal
            as={NextLink}
            href={siteConfig.links.docs}
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
    </section>
  );
}
