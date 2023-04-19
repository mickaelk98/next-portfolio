import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BsFillMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { darkMode, switchMode } = useContext(ThemeContext);
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
