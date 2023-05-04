import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  // Click icons on navbar and it will scroll smoothly to the corresponding section
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false); // When clicking on links in folded menu, the menu will be folded back

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });

    // Update the class name 'active' of the clicked link, so that the link will be highlighted in green
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  // When clicking on links in folded menu, the menu will be folded back
  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-14" src={logo} alt="logo" />
        </motion.div>

        {/* nav links */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              href="#project"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Project
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>

          {/* resume button */}
          <a href="resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* folded icon bar */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {/* folded menu in small screen size*/}
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              {/* close button */}
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />

              {/* links to different sections */}
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>

                {/* resume button */}
                <a href="resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>

                {/* social media icons */}
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/jeremy-zeyu-liu/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen text-zinc-200 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>

                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/JeremyyyLiu"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen text-zinc-200 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>

                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.youtube.com/@jeremyliu5737/featured"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen text-zinc-200 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialYoutube />
                    </span>
                  </motion.a>

                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, ease: "easeIn" }}
                    href="#"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen text-zinc-200 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialFacebook />
                    </span>
                  </motion.a>

                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, ease: "easeIn" }}
                    href="#"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen rounded-full inline-flex items-center justify-center hover:text-textGreen text-zinc-200 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>

                {/* email */}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, ease: "easeIn" }}
                  href="mailto:jeremy.zeyuliu@gmail.com"
                  className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                >
                  <p>jeremy.zeyuliu@gmail.com</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
