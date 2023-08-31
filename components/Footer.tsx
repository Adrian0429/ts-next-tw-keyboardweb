import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8 mt-20">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <div className="flex flex-col">
              <h1 className="text-gray-400 pb-4">Contact Me</h1>

              <h2
                className="text-sm text-gray-400 hover:cursor-pointer pb-1"
                onClick={() => navigator.clipboard.writeText("081290482306")}
              >
                Phone: 081290482306
              </h2>
              <h2
                onClick={() =>
                  navigator.clipboard.writeText("ranatadana@gmail.com")
                }
                className="text-sm text-gray-400 hover:cursor-pointer pb-1"
              >
                Email: ranatadana@gmail.com
              </h2>
            </div>
          </li>

          <li className="my-2">
            <div className="flex flex-col">
              <h1 className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 pb-4">
                Social Media
              </h1>
              <Link
                className="text-sm text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="https://www.instagram.com/ranata4/"
              >
                Instagram
              </Link>
            </div>
          </li>
          <li className="my-2">
            <Link
              className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="www.linkedin.com/in/ranata-dana-a2b045201"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
