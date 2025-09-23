import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";
import { colors } from "../theme/theme";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Custom hook for accessing colors directly
export const useColors = () => {
  // const { colors: contextColors } = useTheme();
  // Return colors from theme.ts to ensure synchronization
  return colors;
};

// Custom hook for theme-aware styles - fully synchronized with theme.ts
export const useThemedStyles = () => {
  const { isDarkMode, currentTheme } = useTheme();

  return {
    colors,
    isDarkMode,
    currentTheme,

    // Card styles matching MuiCard component overrides
    cardStyle: {
      backgroundColor: isDarkMode ? colors.charcoal : colors.pureWhite,
      border: `1px solid ${isDarkMode ? colors.graphite : colors.silver}`,
      borderRadius: 16,
      boxShadow: isDarkMode
        ? "0px 4px 16px rgba(0, 0, 0, 0.2)"
        : "0 2px 8px rgba(30, 41, 59, 0.04)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: isDarkMode
          ? "0px 8px 32px rgba(0, 0, 0, 0.3)"
          : "0 16px 32px rgba(30, 41, 59, 0.08)",
        borderColor: colors.accentBlue,
      },
    },

    // Button styles matching MuiButton component overrides
    buttonStyle: {
      primary: {
        backgroundColor: isDarkMode ? colors.accentBlue : colors.deepBlue,
        color: colors.pureWhite,
        borderRadius: 12,
        padding: "14px 28px",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none" as const,
        boxShadow: "none",
        fontFamily: '"Open Sauce Sans", sans-serif',
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          backgroundColor: isDarkMode ? colors.brightBlue : colors.navyBlue,
          transform: "translateY(-1px)",
          boxShadow: isDarkMode
            ? "0 12px 24px rgba(59, 130, 246, 0.15)"
            : "0 12px 24px rgba(26, 35, 126, 0.15)",
        },
        "&:active": {
          transform: "translateY(0)",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: isDarkMode ? colors.accentBlue : colors.deepBlue,
        border: `2px solid ${isDarkMode ? colors.accentBlue : colors.deepBlue}`,
        borderRadius: 12,
        padding: "12px 26px",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none" as const,
        fontFamily: '"Open Sauce Sans", sans-serif',
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          backgroundColor: isDarkMode ? colors.accentBlue : colors.deepBlue,
          color: colors.pureWhite,
          transform: "translateY(-1px)",
        },
      },
      text: {
        backgroundColor: "transparent",
        color: isDarkMode ? colors.accentBlue : colors.deepBlue,
        borderRadius: 12,
        padding: "14px 28px",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none" as const,
        fontFamily: '"Open Sauce Sans", sans-serif',
        "&:hover": {
          backgroundColor: isDarkMode ? colors.graphite : colors.lightGray,
        },
      },
    },

    // Section styles matching theme configuration
    sectionStyle: {
      backgroundColor: isDarkMode ? colors.darkNavy : colors.matteWhite,
      padding: "80px 0",
      position: "relative" as const,
    },

    // Typography styles using theme fonts
    textStyle: {
      primary: {
        color: isDarkMode ? colors.pureWhite : colors.charcoal,
        fontFamily: '"Open Sauce One", sans-serif',
      },
      secondary: {
        color: isDarkMode ? colors.silver : colors.darkGray,
        fontFamily: '"Open Sauce Sans", sans-serif',
      },
      accent: {
        color: isDarkMode ? colors.accentBlue : colors.deepBlue,
        fontFamily: '"Open Sauce One", sans-serif',
      },
    },

    // Utility functions for dynamic theming
    getTextColor: (variant: "primary" | "secondary" | "accent" = "primary" ) => {
      switch (variant) {
        case "primary":
          return isDarkMode ? colors.pureWhite : colors.charcoal;
        case "secondary":
          return isDarkMode ? colors.silver : colors.darkGray;
        case "accent":
          return isDarkMode ? colors.accentBlue : colors.deepBlue;
        default:
          return isDarkMode ? colors.pureWhite : colors.charcoal;
      }
    },

    getBackgroundColor: (
      variant: "default" | "paper" | "accent" | "elevated" = "default",
    ) => {
      switch (variant) {
        case "default":
          return isDarkMode ? colors.darkNavy : colors.matteWhite;
        case "paper":
          return isDarkMode ? colors.charcoal : colors.pureWhite;
        case "accent":
          return isDarkMode ? colors.charcoal : colors.lightGray;
        case "elevated":
          return isDarkMode ? colors.graphite : colors.platinum;
        default:
          return isDarkMode ? colors.darkNavy : colors.matteWhite;
      }
    },

    // Shadow system matching theme shadows
    getShadow: (elevation: "none" | "low" | "medium" | "high" = "low") => {
      const shadows = {
        none: "none",
        low: isDarkMode
          ? "0px 2px 8px rgba(0, 0, 0, 0.15)"
          : "0 1px 2px 0 rgba(30, 41, 59, 0.04)",
        medium: isDarkMode
          ? "0px 8px 24px rgba(0, 0, 0, 0.2)"
          : "0 4px 6px -1px rgba(30, 41, 59, 0.08), 0 2px 4px -1px rgba(30, 41, 59, 0.04)",
        high: isDarkMode
          ? "0px 16px 48px rgba(0, 0, 0, 0.3)"
          : "0 20px 25px -5px rgba(30, 41, 59, 0.08), 0 10px 10px -5px rgba(30, 41, 59, 0.04)",
      };
      return shadows[elevation];
    },

    // Matte design helpers with theme synchronization
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
            return colors.pureWhite;
          case "elevated":
            return colors.platinum;
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
          return isDarkMode ? colors.brightBlue : colors.deepBlue;
        default:
          return isDarkMode ? colors.graphite : colors.silver;
      }
    },

    // App bar styles matching MuiAppBar overrides
    getAppBarStyles: () => ({
      backgroundColor: isDarkMode
        ? "rgba(13, 19, 33, 0.95)"
        : "rgba(250, 251, 252, 0.95)",
      backdropFilter: "blur(16px) saturate(180%)",
      borderBottom: `1px solid ${isDarkMode ? colors.graphite : colors.silver}`,
      color: isDarkMode ? colors.pureWhite : colors.charcoal,
      boxShadow: isDarkMode
        ? "0 1px 3px rgba(0, 0, 0, 0.3)"
        : "0 1px 3px rgba(30, 41, 59, 0.04)",
    }),

    // Chip styles matching MuiChip overrides
    getChipStyles: (variant: "filled" | "outlined" = "filled") => ({
      borderRadius: 24,
      fontWeight: 500,
      fontFamily: '"Open Sauce Sans", sans-serif',
      fontSize: "0.875rem",
      ...(variant === "filled"
        ? {
            backgroundColor: isDarkMode ? colors.graphite : colors.lightGray,
            color: isDarkMode ? colors.pureWhite : colors.deepBlue,
            "&:hover": {
              backgroundColor: isDarkMode ? colors.slate : colors.silver,
            },
          }
        : {
            borderColor: isDarkMode ? colors.graphite : colors.silver,
            color: isDarkMode ? colors.silver : colors.slate,
            "&:hover": {
              backgroundColor: isDarkMode ? colors.graphite : colors.lightGray,
              borderColor: colors.accentBlue,
            },
          }),
    }),
  };
};

