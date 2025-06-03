import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   if (storedTheme === "dark") {
  //     setIsDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     localStorage.setItem("theme", "light");
  //     setIsDarkMode(false);
  //   }
  // }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <button onClick={toggleTheme} className={cn("fixed max-md:hidden top-3 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden cursor-pointer")}>
        {isDarkMode ? (
          <Sun className="size-8 text-amber-300" />
        ) : (
          <Moon className="size-8 text-blue-700" />
        )}
      </button>
    </>
  );
};
