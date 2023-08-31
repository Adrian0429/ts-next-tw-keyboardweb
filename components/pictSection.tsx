"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const featured = () => {
  return (
    <section id="PictSection">
      <motion.div
        variants={staggerContainer(1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8"
      >
        <header className="text-center">
          <motion.h2
            variants={textVariant(0.4)}
            className="text-xl font-bold text-gray-900 sm:text-4xl"
          >
            My Personal Favorites
          </motion.h2>

          <motion.p
            variants={textVariant(0.6)}
            className="max-w-md mx-auto mt-4 text-gray-500"
          >
            Here's some of my favorite art that i made either for a commision or
            just fun work
          </motion.p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <motion.div
              variants={textVariant(0.7)}
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="relative block group"
            >
              <Image
                src="/assets/haewon.jpg"
                alt=""
                width={"3000"}
                height={"3000"}
                className="object-scale-down w-full transition duration-500 aspect-square group-hover:opacity-90"
              />
            </motion.div>
          </li>

          <li>
            <motion.div
              variants={textVariant(0.7)}
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="relative block group"
            >
              <Image
                src="/assets/Lady.png"
                alt=""
                width={"3204"}
                height={"3204"}
                className="object-scale-down w-full transition duration-500 aspect-square group-hover:opacity-90"
              />
            </motion.div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <motion.div
              variants={textVariant(0.8)}
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="relative block group"
            >
              <Image
                src="/assets/GojoSatoru.jpg"
                alt=""
                width={"3000"}
                height={"3000"}
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />
            </motion.div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default featured;
