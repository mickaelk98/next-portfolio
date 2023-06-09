import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderMenu from "@/components/Header/components/HeaderMenu/HeaderMenu";
import HeaderMobileMenu from "@/components/Header/components/HeaderMobileMenu/HeaderMobileMenu";
import Link from "next/link";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import { ThemeContext } from "@/context/ThemeContext";

const headerContentvariant = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
  },
};

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { darkMode, switchMode } = useContext(ThemeContext);

  return (
    <header className="text-heading dark:text-darkHeading dark:bg-darkPrimary">
      <div className="flex items-center justify-between py-4 px-2 md:px-4 xl:px-0 max-w-7xl mx-auto">
        <motion.h1
          variants={headerContentvariant}
          transition={{
            stiffness: 300,
            type: "spring",
          }}
          whileHover={{
            scale: 1.1,
            color: darkMode ? "#004BA8" : "#3498db",
          }}
          initial="initial"
          animate="animate"
          className="text-3xl cursor-pointer"
        >
          <Link href="/">Mickael Keita</Link>
        </motion.h1>

        <ThemeSwitcher />

        <motion.span
          variants={headerContentvariant}
          initial="initial"
          animate="animate"
          className="text-3xl cursor-pointer transition-all duration-300 md:hidden"
          onClick={() => setShowMobileMenu(true)}
        >
          <GiHamburgerMenu />
        </motion.span>
        <HeaderMenu />

        <AnimatePresence>
          {showMobileMenu && (
            <HeaderMobileMenu
              hideHeaderMobileMenu={() => setShowMobileMenu(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
