import { type } from "os";
import React from "react";
import { motion } from "framer-motion";
import RedButton from "./GreenButton";
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
      <div className="bg-[url('/assets/KeybDC.jpg')] flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <motion.div
          variants={staggerContainer(1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="absolute bg-white/20 z-[2]"
        />
        <motion.div
          variants={staggerContainer(1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full lg:w-1/2 md:w-1/2 p-5 text-[#3C6255] z-[2] mt-[-10rem] bg-gradient-to-r from-white/40 to-white/60 rounded-lg"
        >
          <motion.h1
            variants={textVariant(1)}
            className="text-5xl font-bold uppercase"
          >
            {heading}
          </motion.h1>
          <motion.p variants={textVariant(1.1)} className="py-5 text-xl ">
            {message}
          </motion.p>
          <RedButton title="Check Out Now!" url="/orderpage"/>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroNew;
