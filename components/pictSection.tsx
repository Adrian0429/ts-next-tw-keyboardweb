"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Gallery from "@/pages/keyboard/gallery";

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
            className="text-xl font-bold text-gray-900 sm:text-3xl"
          >
            New Collection
          </motion.h2>

          <motion.p
            variants={textVariant(0.6)}
            className="max-w-md mx-auto mt-4 text-gray-500"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </motion.p>
        </header>

        <ul className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
          <li>
            <motion.a
              variants={textVariant(0.7)}
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              href="#"
              className="relative block group"
            >
              <Image
                src="/assets/sideview.jpg"
                alt=""
                width={"3000"}
                height={"3000"}
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white ">
                  Sleek
                </h3>

                <span className="mt-1.5 inline-block bg-gray-800 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  get yours now!
                </span>
              </div>
            </motion.a>
          </li>

          <li>
            <motion.a
              variants={textVariant(0.7)}
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              href="#"
              className="relative block group"
            >
              <Image
                src="/assets/KeybDc2.jpg"
                alt=""
                width={"3204"}
                height={"3204"}
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Greeners
                </h3>

                <span className="mt-1.5 inline-block bg-gray-800 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </motion.a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <motion.a
              variants={textVariant(0.8)}
              whileHover={{ scale: 1.05 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              href="#"
              className="relative block group"
            >
              <Image
                src="/assets/KeybDcPutih.jpg"
                alt=""
                width={"3000"}
                height={"3000"}
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white bg-gray-700/50 px-2 rounded">
                  lorem ipsum
                </h3>
                <span className="mt-1.5 inline-block bg-gray-800 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </motion.a>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default featured;
