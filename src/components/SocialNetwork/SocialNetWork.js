import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const socialNetworkVariant = {
  initial: {
    x: "-100vh",
  },
  animate: {
    x: 0,
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
        transition={{ duration: 2, delay: 0.3 }}
        whileHover="hover"
        className="text-primary bg-darkSecondary p-2"
      >
        <a href="https://github.com/mickaelk98" target="_blank">
          <BsGithub />
        </a>
      </motion.li>
      <motion.li
        variants={socialNetworkVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 0.2 }}
        whileHover="hover"
        className="bg-accent text-primary w-[46px] h-[46px] flex items-center justify-center"
      >
        <a href="https://www.linkedin.com/in/mickael-keita/" target="_blank">
          <span className="font-bold text-heading m-auto">in</span>
        </a>
      </motion.li>
    </ul>
  );
}
