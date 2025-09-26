import "@mui/material/styles";

// Extend MUI Theme interface to include custom font tokens
declare module "@mui/material/styles" {
  interface Theme {
    fontTokens: {
      display: {
        ultraLight: string;
        light: string;
        regular: string;
        bold: string;
        black: string;
      };
      heading: {
        light: string;
        semiBold: string;
        bold: string;
      };
      body: {
        regular: string;
        medium: string;
        semiBold: string;
      };
      special: {
        logo: string;
        accent: string;
        code: string;
      };
      fallback: string;
    };
  }

  interface ThemeOptions {
    fontTokens?: {
      display?: {
        ultraLight?: string;
        light?: string;
        regular?: string;
        bold?: string;
        black?: string;
      };
      heading?: {
        light?: string;
        semiBold?: string;
        bold?: string;
      };
      body?: {
        regular?: string;
        medium?: string;
        semiBold?: string;
      };
      special?: {
        logo?: string;
        accent?: string;
        code?: string;
      };
      fallback?: string;
    };
  }
}

// Font weight constants for consistent usage
export const FONT_WEIGHTS = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

// Font family constants for type safety
export const FONT_FAMILIES = {
  lufga: "Lufga",
  openSauceOne: "Open Sauce One",
  openSauceSans: "Open Sauce Sans",
  asimovian: "Asimovian",
  righteous: "Righteous",
} as const;

// Semantic font usage types
export type FontPurpose =
  | "display"
  | "heading"
  | "body"
  | "button"
  | "caption"
  | "logo"
  | "accent"
  | "code";

export type FontWeight = keyof typeof FONT_WEIGHTS;
export type FontFamily = keyof typeof FONT_FAMILIES;
