import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/router";

const liVariant = {
  onEnter: {
    x: ["-100vw", "0vw"],
  },
  onLeave: {
    x: ["0vw", "100vw"],
  },
};

export default function HeaderMobileMenu({ hideHeaderMobileMenu }) {
  const [animate, cycleAnimation] = useCycle(true, false);
  const { darkMode, switchMode } = useContext(ThemeContext);
  const router = useRouter();
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
      <motion.span
        whileHover={{
          color: darkMode ? "#004BA8" : "#3498db",
        }}
      >
        <RxCross1
          className={`text-5xl mt-5 mr-5 cursor-pointer`}
          onClick={() => {
            setTimeout(() => {
              hideHeaderMobileMenu();
            }, 1000);
            cycleAnimation();
          }}
        />
      </motion.span>
      <ul className="flex items-center justify-center flex-col gap-24 text-5xl h-screen w-full">
        {liText.map((item, i) => (
          <motion.li
            variants={liVariant}
            transition={{ x: { duration: 0.6, delay: 0.6 + i / 10 } }}
            animate={animate ? "onEnter" : "onLeave"}
            whileHover={{
              scale: 1.2,
              color: darkMode ? "#004BA8" : "#3498db",
              transition: {
                stiffness: 300,
                type: "spring",
                delay: 0,
              },
            }}
            className={`${
              darkMode
                ? router.pathname === item[1]
                  ? "text-darkAccent"
                  : "text-darkHeading"
                : router.pathname === item[1]
                ? "text-accent"
                : "text-text"
            }`}
            key={item}
          >
            <Link href={item[1]}>{item[0]}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
