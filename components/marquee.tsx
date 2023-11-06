"use client";
import Image from "next/image";
import { stackLogos } from "@/config/constants";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <section>
      <div className="flex items-center gap-10 w-screen h-28 pt-4 pb-4 bg-black relative justify-center z-20">
        <Marquee>
          {stackLogos.map((item, i: any) => (
            <Image
              key={i}
              src={item.image}
              alt={item.name}
              className={`lg:w-28 lg:h-28 lg:px-7 px-4 w-20 h-20`}
            ></Image>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeComponent;
