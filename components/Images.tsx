import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

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

const data: string[] = [
  "2023Ran.png",
  "botak.jpg",
  "Cover.png",
  "deku.jpg",
  "EGN logo.jpg",
  "GojoSatoru.jpg",
  "haewon.jpg",
  "JETT.jpg",
  "Lady.png",
  "logoservia.jpg",
  "Mascot.png",
  "mascott1.png",
  "mascott2.png",
  "ranataub.png",
  "ranata.jpg",
  "Richard.jpg",
  "screen1.jpg",
  "screen2.jpg",
  "screen3.jpg",
  "screen5.jpg",
];

const Images = () => {
  const [showImages, setShowImages] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  return (
    <section id="images">
      <motion.div
        variants={staggerContainer(1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8"
      >
        <header className="flex flex-col text-center content-center">
          <motion.h1
            variants={textVariant(0.4)}
            className="text-xl font-bold text-gray-900 sm:text-4xl"
          >
            All Collection
          </motion.h1>

          <motion.p
            variants={textVariant(0.6)}
            className="max-w-md mx-auto mt-4 text-gray-500"
          >
            And here's all of my collection of Arts and mockups that i made
          </motion.p>
          <button
            onClick={toggleImages}
            className="flex flex-col items-center  mt-10 text-gray-600 cursor-pointer"
          >
            <span>Show Images</span>
            <FiChevronDown className="text-4xl" />
          </button>
        </header>

        {showImages && (
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {data.map((imageName, index) => (
              <li key={index}>
                <div>
                  <Image
                    src={`/assets/${imageName}`}
                    alt=""
                    width={3000}
                    height={3000}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
};

export default Images;
