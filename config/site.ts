export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Biild",
  description:
    "Creating beautiful and functional websites to fit your design expectations.",
  navItems: [
    {
      label: "Benefits",
      href: "#benefits",
    },
    // {
    //   label: "Our Work",
    //   href: "#portfolio",
    // },
    // {
    //   label: "Team",
    //   href: "#team",
    // },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "FAQs",
      href: "#faq",
    },
  ],
  navMenuItems: [
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Team",
      href: "#team",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "FAQs",
      href: "#faqs",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
