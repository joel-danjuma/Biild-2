import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fira } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

// export const generateMetadata = async () => {
//   return {
//     title: "Expert Web Development Services | Biild",
//     description:
//       "Biild offers UI/UX design, API development, WEB3 apps, e-commerce, and more. Boost your online presence with our top-notch web development services.",
//   };
// };

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
