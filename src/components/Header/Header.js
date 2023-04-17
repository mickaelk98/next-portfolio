import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";
import HeaderMenu from "@/components/Header/components/HeaderMenu/HeaderMenu";
import HeaderMobileMenu from "@/components/Header/components/HeaderMobileMenu/HeaderMobileMenu";
import Link from "next/link";

const headerContentvariant = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-darkBg text-darkHeading">
      <div className="flex items-center justify-between py-4 px-2 xl:px-0 max-w-7xl mx-auto">
        <motion.h1
          variants={headerContentvariant}
          initial="initial"
          animate="animate"
          className="text-3xl cursor-pointer hover:text-darkText transition-all duration-300"
        >
          <Link href="/">Mickael Keita</Link>
        </motion.h1>

        <motion.span
          variants={headerContentvariant}
          initial="initial"
          animate="animate"
          className="text-3xl cursor-pointer hover:text-darkText transition-all duration-300 md:hidden"
          onClick={() => setShowMobileMenu(true)}
        >
          <GiHamburgerMenu />
        </motion.span>
        <HeaderMenu />

        {showMobileMenu && (
          <HeaderMobileMenu
            hideHeaderMobileMenu={() => setShowMobileMenu(false)}
          />
        )}
      </div>
    </header>
  );
}
