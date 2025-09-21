import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@hooks/useTheme";

/**
 * AstroMANIA Logo Component
 *
 * A theme-aware logo component that automatically switches between light and dark versions
 * based on the current theme. Supports multiple sizes, variants, and usage modes.
 *
 * @example
 * // Basic usage
 * <Logo />
 *
 * @example
 * // Header navigation logo
 * <Logo size="medium" variant="header" onClick={() => navigate('/')} />
 *
 * @example
 * // Footer logo without text
 * <Logo size="small" showText={false} variant="footer" />
 *
 * @example
 * // Image only for avatars or icons
 * <Logo size="large" imageOnly />
 */
interface LogoProps {
  /** Size variant for the logo - affects both image and text */
  size?: "small" | "medium" | "large";
  /** Whether to show the "AstroMANIA" text next to the logo */
  showText?: boolean;
  /** Click handler function - makes logo clickable when provided */
  onClick?: () => void;
  /** If true, only renders the image without text wrapper */
  imageOnly?: boolean;
  /** Visual variant for different contexts */
  variant?: "default" | "header" | "footer";
}

const Logo: React.FC<LogoProps> = ({
  size = "medium",
  showText = true,
  onClick,
  imageOnly = false,
  variant = "default",
}) => {
  const { isDarkMode, colors } = useTheme();

  const sizeMap = {
    small: {
      height: 32,
      width: 32,
      text: "1.25rem",
      gap: 1,
    },
    medium: {
      height: 40,
      width: 40,
      text: "1.5rem",
      gap: 1.5,
    },
    large: {
      height: 48,
      width: 48,
      text: "1.75rem",
      gap: 2,
    },
  };

  const currentSize = sizeMap[size];

  // Variant-specific styling adjustments for different usage contexts
  const getVariantStyles = () => {
    switch (variant) {
      case "header":
        return {
          filter: isDarkMode ? "brightness(1.1)" : "none",
          opacity: isDarkMode ? 0.95 : 1,
        };
      case "footer":
        return {
          filter: isDarkMode ? "brightness(0.9)" : "brightness(0.85)",
          opacity: 0.9,
        };
      default:
        return {};
    }
  };

  // Theme-aware logo selection
  // Dark mode: Uses black & white version for better contrast
  // Light mode: Uses full color version
  const logoSrc = isDarkMode
    ? "/images/logo/astroMania-logo-bw.png"
    : "/images/logo/astroMania-logo-color.jpeg";

  const logoAlt = "AstroMANIA Enterprise Logo";

  // If imageOnly is true, return just the image
  if (imageOnly) {
    return (
      <Box
        component="img"
        src={logoSrc}
        alt={logoAlt}
        onClick={onClick}
        sx={{
          height: currentSize.height,
          width: currentSize.width,
          cursor: onClick ? "pointer" : "default",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          ...getVariantStyles(),
          "&:hover": onClick
            ? {
                transform: "scale(1.02)",
                filter: isDarkMode ? "brightness(1.2)" : "brightness(1.1)",
              }
            : {},
        }}
      />
    );
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": onClick
          ? {
              transform: "scale(1.02)",
            }
          : {},
      }}
    >
      {/* Logo Image */}
      <Box
        component="img"
        src={logoSrc}
        alt={logoAlt}
        sx={{
          height: currentSize.height,
          width: currentSize.width,
          mr: showText ? currentSize.gap : 0,
          borderRadius: 1,
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          ...getVariantStyles(),
          "&:hover": {
            filter: isDarkMode ? "brightness(1.15)" : "brightness(1.05)",
          },
        }}
      />

      {/* Logo Text */}
      {showText && (
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily: '"Open Sauce One", sans-serif',
            fontWeight: 700,
            color: isDarkMode ? "#ffffff" : colors.deepBlue,
            letterSpacing: "-0.01em",
            fontSize: currentSize.text,
            transition: "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          AstroMANIA
        </Typography>
      )}
    </Box>
  );
};

export default Logo;
