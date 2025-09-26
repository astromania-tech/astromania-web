import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import Logo from "./Logo";
import { useTheme } from "@hooks/useTheme";

/**
 * LogoDemo Component
 *
 * Showcases all Logo component variants, sizes, and usage patterns.
 * This component serves as a visual guide and testing ground for the Logo component.
 */
const LogoDemo: React.FC = () => {
  const { isDarkMode, colors } = useTheme();

  const demoSections = [
    {
      title: "Basic Sizes",
      description: "Different size variants of the logo",
      items: [
        { props: { size: "small" as const }, label: "Small" },
        { props: { size: "medium" as const }, label: "Medium (Default)" },
        { props: { size: "large" as const }, label: "Large" },
      ],
    },
    {
      title: "Variants",
      description: "Different visual variants for different contexts",
      items: [
        { props: { variant: "default" as const }, label: "Default" },
        { props: { variant: "header" as const }, label: "Header" },
        { props: { variant: "footer" as const }, label: "Footer" },
      ],
    },
    {
      title: "Text Options",
      description: "Logo with and without text",
      items: [
        { props: { showText: true }, label: "With Text" },
        { props: { showText: false }, label: "Logo Only" },
      ],
    },
    {
      title: "Image Only Mode",
      description: "Just the logo image without wrapper styling",
      items: [
        {
          props: { imageOnly: true, size: "small" as const },
          label: "Image Only - Small",
        },
        {
          props: { imageOnly: true, size: "medium" as const },
          label: "Image Only - Medium",
        },
        {
          props: { imageOnly: true, size: "large" as const },
          label: "Image Only - Large",
        },
      ],
    },
    {
      title: "Interactive Logos",
      description: "Clickable logos with hover effects",
      items: [
        {
          props: {
            onClick: () => alert("Logo clicked!"),
            size: "medium" as const,
          },
          label: "Clickable Logo",
        },
        {
          props: {
            onClick: () => alert("Header logo clicked!"),
            variant: "header" as const,
            size: "medium" as const,
          },
          label: "Clickable Header Variant",
        },
      ],
    },
    {
      title: "Combined Examples",
      description: "Real-world usage examples",
      items: [
        {
          props: {
            size: "small" as const,
            variant: "header" as const,
            onClick: () => alert("Navigation home"),
          },
          label: "Navigation Logo",
        },
        {
          props: {
            size: "medium" as const,
            variant: "footer" as const,
            showText: false,
          },
          label: "Footer Logo",
        },
        {
          props: {
            size: "large" as const,
            imageOnly: true,
          },
          label: "Hero Section Logo",
        },
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: colors.deepBlue,
            fontFamily: (theme) => theme.fontTokens.heading.bold,
          }}
        >
          Logo Component Demo
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: isDarkMode ? colors.silver : colors.darkGray,
            mb: 2,
            fontFamily: (theme) => theme.fontTokens.body.regular,
          }}
        >
          Showcasing theme-aware logo variants
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDarkMode ? colors.silver : colors.slate,
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          The Logo component automatically switches between light and dark
          versions based on the current theme. Current theme:{" "}
          <strong>{isDarkMode ? "Dark" : "Light"}</strong>
        </Typography>
      </Box>

      {demoSections.map((section, sectionIndex) => (
        <Box key={section.title} sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: colors.deepBlue,
              fontFamily: (theme) => theme.fontTokens.heading.semiBold,
            }}
          >
            {section.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDarkMode ? colors.silver : colors.darkGray,
              mb: 3,
              fontFamily: (theme) => theme.fontTokens.body.regular,
            }}
          >
            {section.description}
          </Typography>

          <Grid container spacing={3}>
            {section.items.map((item, itemIndex) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={itemIndex}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    backgroundColor: isDarkMode ? colors.charcoal : "#ffffff",
                    border: `1px solid ${isDarkMode ? colors.graphite : colors.silver}`,
                    borderRadius: 2,
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: colors.accentBlue,
                      boxShadow: isDarkMode
                        ? "0 8px 24px rgba(0, 0, 0, 0.2)"
                        : "0 8px 24px rgba(30, 41, 59, 0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: 80,
                      mb: 2,
                    }}
                  >
                    <Logo {...item.props} />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: isDarkMode ? "#ffffff" : colors.charcoal,
                      fontFamily: (theme) => theme.fontTokens.body.semiBold,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: isDarkMode ? colors.silver : colors.darkGray,
                      fontFamily: (theme) => theme.fontTokens.body.regular,
                      display: "block",
                      mt: 1,
                    }}
                  >
                    {Object.entries(item.props)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(", ")}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {sectionIndex < demoSections.length - 1 && (
            <Divider
              sx={{
                mt: 4,
                borderColor: isDarkMode ? colors.graphite : colors.silver,
              }}
            />
          )}
        </Box>
      ))}

      <Box
        sx={{
          mt: 6,
          p: 4,
          backgroundColor: isDarkMode ? colors.darkNavy : colors.lightGray,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: colors.deepBlue,
            fontFamily: (theme) => theme.fontTokens.heading.semiBold,
          }}
        >
          Usage Guidelines
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: isDarkMode ? colors.silver : colors.slate,
            lineHeight: 1.7,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          • Use <strong>header variant</strong> in navigation areas
          <br />• Use <strong>footer variant</strong> in footer sections
          <br />• Use <strong>imageOnly</strong> for avatars or tight spaces
          <br />• Always provide <strong>onClick</strong> for clickable logos
          <br />• The component automatically adapts to light/dark themes
        </Typography>
      </Box>
    </Container>
  );
};

export default LogoDemo;
