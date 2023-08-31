import Link from "next/link";
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

type buttontype = {
  title: string;
  url?: string;
};

const RedButton = ({ title, url }: buttontype) => {
  return (
    <motion.section
      variants={textVariant(1.2)}
      className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 text-white px-8 py-3 white focus:outline-none focus:ring active:bg-white active:text-rose-600"
    >
      <Link href={url}>
        <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
          <svg
            className="h-7 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-lg font-medium transition-all group-hover:ml-4">
          {title}
        </span>
      </Link>
    </motion.section>
  );
};

export default RedButton;
