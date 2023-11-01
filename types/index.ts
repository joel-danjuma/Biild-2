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
  message: string;
  email?: string;
  name: string;
}
