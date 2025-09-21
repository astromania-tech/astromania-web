import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@contexts/ThemeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Custom hook for accessing colors directly
export const useColors = () => {
  const { colors } = useTheme();
  return colors;
};

// Custom hook for theme-aware styles
export const useThemedStyles = () => {
  const { colors, isDarkMode } = useTheme();

  return {
    colors,
    isDarkMode,
    // Common style patterns for matte design
    cardStyle: {
      backgroundColor: isDarkMode ? colors.charcoal : "#ffffff",
      border: `1px solid ${isDarkMode ? colors.graphite : colors.silver}`,
      borderRadius: 16,
      boxShadow: isDarkMode
        ? "0px 4px 16px rgba(0, 0, 0, 0.2)"
        : "0px 2px 8px rgba(30, 41, 59, 0.04)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        boxShadow: isDarkMode
          ? "0px 8px 32px rgba(0, 0, 0, 0.3)"
          : "0px 16px 32px rgba(30, 41, 59, 0.08)",
        transform: "translateY(-4px)",
        borderColor: colors.accentBlue,
      },
    },
    buttonStyle: {
      primary: {
        backgroundColor: colors.deepBlue,
        color: "#ffffff",
        borderRadius: 12,
        padding: "14px 28px",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none" as const,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: colors.navyBlue,
          transform: "translateY(-1px)",
          boxShadow: "0px 8px 16px rgba(26, 35, 126, 0.15)",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: colors.deepBlue,
        border: `2px solid ${colors.deepBlue}`,
        borderRadius: 12,
        padding: "12px 26px",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none" as const,
        "&:hover": {
          backgroundColor: colors.deepBlue,
          color: "#ffffff",
          transform: "translateY(-1px)",
        },
      },
      text: {
        backgroundColor: "transparent",
        color: colors.deepBlue,
        borderRadius: 12,
        padding: "14px 28px",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none" as const,
        "&:hover": {
          backgroundColor: colors.lightGray,
        },
      },
    },
    sectionStyle: {
      backgroundColor: isDarkMode ? colors.darkNavy : colors.matteWhite,
      padding: "80px 0",
      position: "relative" as const,
    },
    textStyle: {
      primary: {
        color: isDarkMode ? "#ffffff" : colors.charcoal,
        fontFamily: '"Open Sauce One", sans-serif',
      },
      secondary: {
        color: isDarkMode ? colors.silver : colors.darkGray,
        fontFamily: '"Open Sauce Sans", sans-serif',
      },
      accent: {
        color: colors.deepBlue,
        fontFamily: '"Open Sauce One", sans-serif',
      },
    },
    // Utility functions
    getTextColor: (variant: "primary" | "secondary" | "accent" = "primary") => {
      switch (variant) {
        case "primary":
          return isDarkMode ? "#ffffff" : colors.charcoal;
        case "secondary":
          return isDarkMode ? colors.silver : colors.darkGray;
        case "accent":
          return colors.deepBlue;
        default:
          return isDarkMode ? "#ffffff" : colors.charcoal;
      }
    },
    getBackgroundColor: (
      variant: "default" | "paper" | "accent" = "default",
    ) => {
      switch (variant) {
        case "default":
          return isDarkMode ? colors.darkNavy : colors.matteWhite;
        case "paper":
          return isDarkMode ? colors.charcoal : "#ffffff";
        case "accent":
          return isDarkMode ? colors.charcoal : colors.lightGray;
        default:
          return isDarkMode ? colors.darkNavy : colors.matteWhite;
      }
    },
    getShadow: (elevation: "none" | "low" | "medium" | "high" = "low") => {
      const shadows = {
        none: "none",
        low: isDarkMode
          ? "0px 2px 8px rgba(0, 0, 0, 0.15)"
          : "0px 2px 8px rgba(30, 41, 59, 0.04)",
        medium: isDarkMode
          ? "0px 8px 24px rgba(0, 0, 0, 0.2)"
          : "0px 8px 24px rgba(30, 41, 59, 0.08)",
        high: isDarkMode
          ? "0px 16px 48px rgba(0, 0, 0, 0.3)"
          : "0px 16px 48px rgba(30, 41, 59, 0.12)",
      };
      return shadows[elevation];
    },
    // Matte design helpers
    getMatteBackground: (
      surface: "primary" | "secondary" | "elevated" = "primary",
    ) => {
      if (isDarkMode) {
        switch (surface) {
          case "primary":
            return colors.darkNavy;
          case "secondary":
            return colors.charcoal;
          case "elevated":
            return colors.graphite;
          default:
            return colors.darkNavy;
        }
      } else {
        switch (surface) {
          case "primary":
            return colors.matteWhite;
          case "secondary":
            return "#ffffff";
          case "elevated":
            return colors.lightGray;
          default:
            return colors.matteWhite;
        }
      }
    },
    getBorderColor: (state: "default" | "hover" | "focus" = "default") => {
      switch (state) {
        case "default":
          return isDarkMode ? colors.graphite : colors.silver;
        case "hover":
          return colors.accentBlue;
        case "focus":
          return colors.deepBlue;
        default:
          return isDarkMode ? colors.graphite : colors.silver;
      }
    },
  };
};

// Hook for consistent spacing
export const useSpacing = () => {
  return {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
    section: "80px",
    container: "120px",
  };
};

// Hook for consistent border radius
export const useBorderRadius = () => {
  return {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "50%",
  };
};
