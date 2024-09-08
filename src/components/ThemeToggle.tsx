import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <label className="swap swap-rotate mr-3">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">
        <FaMoon className="h-5 w-5" />
      </div>
      <div className="swap-off">
        <FaSun className="h-5 w-5" />
      </div>
    </label>
  );
}

export default ThemeToggle;
