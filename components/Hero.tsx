import { type } from "os";
import React from "react";
import { motion } from "framer-motion";
import RedButton from "./GreenButton";
import Image from "next/image";

const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

type Herotype = {
  heading: string;
  message: string;
};

const HeroNew = ({ heading, message }: Herotype) => {
  return (
    <motion.div
      variants={staggerContainer(1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center h-screen">
        {/* Overlay */}
        <motion.div
          variants={staggerContainer(1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-1/2 md:w-[40%]   z-[2] bg-gradient-to-r from-white/40 to-white/60 rounded-lg mb-24 md:mb-10 ml-[7rem]"
        >
          <motion.h1
            variants={textVariant(1)}
            className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase text-[#45ABCE]"
          >
            {heading}
          </motion.h1>
          <motion.p
            variants={textVariant(1.1)}
            className="py-5 text-xl text-[#76ABCE] text-justify"
          >
            {message}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="bg-[url('/assets/2023Ran.png')] bg-cover w-full lg:w-1/2 md:w-1/2 p-5 h-[80%] scale-[0.88] bg-center "
        />
      </div>
    </motion.div>
  );
};

export default HeroNew;
