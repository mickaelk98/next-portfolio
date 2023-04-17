import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(null);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div className="text-3xl">
      {darkMode ? (
        <BsFillCloudSunFill className="cursor-pointer" onClick={switchMode} />
      ) : (
        <BsFillMoonStarsFill className="cursor-pointer" onClick={switchMode} />
      )}
    </div>
  );
}
