import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

// const liVariant = {
//   initial: {
//     x: "-100vh",
//   },
//   hover: {
//     scale: 1.2,
//     color: "#004BA8",
//     transition: {
//       stiffness: 300,
//       type: "spring",
//     },
//   },
// };

const liVariant = {
  onEnter: {
    x: ["-100vw", "0vw"],
  },
  onLeave: {
    x: ["0vw", "100vw"],
  },
  hover: {
    scale: 1.2,
    color: "#004BA8",
    transition: {
      stiffness: 300,
      type: "spring",
      delay: 0,
    },
  },
};

export default function HeaderMobileMenu({ hideHeaderMobileMenu }) {
  const [animate, cycleAnimation] = useCycle(true, false);
  const liText = [
    ["Accueil", "/"],
    ["Projets", "/projects"],
    ["Contact", "/contact"],
  ];

  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ x: "100%" }}
      className="dark:bg-darkPrimary dark:bg-none bg-gradient-to-b from-[#D6DBDC] to-white dark:text-darkHeading z-10 fixed top-0 left-0 h-screen w-full text-black flex flex-col items-end"
    >
      <RxCross1
        className="text-5xl mt-5 mr-5 cursor-pointer hover:text-darkText transition-all duration-300"
        onClick={() => {
          setTimeout(() => {
            hideHeaderMobileMenu();
          }, 1000);
          cycleAnimation();
        }}
      />
      <ul className="flex items-center justify-center flex-col gap-24 text-5xl h-screen w-full">
        {liText.map((item, i) => (
          <motion.li
            variants={liVariant}
            transition={{ x: { duration: 0.6, delay: 0.6 + i / 10 } }}
            animate={animate ? "onEnter" : "onLeave"}
            whileHover="hover"
            className="dark:text-darkHeading"
            key={item}
          >
            <Link href={item[1]}>{item[0]}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
