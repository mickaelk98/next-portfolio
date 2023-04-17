import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

// const socialNetworkContainerVariant = {
//   initial: {
//     y: "100vh",
//   },
//   animate: {
//     y: 0,
//     transition: {
//       duration: 1,
//       delay: 1,
//     },
//   },
// };

const socialNetworkVariant = {
  initial: {
    y: "100vh",
  },
  animate: {
    y: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

export default function SocialNetWork() {
  return (
    <ul className="text-3xl flex items-center gap-2">
      <motion.li
        variants={socialNetworkVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 2 }}
        whileHover="hover"
        className="text-darkText bg-darkSecondary p-2"
      >
        <a href="https://github.com/mickaelk98" target="_blank">
          <BsGithub />
        </a>
      </motion.li>
      <motion.li
        variants={socialNetworkVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 0.1 }}
        whileHover="hover"
        className="bg-darkAccent w-[46px] h-[46px] flex items-center justify-center"
      >
        <a href="https://www.linkedin.com/in/mickael-keita/" target="_blank">
          <span className="font-bold text-darkHeading m-auto">in</span>
        </a>
      </motion.li>
    </ul>
  );
}
