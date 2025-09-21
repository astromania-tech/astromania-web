import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../theme/theme";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  size = "medium",
  showText = true,
  onClick,
}) => {
  const sizeMap = {
    small: { icon: 32, text: "1.25rem" },
    medium: { icon: 40, text: "1.5rem" },
    large: { icon: 48, text: "1.75rem" },
  };

  const currentSize = sizeMap[size];

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
      {/* Logo Icon */}
      <Box
        sx={{
          width: currentSize.icon,
          height: currentSize.icon,
          backgroundColor: colors.deepBlue,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          mr: showText ? 2 : 0,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "60%",
            height: "60%",
            border: "2px solid white",
            borderRadius: 1,
            transform: "translate(-50%, -50%) rotate(45deg)",
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
            color: colors.deepBlue,
            letterSpacing: "-0.01em",
            fontSize: currentSize.text,
          }}
        >
          AstroMANIA
        </Typography>
      )}
    </Box>
  );
};

export default Logo;
