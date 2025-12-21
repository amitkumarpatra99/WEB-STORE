import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-2xl text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 p-1"
    >
      {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
    </button>
  );
};

export default DarkMode;
