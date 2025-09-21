import { createTheme } from "@mui/material/styles";

// Logo-inspired color palette - extracted from AstroMANIA logos
export const colors = {
  // Primary blues from logo analysis
  deepBlue: "#1a237e", // Primary brand blue
  navyBlue: "#1e293b", // From logo background
  darkNavy: "#0d1321", // Darkest variant

  // Accent blues from logo elements
  accentBlue: "#2563eb", // Bright logo accent
  brightBlue: "#3b82f6", // Secondary accent
  steelBlue: "#1e40af", // Professional variant

  // Metallic/silver tones from logo
  platinum: "#f8fafc", // Logo body color
  silver: "#e2e8f0", // Metallic finish
  lightGray: "#f1f5f9", // Subtle backgrounds

  // Matte surfaces
  matteWhite: "#fafbfc", // Clean backgrounds
  matteGray: "#f8fafc", // Elevated surfaces

  // Dark surfaces for contrast
  charcoal: "#1e293b", // From logo charcoal
  graphite: "#334155", // Medium dark
  slate: "#475569", // Text secondary
  darkGray: "#64748b", // Muted text

  // Pure contrast colors
  logoBlack: "#1a1a1a", // From monochrome logo
  pureWhite: "#ffffff", // High contrast

  // Status colors (minimal, matte)
  success: "#059669",
  warning: "#d97706",
  error: "#dc2626",
  info: "#0284c7",
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.deepBlue,
      light: colors.accentBlue,
      dark: colors.darkNavy,
      contrastText: "#ffffff",
    },
    secondary: {
      main: colors.accentBlue,
      light: colors.brightBlue,
      dark: colors.navyBlue,
      contrastText: "#ffffff",
    },
    background: {
      default: colors.matteWhite,
      paper: "#ffffff",
    },
    text: {
      primary: colors.charcoal,
      secondary: colors.darkGray,
    },
    divider: colors.silver,
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
  },
  typography: {
    fontFamily:
      '"Open Sauce One", "Open Sauce Sans", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontFamily: '"Open Sauce One", sans-serif',
      color: colors.charcoal,
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      fontFamily: '"Open Sauce One", sans-serif',
      color: colors.charcoal,
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      fontFamily: '"Open Sauce One", sans-serif',
      color: colors.charcoal,
    },
    h4: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0em",
      fontFamily: '"Open Sauce One", sans-serif',
      color: colors.charcoal,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0em",
      fontFamily: '"Open Sauce One", sans-serif',
      color: colors.charcoal,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: "0em",
      fontFamily: '"Open Sauce One", sans-serif',
      color: colors.charcoal,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      letterSpacing: "0em",
      fontFamily: '"Open Sauce Sans", sans-serif',
      color: colors.slate,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      letterSpacing: "0em",
      fontFamily: '"Open Sauce Sans", sans-serif',
      color: colors.darkGray,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
      textTransform: "none" as const,
      fontFamily: '"Open Sauce Sans", sans-serif',
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
      letterSpacing: "0.03em",
      fontFamily: '"Open Sauce Sans", sans-serif',
      color: colors.darkGray,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  shadows: [
    "none",
    "0 1px 2px 0 rgba(30, 41, 59, 0.04)",
    "0 1px 3px 0 rgba(30, 41, 59, 0.08), 0 1px 2px 0 rgba(30, 41, 59, 0.04)",
    "0 4px 6px -1px rgba(30, 41, 59, 0.08), 0 2px 4px -1px rgba(30, 41, 59, 0.04)",
    "0 10px 15px -3px rgba(30, 41, 59, 0.08), 0 4px 6px -2px rgba(30, 41, 59, 0.04)",
    "0 20px 25px -5px rgba(30, 41, 59, 0.08), 0 10px 10px -5px rgba(30, 41, 59, 0.04)",
    "0 25px 50px -12px rgba(30, 41, 59, 0.15)",
    "0 35px 60px -12px rgba(30, 41, 59, 0.2)",
    "0 45px 70px -12px rgba(30, 41, 59, 0.25)",
    "0 60px 80px -12px rgba(30, 41, 59, 0.3)",
    "0 80px 100px -12px rgba(30, 41, 59, 0.35)",
    "0 100px 120px -12px rgba(30, 41, 59, 0.4)",
    "0 120px 140px -12px rgba(30, 41, 59, 0.45)",
    "0 140px 160px -12px rgba(30, 41, 59, 0.5)",
    "0 160px 180px -12px rgba(30, 41, 59, 0.55)",
    "0 180px 200px -12px rgba(30, 41, 59, 0.6)",
    "0 200px 220px -12px rgba(30, 41, 59, 0.65)",
    "0 220px 240px -12px rgba(30, 41, 59, 0.7)",
    "0 240px 260px -12px rgba(30, 41, 59, 0.75)",
    "0 260px 280px -12px rgba(30, 41, 59, 0.8)",
    "0 280px 300px -12px rgba(30, 41, 59, 0.85)",
    "0 300px 320px -12px rgba(30, 41, 59, 0.9)",
    "0 320px 340px -12px rgba(30, 41, 59, 0.95)",
    "0 340px 360px -12px rgba(30, 41, 59, 1)",
    "0 360px 380px -12px rgba(30, 41, 59, 1)",
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: colors.matteWhite,
          color: colors.charcoal,
          fontFamily: '"Open Sauce Sans", sans-serif',
        },
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: `${colors.silver} transparent`,
        },
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: colors.silver,
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: colors.darkGray,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "14px 28px",
          fontSize: "0.875rem",
          fontWeight: 600,
          boxShadow: "none",
          textTransform: "none",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 8px 16px rgba(30, 41, 59, 0.12)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        contained: {
          backgroundColor: colors.deepBlue,
          color: "#ffffff",
          "&:hover": {
            backgroundColor: colors.navyBlue,
            boxShadow: "0 12px 24px rgba(26, 35, 126, 0.15)",
          },
          "&:disabled": {
            backgroundColor: colors.lightGray,
            color: colors.darkGray,
          },
        },
        outlined: {
          borderColor: colors.deepBlue,
          color: colors.deepBlue,
          backgroundColor: "transparent",
          borderWidth: "2px",
          "&:hover": {
            backgroundColor: colors.deepBlue,
            color: "#ffffff",
            borderColor: colors.deepBlue,
            borderWidth: "2px",
          },
        },
        text: {
          color: colors.deepBlue,
          "&:hover": {
            backgroundColor: colors.lightGray,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${colors.silver}`,
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(30, 41, 59, 0.04)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 16px 32px rgba(30, 41, 59, 0.08)",
            borderColor: colors.accentBlue,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(250, 251, 252, 0.95)",
          backdropFilter: "blur(16px) saturate(180%)",
          borderBottom: `1px solid ${colors.silver}`,
          color: colors.charcoal,
          boxShadow: "0 1px 3px rgba(30, 41, 59, 0.04)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          fontWeight: 500,
          fontFamily: '"Open Sauce Sans", sans-serif',
          fontSize: "0.875rem",
        },
        filled: {
          backgroundColor: colors.lightGray,
          color: colors.deepBlue,
          "&:hover": {
            backgroundColor: colors.silver,
          },
        },
        outlined: {
          borderColor: colors.silver,
          color: colors.slate,
          "&:hover": {
            backgroundColor: colors.lightGray,
            borderColor: colors.accentBlue,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          backgroundImage: "none",
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(30, 41, 59, 0.04)",
        },
        elevation2: {
          boxShadow: "0 4px 12px rgba(30, 41, 59, 0.06)",
        },
        elevation3: {
          boxShadow: "0 8px 24px rgba(30, 41, 59, 0.08)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: colors.silver,
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: colors.accentBlue,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.deepBlue,
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.darkGray,
            fontFamily: '"Open Sauce Sans", sans-serif',
            "&.Mui-focused": {
              color: colors.deepBlue,
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: colors.lightGray,
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Open Sauce Sans", sans-serif',
        },
        h1: {
          fontFamily: '"Open Sauce One", sans-serif',
        },
        h2: {
          fontFamily: '"Open Sauce One", sans-serif',
        },
        h3: {
          fontFamily: '"Open Sauce One", sans-serif',
        },
        h4: {
          fontFamily: '"Open Sauce One", sans-serif',
        },
        h5: {
          fontFamily: '"Open Sauce One", sans-serif',
        },
        h6: {
          fontFamily: '"Open Sauce One", sans-serif',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      main: colors.accentBlue,
      light: colors.brightBlue,
      dark: colors.deepBlue,
      contrastText: "#ffffff",
    },
    secondary: {
      main: colors.platinum,
      light: colors.silver,
      dark: colors.darkGray,
      contrastText: colors.charcoal,
    },
    background: {
      default: colors.darkNavy,
      paper: colors.charcoal,
    },
    text: {
      primary: "#ffffff",
      secondary: colors.silver,
    },
    divider: colors.graphite,
  },
  components: {
    ...theme.components,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: colors.darkNavy,
          color: "#ffffff",
          fontFamily: '"Open Sauce Sans", sans-serif',
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: colors.graphite,
          "&:hover": {
            backgroundColor: colors.silver,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(13, 19, 33, 0.95)",
          backdropFilter: "blur(16px) saturate(180%)",
          borderBottom: `1px solid ${colors.graphite}`,
          color: "#ffffff",
          // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.charcoal,
          borderColor: colors.graphite,
          "&:hover": {
            borderColor: colors.accentBlue,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.charcoal,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.accentBlue,
          "&:hover": {
            backgroundColor: colors.brightBlue,
          },
        },
        outlined: {
          borderColor: colors.accentBlue,
          color: colors.accentBlue,
          "&:hover": {
            backgroundColor: colors.accentBlue,
            color: "#ffffff",
          },
        },
      },
    },
  },
});
