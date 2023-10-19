import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-12 relative bg-[url('../public/hole.svg')] dark:bg-[url('../public/hole-2.svg')] bg-no-repeat bg-cover bg-center z-0">
      <div className="dark:bg-black light:bg-white/20 light:shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur dark:backdrop-blur-0 dark:bg-opacity-80 absolute top-0 w-full h-full z-10"></div>
      <div className="inline-block max-w-4xl text-center justify-center space-y-4 z-20 pt-16">
        <h1 className={title({ size: "xl" })}>Innovative &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "xl" })}>Web&nbsp;</h1>
        <br />
        <h1 className={title({ size: "xl" })}>Design & Development Firm.</h1>
        <h2 className={subtitle({ size: "sm" })}>
          Focused on Responsive, Fast and Modern UI.
        </h2>
      </div>

      <div className="flex z-20">
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
    </section>
  );
}
