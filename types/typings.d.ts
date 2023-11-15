import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

export type FeaturesProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export type DividerProps = {
  props: {
    image: React.FC<IconSvgProps>;
    size: number;
  }[];
};

export interface EmailTemplateProps {
  name: string;
  email?: string;
  message: string;
}

export interface Tier {
  price: string;
  title: string;
  subtitle: string;
  benefits: string[];
}

export type FeatureType = {
  title: string;
  description: string;
};

export type AnimatedTextProps = {
  text: string;
  // el?: typeof JSX.IntrinsicElements;
  el?: keyof JSX.IntrinsicElements;
  className: string;
};
