import { useState, useEffect } from "react";

export interface ThemeTypes {
  isDark: boolean;
  toggleHandler: () => void;
}

const initValue =
  localStorage.getItem("isDark") ||
  (!localStorage.getItem("isDark") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? true
    : false;

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(initValue);
  function toggleHandler() {
    setIsDark(!isDark);
  }
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } else {
      root.classList.remove("dark");
      localStorage.removeItem("isDark");
    }
  }, [isDark]);

  return [isDark, toggleHandler];
};
