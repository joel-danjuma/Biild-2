import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Inconsolata,
  Fira_Sans as Fira,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--inconsolata",
});

export const fira = Fira({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["cyrillic"],
});
