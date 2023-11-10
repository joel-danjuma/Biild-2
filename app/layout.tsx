import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fira } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

import clsx from "clsx";

export const metadata: Metadata = {
  metadataBase: new URL("https://biild.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fira.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className=" max-w-screen">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
