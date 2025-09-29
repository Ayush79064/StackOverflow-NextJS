"use client"
import { Theme } from "@/types/ContextTypes";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext = createContext<null | Theme>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  function handleToggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {}, []);
  return (
    <ThemeContext.Provider value={{ handleToggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
