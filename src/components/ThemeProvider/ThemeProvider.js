import { ThemeContext } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export default function ThemeProvider({ children }) {
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
    <ThemeContext.Provider value={{ darkMode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
