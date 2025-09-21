import React from "react";
import { MemoryRouter } from "react-router-dom";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@/contexts/ThemeProvider";

// Create a test theme
const testTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// All the providers wrapper
export const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <MuiThemeProvider theme={testTheme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

// Router-only wrapper for components that need routing but not theme
export const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <MemoryRouter>{children}</MemoryRouter>;

// Theme-only wrapper for components that need theme but not routing
export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ThemeProvider>
    <MuiThemeProvider theme={testTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </ThemeProvider>
);
