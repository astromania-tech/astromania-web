import { createContext } from "react";
import { theme, colors } from "../theme/theme";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: typeof colors;
  currentTheme: typeof theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
