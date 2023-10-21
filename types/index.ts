import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

//  interface MySVGProps extends React.SVGProps<SVGSVGElement> {
//   "xmlns:serif"?: string;
// }

// export const svgProps: MySVGProps = {
//   version: "1.1",
//   id: "Layer_1",
//   "xmlns:serif": "http://www.serif.com/",

//   // other props...
// };
