import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/router";

const headerContentvariant = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function HeaderMenu() {
  const { darkMode, switchMode } = useContext(ThemeContext);
  const router = useRouter();
  const liText = [
    ["Accueil", "/"],
    ["Projets", "/projects"],
    ["Contact", "/contact"],
  ];
  return (
    <nav className="hidden md:block">
      <motion.ul
        variants={headerContentvariant}
        initial="initial"
        animate="animate"
        className="flex items-center justify-between gap-7 cursor-pointer text-xl"
      >
        {liText.map((item) => (
          <motion.li
            variants={headerContentvariant}
            key={item}
            whileHover={{
              scale: 1.2,
              color: darkMode ? "#004BA8" : "#3498db",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${
              darkMode
                ? router.pathname === item[1]
                  ? "text-darkAccent"
                  : "text-darkHeading"
                : router.pathname === item[1]
                ? "text-accent"
                : "text-text"
            }`}
          >
            <Link href={item[1]}>{item[0]}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
