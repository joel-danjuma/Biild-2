"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon } from "@/components/icons";

//

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section className="w-full h-full flex justify-center relative">
      <NextUINavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className=" lg:max-w-xl max-w-full lg:p-0 p-4 lg:h-30 h-20 lg:rounded-full rounded-none fixed lg:top-5 top-0 left-0 right-0 ml-auto mr-auto "
      >
        {/* DESKTOP NAV */}
        <NavbarContent justify="start" className="gap-3 max-w-fit">
          <NavbarItem>
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
              aria-label={`Biild`}
            >
              <p className="font-bold text-inherit">Biild</p>
            </NextLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <ul className="hidden lg:flex justify-center gap-4 ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} isActive>
                <NextLink
                  href={item.href}
                  aria-label={`${item.label} section`}
                  // onClick={() => {
                  //   console.log(process.env.URL);
                  // }}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="Twitter"
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/* MOBILE MENU */}

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-12 flex flex-col gap-4 text-3xl">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={item.href}
                  aria-label={`${item.label} section`}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </section>
  );
};
