import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderMenu from "@/components/Header/components/HeaderMenu/HeaderMenu";
import HeaderMobileMenu from "@/components/Header/components/HeaderMobileMenu/HeaderMobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-darkBg text-darkHeading">
      <div className="flex items-center justify-between py-4 px-2 xl:px-0 max-w-7xl mx-auto">
        <a
          className="text-3xl cursor-pointer hover:text-darkText transition-all duration-300"
          href="#"
        >
          <h1>Mickael Keita</h1>
        </a>
        <GiHamburgerMenu
          className="text-3xl cursor-pointer hover:text-darkText transition-all duration-300 md:hidden"
          onClick={() => setShowMobileMenu(true)}
        />
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
