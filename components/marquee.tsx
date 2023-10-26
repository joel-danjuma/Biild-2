"use client";
import Image from "next/image";
import next from "@/public/nextjs.svg";
import python from "@/public/python.svg";
import nodeJs from "@/public/nodeJS.svg";
import Marquee from "react-fast-marquee";
import hardhat from "@/public/hardhat.svg";
import express from "@/public/express.svg";
import alchemy from "@/public/alchemy.svg";
import flutter from "@/public/flutter.svg";
import ethereum from "@/public/ethereum.svg";
import chainlink from "@/public/chainlink.svg";
import javascript from "@/public/javascript.svg";
// import { motion } from "framer-motion";

const stackLogos = [
  {
    name: "Javascript Logo",
    image: javascript,
    size: 100,
  },
  {
    name: "Python Logo",
    image: python,
    size: 100,
  },
  {
    name: "NodeJs Logo",
    image: nodeJs,
    size: 100,
  },
  {
    name: "Express Logo",
    image: express,
    size: 100,
  },
  {
    name: "Next Logo",
    image: next,
    size: 100,
  },
  {
    name: "Flutter Logo",
    image: flutter,
    size: 100,
  },
  {
    name: "Alchemy Logo",
    image: alchemy,
    size: 100,
  },
  {
    name: "Next Logo",
    image: next,
    size: 100,
  },
  {
    name: "Chainlink Logo",
    image: chainlink,
    size: 100,
  },
  {
    name: "Hardhat Logo",
    image: hardhat,
    size: 100,
  },
  {
    name: "Next Logo",
    image: next,
    size: 100,
  },
  {
    name: "Ethereum Logo",
    image: ethereum,
    size: 100,
  },

  {
    name: "Next Logo",
    image: next,
    size: 100,
  },
];

const MarqueeComponent = () => {
  return (
    <section className="flex items-center gap-10 w-screen h-28 pt-4 pb-4 bg-black relative ">
      <div className="w-[100vw] flex items-center overflow-x-hidden absolute top-0">
        {/* <motion.div
          // key={i}
          animate={{
            x: [0, -1500],
          }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-full absolute flex "
        > */}
        <Marquee>
          {stackLogos.map((item, i: any) => (
            <Image
              key={i}
              src={item.image}
              alt={item.name}
              // width={item.size}
              // height={item.size}
              className={`lg:w-28 lg:h-28 lg:px-7 px-4 w-20 h-20`}
            ></Image>
          ))}
        </Marquee>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default MarqueeComponent;