// Hook for consistent spacing matching theme spacing
export const useSpacing = () => {
  return {
    xs: "8px", // theme.spacing(1)
    sm: "16px", // theme.spacing(2)
    md: "24px", // theme.spacing(3)
    lg: "32px", // theme.spacing(4)
    xl: "48px", // theme.spacing(6)
    xxl: "64px", // theme.spacing(8)
    section: "80px",
    container: "120px",
  };
};

// Hook for consistent border radius matching theme shape
export const useBorderRadius = () => {
  return {
    sm: "8px",
    md: "12px", // theme.shape.borderRadius
    lg: "16px", // Card radius
    xl: "24px", // Chip radius
    full: "50%",
  };
};

// Hook for typography matching theme typography
export const useTypography = () => {
  const { isDarkMode } = useTheme();

  return {
    fontFamilies: {
      heading: '"Open Sauce One", sans-serif',
      body: '"Open Sauce Sans", sans-serif',
      system:
        '"Open Sauce One", "Open Sauce Sans", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
    },

    getHeadingStyles: (level: 1 | 2 | 3 | 4 | 5 | 6 = 1) => {
      const baseStyles = {
        fontFamily: '"Open Sauce One", sans-serif',
        fontWeight: level <= 2 ? 700 : 600,
        color: isDarkMode ? colors.pureWhite : colors.charcoal,
        letterSpacing: level <= 2 ? "-0.02em" : level === 3 ? "-0.01em" : "0em",
      };

      const sizeMap = {
        1: { fontSize: "3.5rem", lineHeight: 1.1 },
        2: { fontSize: "2.75rem", lineHeight: 1.2 },
        3: { fontSize: "2.25rem", lineHeight: 1.3 },
        4: { fontSize: "1.875rem", lineHeight: 1.4 },
        5: { fontSize: "1.5rem", lineHeight: 1.5 },
        6: { fontSize: "1.25rem", lineHeight: 1.6 },
      };

      return { ...baseStyles, ...sizeMap[level] };
    },

    getBodyStyles: (variant: "body1" | "body2" | "caption" = "body1") => {
      const styles = {
        body1: {
          fontSize: "1rem",
          lineHeight: 1.7,
          color: isDarkMode ? colors.silver : colors.slate,
        },
        body2: {
          fontSize: "0.875rem",
          lineHeight: 1.6,
          color: isDarkMode ? colors.silver : colors.darkGray,
        },
        caption: {
          fontSize: "0.75rem",
          lineHeight: 1.5,
          letterSpacing: "0.03em",
          color: isDarkMode ? colors.silver : colors.darkGray,
        },
      };

      return {
        fontFamily: '"Open Sauce Sans", sans-serif',
        ...styles[variant],
      };
    },
  };
};
