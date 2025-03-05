import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button className="theme-toggle-btn" onClick={handleThemeToggler}>
      {theme === "light" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
