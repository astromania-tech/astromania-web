import { useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

/**
 * Custom hook to access centralized font tokens from the theme
 * This ensures consistent font usage across all components
 */
export const useFontTokens = () => {
  const theme = useTheme();

  return {
    // Direct access to font token categories
    display: theme.fontTokens.display,
    heading: theme.fontTokens.heading,
    body: theme.fontTokens.body,
    special: theme.fontTokens.special,
    fallback: theme.fontTokens.fallback,

    // Convenience methods for common font selections
    getDisplayFont: (weight: 'ultraLight' | 'light' | 'regular' | 'bold' | 'black' = 'regular') =>
      theme.fontTokens.display[weight],

    getHeadingFont: (weight: 'light' | 'semiBold' | 'bold' = 'bold') =>
      theme.fontTokens.heading[weight],

    getBodyFont: (weight: 'regular' | 'medium' | 'semiBold' = 'regular') =>
      theme.fontTokens.body[weight],

    // Semantic font getters for specific use cases
    getLogoFont: () => theme.fontTokens.special.logo,
    getAccentFont: () => theme.fontTokens.special.accent,
    getCodeFont: () => theme.fontTokens.special.code,

    // Typography variant getters that respect the theme
    getTypographyFont: (variant: keyof Theme['typography']) => {
      const typography = theme.typography[variant];
      if (typeof typography === 'object' && 'fontFamily' in typography) {
        return typography.fontFamily;
      }
      return theme.typography.fontFamily;
    },

    // Font weight helper
    getFontWeight: (weight: 'thin' | 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black') => {
      const weights = {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      };
      return weights[weight];
    },
  };
};

/**
 * Hook specifically for accessing Lufga font variants
 * Since Lufga has the most comprehensive weight range
 */
export const useLufgaFont = () => {
  const { getDisplayFont, getFontWeight } = useFontTokens();

  return {
    // All Lufga weights available
    thin: { fontFamily: getDisplayFont('ultraLight'), fontWeight: getFontWeight('thin') },
    extraLight: { fontFamily: getDisplayFont('light'), fontWeight: getFontWeight('extraLight') },
    light: { fontFamily: getDisplayFont('light'), fontWeight: getFontWeight('light') },
    regular: { fontFamily: getDisplayFont('regular'), fontWeight: getFontWeight('regular') },
    medium: { fontFamily: getDisplayFont('regular'), fontWeight: getFontWeight('medium') },
    semiBold: { fontFamily: getDisplayFont('regular'), fontWeight: getFontWeight('semiBold') },
    bold: { fontFamily: getDisplayFont('bold'), fontWeight: getFontWeight('bold') },
    extraBold: { fontFamily: getDisplayFont('bold'), fontWeight: getFontWeight('extraBold') },
    black: { fontFamily: getDisplayFont('black'), fontWeight: getFontWeight('black') },
  };
};

export default useFontTokens;
