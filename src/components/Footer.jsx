const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow mt-[50px] dark:bg-gray-800 h-[120px] text-center flex">
      <div className="w-[100%]  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            gameZ
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 px-4 text-sm text-[21px] font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6 ">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/waseem-basheer-0b2268262/"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/waseem-basheer21"
              className="hover:underline me-4 md:me-6"
            >
              gitHub
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              gamingdope474@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
